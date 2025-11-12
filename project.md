# MVP Build Instructions: Manus+Ameri

## 1. Objective

Build a **web-app** (that can function on mobile), **single-page React application** that allows a user to find their **U.S. Federal Representatives** by address, view their profile, and see related news. The app will be a **single `.jsx` file**.

---

## 2. Technology Stack

| Layer             | Technology                                      |
|-------------------|-------------------------------------------------|
| **Frontend**      | React (in a single `App.jsx` file)              |
| **Styling**       | Tailwind CSS (loaded via CDN)                   |
| **State Management** | React hooks (`useState`, `useEffect`)        |
| **Navigation**    | Single state variable (e.g., `currentPage`) to manage views (`"home"`, `"profile"`, `"calendar"`) |

---

## 3. Required APIs

### Google Civic Information API
- **Use**: Find officials by address
- **Endpoint**:  
  `https://www.googleapis.com/civicinfo/v2/representatives`
- **Note**: Requires API key → Use placeholder: `YOUR_GOOGLE_API_KEY`

### ProPublica Congress API
- **Use**: Get detailed member data (committees, time in office)
- **Endpoint**:  
  `https://api.propublica.org/congress/v1/members/{member-id}.json`
- **Note**: Requires API key → Use placeholder: `YOUR_PROPUBLICA_API_KEY`

### News API (e.g., NewsAPI.org or GNews)
- **Use**: Get recent news articles for an official
- **Endpoint Example**:  
  `https://newsapi.org/v2/everything?q="{Official Name}"`
- **Note**: Requires API key → Use placeholder: `YOUR_NEWS_API_KEY`

---

## 4. Application Flow & Screens

The app has **one main `App` component** that conditionally renders **three views**:  
`Home` → `Profile` → `Calendar`

---

### Screen 1: Home / Search View *(Default)*

#### Components:
- **App Title**: `"Manus+Ameri"`
- **Tagline**: `"Your non-partisan civic tracker"`
- **Search Input** (U.S. Address or Zip Code)
- **Search Button**
- **Main Navigation Bar** (links: `"Home"`, `"Calendar"`)

#### Logic:
1. User enters address/zip → clicks **"Search"**
2. Show **loading indicator**
3. Call **Google Civic Info API** with address
4. On success:
   - Parse JSON → extract officials (House, Senate, President, VP)
   - Display **"Official Cards"**:
     - Photo
     - Name
     - Party
     - Role
5. Clicking a card:
   - Sets `selectedOfficial` state
   - Switches view to **Profile**

---

### Screen 2: Profile View

#### Components:
- **Main Navigation Bar** (with **"Back to Search"** link)
- **Profile Header**:
  - Photo
  - Full Name
  - Party (e.g., `"Republican"`)
  - Role (e.g., `"U.S. Senator from California"`)
- **Tabs**: `"Summary"` (default) | `"Recent News"`

#### Logic:
- Loads when `selectedOfficial` is set
- Show **loading indicator**
- **API Calls**:
  1. **ProPublica API** → using `member-id` from Google API → get committee data
  2. **News API** → using full name → get articles

##### "Summary" Tab *(Default)*:
- **Time in Office** (e.g., `"First elected: 2018"`)
- **Committee Assignments** → simple `<ul>`

##### "Recent News" Tab:
- List of news articles
- Each item:
  - **Headline**
  - **Source Name**
  - **Date**
- Clicking article → opens link in **new tab**

---

### Screen 3: Calendar View

#### Components:
- **Main Navigation Bar** (links: `"Home"`, `"Calendar"`)
- **Title**: `"Federal Elections Calendar"`

#### Logic:
- **Static page** — No API calls
- Display **hard-coded list** of future federal election dates

#### Example:
```html
<li>U.S. General Election: November 8, 2028</li>
<li>U.S. Midterm Election: November 5, 2030</li>

---

### Design & UX (Mandatory):

##### Color Palette:

- Non-partisan & neutral
- Avoid bright red or bright blue as primary colors
- Suggested: bg-gray-800, bg-white, text-blue-900

#### Layout:
--Web-Application-first, fully responsive
--Use flexbox/grid + Tailwind responsive prefixes (md:, lg:)

#### Loading States:
- Mandatory for all API calls
- Show spinner or skeleton screen
- Prevent blank UI

#### Error Handling:
- On API failure:
  -- "Could not fetch results. Please try again."

- Display user-friendly, simple message
