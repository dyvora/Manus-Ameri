'use client';

import { useCallback, useMemo, useState } from 'react';

const GOOGLE_API_KEY = 'YOUR_GOOGLE_API_KEY';
const PROPUBLICA_API_KEY = 'YOUR_PROPUBLICA_API_KEY';
const NEWS_API_KEY = 'YOUR_NEWS_API_KEY';

const SAMPLE_OFFICIALS = [
  {
    id: 'POTUS-46',
    name: 'Morgan Lee',
    role: 'President of the United States',
    party: 'Independent',
    photoUrl: 'https://placekitten.com/200/200',
    memberId: 'S000033',
    state: 'US',
  },
  {
    id: 'VPOTUS-49',
    name: 'Isabel Chavez',
    role: 'Vice President of the United States',
    party: 'Independent',
    photoUrl: 'https://placekitten.com/201/201',
    memberId: 'H000067',
    state: 'US',
  },
  {
    id: 'sen-ca-1',
    name: 'Jordan Bennett',
    role: 'U.S. Senator from California',
    party: 'Democratic',
    photoUrl: 'https://placekitten.com/202/202',
    memberId: 'B001135',
    state: 'CA',
  },
  {
    id: 'rep-ca-12',
    name: 'Casey Patel',
    role: 'U.S. Representative for CA-12',
    party: 'Republican',
    photoUrl: 'https://placekitten.com/203/203',
    memberId: 'P000601',
    state: 'CA',
  },
];

const SAMPLE_COMMITTEES = [
  { name: 'Senate Committee on Homeland Security and Governmental Affairs' },
  { name: 'Senate Committee on Commerce, Science, and Transportation' },
  { name: 'Joint Economic Committee' },
];

const SAMPLE_NEWS = [
  {
    title: 'Leader pushes bipartisan climate package forward',
    source: 'Civic Wire',
    publishedAt: '2024-01-15T08:00:00Z',
    url: 'https://example.com/article-1',
  },
  {
    title: 'Town hall recap: constituents weigh in on infrastructure',
    source: 'National Ledger',
    publishedAt: '2024-01-10T10:30:00Z',
    url: 'https://example.com/article-2',
  },
  {
    title: 'Committee advances election security roadmap',
    source: 'Capital Daily',
    publishedAt: '2023-12-28T14:20:00Z',
    url: 'https://example.com/article-3',
  },
];

const CALENDAR_ITEMS = [
  {
    title: 'U.S. General Election',
    date: 'November 8, 2028',
  },
  {
    title: 'U.S. Midterm Election',
    date: 'November 5, 2030',
  },
  {
    title: 'Presidential Primary Season Opens',
    date: 'January 13, 2028',
  },
  {
    title: 'Inauguration Day',
    date: 'January 20, 2029',
  },
];

const formatDate = (value) =>
  new Intl.DateTimeFormat('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric',
  }).format(new Date(value));

export default function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const [searchQuery, setSearchQuery] = useState('');
  const [officials, setOfficials] = useState([]);
  const [selectedOfficial, setSelectedOfficial] = useState(null);
  const [error, setError] = useState('');
  const [isSearching, setIsSearching] = useState(false);
  const [isProfileLoading, setIsProfileLoading] = useState(false);
  const [committees, setCommittees] = useState([]);
  const [newsArticles, setNewsArticles] = useState([]);
  const [summaryMeta, setSummaryMeta] = useState({});
  const [profileTab, setProfileTab] = useState('summary');

  const hasApiKeys =
    GOOGLE_API_KEY !== 'YOUR_GOOGLE_API_KEY' &&
    PROPUBLICA_API_KEY !== 'YOUR_PROPUBLICA_API_KEY' &&
    NEWS_API_KEY !== 'YOUR_NEWS_API_KEY';

  const handleSearch = async (event) => {
    event.preventDefault();
    if (!searchQuery.trim()) {
      setError('Please enter an address or ZIP code.');
      return;
    }

    setError('');
    setIsSearching(true);

    try {
      const results = await fetchOfficials(searchQuery.trim());
      setOfficials(results);
      if (!results.length) {
        setError('No officials found for that address.');
      }
    } catch (err) {
      setError(err.message || 'Could not fetch results. Please try again.');
      setOfficials([]);
    } finally {
      setIsSearching(false);
    }
  };

  const fetchOfficials = useCallback(async (address) => {
    if (!hasApiKeys) {
      return SAMPLE_OFFICIALS;
    }

    const url = new URL(
      'https://www.googleapis.com/civicinfo/v2/representatives'
    );
    url.searchParams.set('key', GOOGLE_API_KEY);
    url.searchParams.set('address', address);

    const response = await fetch(url);
    if (!response.ok) {
      throw new Error('Could not fetch results. Please try again.');
    }

    const data = await response.json();
    const officialsList = [];

    data.offices?.forEach((office) => {
      office.officialIndices?.forEach((index) => {
        const official = data.officials?.[index];
        if (!official) return;

        officialsList.push({
          id: `${office.name}-${index}`,
          name: official.name,
          role: office.name,
          party: official.party || 'Unknown',
          photoUrl: official.photoUrl || 'https://placekitten.com/200/200',
          memberId: official.channels?.find((c) => c.type === 'GooglePlus')?.id,
          state: office.name?.split('from ')?.[1] || '',
        });
      });
    });

    return officialsList;
  }, [hasApiKeys]);

  const handleSelectOfficial = async (official) => {
    setSelectedOfficial(official);
    setCurrentPage('profile');
    setProfileTab('summary');
    setIsProfileLoading(true);
    setError('');

    try {
      const { committees: fetchedCommittees, summary } =
        await fetchOfficialDetails(official);
      setCommittees(fetchedCommittees);
      setSummaryMeta(summary);
    } catch (err) {
      setError(err.message || 'Could not fetch profile details.');
      setCommittees([]);
      setSummaryMeta({});
    } finally {
      setIsProfileLoading(false);
    }

    try {
      const articles = await fetchNewsArticles(official.name);
      setNewsArticles(articles);
    } catch (err) {
      setError(err.message || 'Could not fetch news stories.');
      setNewsArticles([]);
    }
  };

  const fetchOfficialDetails = useCallback(async (official) => {
    if (!hasApiKeys || !official.memberId) {
      return {
        committees: SAMPLE_COMMITTEES,
        summary: {
          firstElected: '2018',
          office: official.role,
          party: official.party,
        },
      };
    }

    const response = await fetch(
      `https://api.propublica.org/congress/v1/members/${official.memberId}.json`,
      {
        headers: {
          'X-API-Key': PROPUBLICA_API_KEY,
        },
      }
    );

    if (!response.ok) {
      throw new Error('Could not fetch profile details.');
    }

    const data = await response.json();
    const member = data.results?.[0];

    return {
      committees:
        member?.roles?.[0]?.committees?.map((committee) => ({
          name: committee.name,
        })) ?? SAMPLE_COMMITTEES,
      summary: {
        firstElected: member?.first_elected || 'Unknown',
        office: member?.roles?.[0]?.title || official.role,
        party: member?.current_party || official.party,
      },
    };
  }, [hasApiKeys]);

  const fetchNewsArticles = useCallback(async (officialName) => {
    if (!hasApiKeys) {
      return SAMPLE_NEWS;
    }

    const url = new URL('https://newsapi.org/v2/everything');
    url.searchParams.set('q', `"${officialName}"`);
    url.searchParams.set('sortBy', 'publishedAt');
    url.searchParams.set('pageSize', '5');

    const response = await fetch(url, {
      headers: {
        'X-Api-Key': NEWS_API_KEY,
      },
    });

    if (!response.ok) {
      throw new Error('Could not fetch news stories.');
    }

    const data = await response.json();
    return (
      data.articles?.map((article) => ({
        title: article.title,
        source: article.source?.name || 'Unknown',
        publishedAt: article.publishedAt,
        url: article.url,
      })) ?? SAMPLE_NEWS
    );
  }, [hasApiKeys]);

  const navItems = useMemo(
    () => [
      { id: 'home', label: 'Home' },
      { id: 'calendar', label: 'Calendar' },
    ],
    []
  );

  const renderNav = () => (
    <nav className="flex items-center justify-between border-b border-slate-200 bg-white px-6 py-4 shadow-sm">
      <div>
        <p className="text-xs uppercase tracking-widest text-slate-500">
          Manus+Ameri
        </p>
        <h1 className="text-2xl font-semibold text-civicBlue">
          Your non-partisan civic tracker
        </h1>
      </div>
      <div className="flex gap-2">
        {navItems.map((item) => (
          <button
            key={item.id}
            onClick={() => setCurrentPage(item.id)}
            className={`rounded-full px-4 py-2 text-sm font-medium transition ${
              currentPage === item.id
                ? 'bg-civicBlue text-white'
                : 'text-civicBlue hover:bg-slate-100'
            }`}
          >
            {item.label}
          </button>
        ))}
      </div>
    </nav>
  );

  const renderHomeView = () => (
    <section className="mx-auto flex w-full max-w-5xl flex-col gap-8 px-6 py-10">
      <form
        onSubmit={handleSearch}
        className="rounded-2xl bg-white p-6 shadow-lg ring-1 ring-slate-100"
      >
        <label className="block text-sm font-semibold text-slate-600">
          Enter your U.S. address or ZIP code
        </label>
        <div className="mt-3 flex flex-col gap-3 md:flex-row">
          <input
            type="text"
            value={searchQuery}
            onChange={(event) => setSearchQuery(event.target.value)}
            placeholder="123 Main St, Springfield, IL"
            className="w-full rounded-xl border border-slate-200 px-4 py-3 shadow-sm focus:border-civicBlue focus:outline-none"
          />
          <button
            type="submit"
            disabled={isSearching}
            className="rounded-xl bg-civicBlue px-8 py-3 font-semibold text-white shadow hover:bg-blue-900 disabled:opacity-50"
          >
            {isSearching ? 'Searching…' : 'Search'}
          </button>
        </div>
        {error && (
          <p className="mt-3 text-sm font-medium text-red-600">
            {error}
          </p>
        )}
      </form>

      <div className="rounded-2xl bg-white p-6 shadow-lg ring-1 ring-slate-100">
        <h2 className="text-lg font-semibold text-slate-700">
          Federal officials near you
        </h2>

        {isSearching && <LoadingState message="Fetching officials..." />}

        {!isSearching && (
          <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {officials.length === 0 && (
              <EmptyState />
            )}
            {officials.map((official) => (
              <article
                key={official.id}
                className="relative flex flex-col rounded-2xl border border-slate-100 bg-slate-50 p-4 shadow-sm transition hover:-translate-y-1 hover:shadow"
              >
                <div className="flex items-center gap-4">
                  <img
                    src={official.photoUrl}
                    alt={official.name}
                    className="h-16 w-16 rounded-full object-cover"
                  />
                  <div>
                    <h3 className="text-lg font-semibold text-civicBlue">
                      {official.name}
                    </h3>
                    <p className="text-sm text-slate-500">{official.role}</p>
                    <p className="text-xs text-slate-500">{official.party}</p>
                  </div>
                </div>
                <button
                  onClick={() => handleSelectOfficial(official)}
                  className="mt-6 w-full rounded-xl bg-white px-4 py-2 text-sm font-semibold text-civicBlue ring-1 ring-civicBlue transition hover:bg-slate-100"
                >
                  View profile
                </button>
              </article>
            ))}
          </div>
        )}
      </div>
    </section>
  );

  const renderProfileView = () => {
    if (!selectedOfficial) {
      return (
        <section className="mx-auto mt-10 w-full max-w-4xl px-6">
          <div className="rounded-2xl bg-white p-8 text-center shadow">
            <p className="text-slate-600">
              Select an official from the search results to view their profile.
            </p>
            <button
              onClick={() => setCurrentPage('home')}
              className="mt-4 rounded-xl border border-civicBlue px-4 py-2 text-sm font-semibold text-civicBlue"
            >
              Back to search
            </button>
          </div>
        </section>
      );
    }

    return (
      <section className="mx-auto flex w-full max-w-5xl flex-col gap-8 px-6 py-10">
        <button
          onClick={() => setCurrentPage('home')}
          className="flex items-center text-sm font-semibold text-civicBlue"
        >
          ← Back to Search
        </button>

        <div className="rounded-2xl bg-white p-8 shadow-lg ring-1 ring-slate-100">
          <div className="flex flex-col gap-6 md:flex-row md:items-center">
            <img
              src={selectedOfficial.photoUrl}
              alt={selectedOfficial.name}
              className="h-32 w-32 rounded-2xl object-cover"
            />
            <div>
              <p className="text-xs uppercase tracking-wide text-slate-500">
                {selectedOfficial.party}
              </p>
              <h2 className="text-3xl font-bold text-civicBlue">
                {selectedOfficial.name}
              </h2>
              <p className="text-lg text-slate-600">
                {selectedOfficial.role}
              </p>
            </div>
          </div>

          <div className="mt-8 flex gap-3">
            {['summary', 'news'].map((tab) => (
              <button
                key={tab}
                onClick={() => setProfileTab(tab)}
                className={`rounded-full px-5 py-2 text-sm font-semibold capitalize transition ${
                  profileTab === tab
                    ? 'bg-civicBlue text-white'
                    : 'bg-slate-100 text-civicBlue'
                }`}
              >
                {tab === 'summary' ? 'Summary' : 'Recent News'}
              </button>
            ))}
          </div>

          {isProfileLoading && <LoadingState message="Loading profile..." />}

          {!isProfileLoading && profileTab === 'summary' && (
            <div className="mt-6 grid gap-6 md:grid-cols-2">
              <div className="rounded-xl bg-slate-50 p-4">
                <h3 className="text-sm font-semibold text-slate-500">
                  Time in Office
                </h3>
                <p className="mt-2 text-lg text-slate-700">
                  First elected: {summaryMeta.firstElected ?? 'N/A'}
                </p>
              </div>
              <div className="rounded-xl bg-slate-50 p-4">
                <h3 className="text-sm font-semibold text-slate-500">
                  Role Details
                </h3>
                <p className="mt-2 text-lg text-slate-700">
                  {summaryMeta.office ?? selectedOfficial.role}
                </p>
                <p className="text-sm text-slate-500">
                  Party: {summaryMeta.party ?? selectedOfficial.party}
                </p>
              </div>

              <div className="md:col-span-2">
                <h3 className="text-sm font-semibold text-slate-500">
                  Committee Assignments
                </h3>
                <ul className="mt-3 list-disc space-y-2 rounded-xl bg-slate-50 p-4 text-slate-700">
                  {committees.map((committee) => (
                    <li key={committee.name}>{committee.name}</li>
                  ))}
                  {!committees.length && (
                    <li>No recent committee assignments available.</li>
                  )}
                </ul>
              </div>
            </div>
          )}

          {!isProfileLoading && profileTab === 'news' && (
            <div className="mt-6 space-y-4">
              {newsArticles.map((article) => (
                <article
                  key={article.url}
                  className="rounded-xl border border-slate-200 p-4 transition hover:border-civicBlue"
                >
                  <h3 className="text-lg font-semibold text-civicBlue">
                    <a href={article.url} target="_blank" rel="noreferrer">
                      {article.title}
                    </a>
                  </h3>
                  <p className="text-sm text-slate-500">
                    {article.source} · {formatDate(article.publishedAt)}
                  </p>
                </article>
              ))}
              {!newsArticles.length && (
                <p className="text-slate-500">
                  No recent news found. Try again later.
                </p>
              )}
            </div>
          )}
        </div>
      </section>
    );
  };

  const renderCalendarView = () => (
    <section className="mx-auto w-full max-w-4xl px-6 py-10">
      <div className="rounded-2xl bg-white p-8 shadow-lg ring-1 ring-slate-100">
        <h2 className="text-2xl font-semibold text-civicBlue">
          Federal Elections Calendar
        </h2>
        <p className="mt-2 text-sm text-slate-500">
          Save these upcoming key dates for federal civic engagement.
        </p>
        <ul className="mt-6 space-y-4">
          {CALENDAR_ITEMS.map((item) => (
            <li
              key={item.title}
              className="rounded-xl border border-slate-100 bg-slate-50 p-4"
            >
              <p className="text-lg font-semibold text-civicBlue">
                {item.title}
              </p>
              <p className="text-sm text-slate-600">{item.date}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );

  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-100 via-white to-slate-100">
      {renderNav()}
      {currentPage === 'home' && renderHomeView()}
      {currentPage === 'profile' && renderProfileView()}
      {currentPage === 'calendar' && renderCalendarView()}
    </main>
  );
}

function LoadingState({ message }) {
  return (
    <div className="mt-6 flex items-center gap-3 text-sm text-slate-500">
      <span className="h-4 w-4 animate-spin rounded-full border-2 border-slate-400 border-t-transparent" />
      {message}
    </div>
  );
}

function EmptyState() {
  return (
    <div className="rounded-2xl border border-dashed border-slate-200 p-8 text-center text-slate-500 sm:col-span-2 lg:col-span-3">
      No officials yet. Run a search to get started.
    </div>
  );
}
