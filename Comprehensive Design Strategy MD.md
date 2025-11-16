Comprehensive AI Design Strategy for "Manus+Ameri"


🎯 Project Overview Analysis
What You're Building: A sophisticated civic engagement platform that combines:

-Government/policy tracking (bills, officials, agencies)
-Live streaming of government proceedings
-Personalized news feeds
-Economic rewards system
-Premium subscription tiers
-Community engagement features

Design Inspiration: NBA App structure adapted for civic context
Core Vibe: "Bloomberg Terminal meets Headspace" - authoritative yet accessible


Definition: "Manus+Ameri brand = civic engagement platform"




🏗️ STRATEGIC BUILD PLAN FOR MANUS+AMERI

Phase 1: Foundation (Design System)

Prompt 1: Color Palette

color palette style guide for a civic engagement mobile app called Manus+Ameri. 
Include:

- Primary: Deep Navy (#1A365D) - authority, trust
- Secondary: Slate Grey (#64748B) - neutral backgrounds
- Accent Green (#10B981) - "In Session" status
- Accent Red (#EF4444) - "Urgent Vote" alerts
- Accent Gold (#F59E0B) - Premium features
- Neutral White (#FFFFFF)
- Neutral Off-White (#F8FAFC)
- Text Primary: #1E293B
- Text Secondary: #64748B

Display as a color swatch grid with hex codes, usage labels, and accessibility contrast ratios (WCAG AA compliance). Use a clean, professional layout suitable for a design system documentation page.



Prompt 2: Typography System

Design a typography scale for a mobile app (iOS and Android) using Inter font family:

Heading 1: Inter Bold, 32px, line-height 40px, letter-spacing -0.5px - For screen titles
Heading 2: Inter Semibold, 24px, line-height 32px - For section headers
Heading 3: Inter Semibold, 20px, line-height 28px - For card titles
Body Large: Inter Regular, 16px, line-height 24px - For primary content
Body Regular: Inter Regular, 14px, line-height 20px - For secondary content
Caption: Inter Regular, 12px, line-height 16px - For metadata
Button: Inter Semibold, 16px, uppercase - For CTAs

Display as a vertical stack with sample text for each style, showing hierarchy and usage context.




Prompt 3: Component Library - Buttons
 button component library for iOS/Android with these variants:

1. Primary Button:
   - Background: Deep Navy (#1A365D)
   - Text: White, Inter Semibold 16px
   - Height: 48px, Border radius: 12px
   - States: Default, Pressed (opacity 0.8), Disabled (opacity 0.4)

2. Secondary Button:
   - Background: Transparent
   - Border: 2px solid Deep Navy (#1A365D)
   - Text: Deep Navy, Inter Semibold 16px
   - Height: 48px, Border radius: 12px

3. Text Button:
   - Background: None
   - Text: Deep Navy, Inter Semibold 16px
   - Underline on hover

4. Premium Button:
   - Background: Gold (#F59E0B)
   - Text: White, Inter Semibold 16px
   - Icon: Lock icon (12px) to the left of text
   - Height: 48px, Border radius: 12px

Show all buttons at 320px width in a vertical stack with 16px spacing.



Phase 2: Onboarding Screens (First-Time User Flow)

Prompt 4: Splash Screen

Design an iOS app splash screen for "Manus+Ameri" civic engagement app:

- Background: Deep Navy gradient (#1A365D to #0F172A, top to bottom)
- Center: Placeholder for logo (use text "M+A" in Inter Bold 48px, white, inside a 120x120px rounded square with 24px radius, outline only, 3px stroke)
- Below logo: "Manus+Ameri" wordmark, Inter Semibold 24px, white
- Bottom: Loading animation (3 dots, 8px diameter each, 8px spacing, white, opacity pulse effect)
- Screen size: 375x812px (iPhone 14 dimensions)
- Add subtle pattern texture overlay at 5% opacity for sophistication



Prompt 5: Welcome Carousel - Slide 1
Design the first onboarding carousel slide for a civic engagement app:

Layout (375x812px iPhone):
- Top 60% of screen: Illustration area
  - Simple icon: Capitol building silhouette in white outline (180px wide)
  - Background: Deep Navy (#1A365D) with subtle gradient
  
- Bottom 40%: Content area on white background
  - Headline: "Track Your Representatives" (Inter Bold, 28px, #1E293B)
  - Body text: "Monitor bills, votes, and policy decisions at every level of government—from your city council to Congress." (Inter Regular, 16px, #64748B, center-aligned)
  - Pagination dots at bottom: 3 dots, first one filled (Deep Navy), others outline
  
- Bottom fixed: "Get Started" button (Primary button style, 90% width, centered, 24px from bottom)

Add 24px horizontal padding throughout.



Prompt 6: Welcome Carousel - Slide 2
Design the second onboarding carousel slide:

Same layout structure as Slide 1, but:
- Illustration: Large play button icon (circle with triangle, 180px diameter, white outline)
- Headline: "Watch Live Democracy"
- Body text: "Stream congressional sessions, hearings, and press briefings in real-time. Never miss a moment."
- Pagination dots: Second dot filled
- Keep same "Get Started" button



Prompt 7: Welcome Carousel - Slide 3
Design the third onboarding carousel slide:

Same layout structure, but:
- Illustration: Graph/chart icon with dollar sign (180px wide, white outline, showing upward trend line)
- Headline: "Follow the Money"
- Body text: "See who's funding your representatives. Track lobbying activity and campaign contributions with transparency."
- Pagination dots: Third dot filled
- Keep same "Get Started" button



Prompt 8: Authentication Screen
Design a sign-in/sign-up screen (375x812px):

Top section (30% of screen):
- Background: Deep Navy (#1A365D)
- Logo placeholder: "M+A" text in rounded square (same as splash screen, but 80x80px)
- Below: "Welcome to Manus+Ameri" (Inter Semibold, 20px, white)

Middle section (50% of screen, white background):
- Heading: "Sign in to continue" (Inter Bold, 24px, #1E293B)
- Button stack (vertical, 16px spacing, 90% width, centered):
  1. "Continue with Apple" button (black background, white text, Apple logo left, 48px height)
  2. "Continue with Google" button (white background, 1px grey border, colored Google logo left)
  3. "Continue with Email" button (Secondary button style from component library)
  
- Divider: Thin grey line with "OR" text in center (Inter Regular, 12px, grey)

Bottom section:
- Text link: "Skip for now" (Inter Regular, 14px, Deep Navy, underlined)
- Fine print: "By continuing, you agree to our Terms & Privacy Policy" (Inter Regular, 11px, grey, center-aligned)

All elements with 24px horizontal padding.




Prompt 9: Personalization Step 1 - Government Level Selection
Design a personalization screen titled "Which level of government interests you most?" (375x812px):

Top:
- Progress indicator: "1 of 2" (Inter Regular, 14px, grey, top-right corner, 16px from top)
- Back arrow button (top-left)
- Title: "Which level of government interests you most?" (Inter Bold, 28px, #1E293B, 24px padding)
- Subtitle: "We'll customize your feed based on your selection" (Inter Regular, 16px, grey)

Middle section:
- Selection cards (grid, vertical stack, 16px spacing):
  1. "Federal" card
     - Icon: Capitol dome illustration (48px)
     - Title: "Federal" (Inter Semibold, 20px)
     - Description: "Congress, President, Federal Agencies" (Inter Regular, 14px, grey)
     - Card style: White background, 1px border, 16px padding, 12px radius
     - Tap state: Border changes to Deep Navy 2px, slight elevation shadow
     
  2. "State" card (same structure)
     - Icon: State capitol building (48px)
     - Description: "Legislature, Governor, State Agencies"
     - Below: Dropdown field "Select your state" (appears when card is selected)
     
  3. "Local" card (same structure)
     - Icon: City building (48px)
     - Description: "City Council, Mayor, Local Government"
     - Below: Text input field "Enter your zip code" (appears when card is selected)

Bottom:
- "Continue" button (Primary style, disabled state until selection made)
- 24px from bottom edge

Allow multiple selections with checkboxes in top-right of each card.



Prompt 10: Personalization Step 2 - Topic Selection
Design a topic selection screen titled "What issues do you care about?" (375x812px):

Top:
- Progress indicator: "2 of 2" (top-right)
- Back arrow button (top-left)
- Title: "What issues do you care about?" (Inter Bold, 28px, #1E293B)
- Subtitle: "Select at least 3 topics" (Inter Regular, 16px, grey)

Middle section:
- Topic chip grid (flexible wrap layout, 8px spacing):
  - Each chip: Pill-shaped button with topic name
  - Unselected state: White background, 1px grey border, grey text
  - Selected state: Deep Navy background, white text, checkmark icon
  
  Topics to show:
  Economy, Healthcare, Defense, Education, Environment, Immigration, Technology, Criminal Justice, Infrastructure, Civil Rights, Energy, Housing, Transportation

- Chips sized to content width + 32px horizontal padding, 40px height

Bottom:
- "Finish Setup" button (Primary style, requires 3+ selections to enable)
- 24px from bottom

Show chips in 2-column grid on small screens for optimal space usage.




Phase 3: Main App Interface - Tab Navigation

Prompt 11: Bottom Tab Navigation Bar

Design an iOS-style bottom tab bar for 5 navigation items (375px wide, 83px tall including safe area):

Background: White with subtle top border shadow

Tab items (evenly spaced, 20% width each):
1. Headlines
   - Icon: Newspaper/document icon (24x24px)
   - Label: "Headlines" (Inter Regular, 10px)
   - Active state: Deep Navy icon and text
   - Inactive state: Grey (#64748B)

2. For You
   - Icon: Star/sparkle icon (24x24px)
   - Label: "For You"

3. Watch
   - Icon: Play button in circle (24x24px)
   - Label: "Watch"

4. Directory
   - Icon: Grid/database icon (24x24px)
   - Label: "Directory"

5. Profile
   - Icon: User silhouette (24x24px)
   - Label: "Profile"

Selected tab should have:
- Colored icon (Deep Navy #1A365D)
- Bold text (Inter Semibold)
- Subtle indicator bar above icon (3px tall, 24px wide, rounded, Deep Navy)

Safe area: 34px bottom padding for iPhone home indicator.




Phase 4: Headlines Tab (Home Screen)

Prompt 12: Headlines Screen - Header
Design the header section for the Headlines tab (375px wide):

Components (top to bottom):
1. Status Bar Space (44px) - includes time, battery, signal
   
2. Header Bar (60px, white background):
   - Left: Today's date "Friday, Nov 14" (Inter Medium, 14px, grey)
   - Right: Profile icon button (32x32px circle, user initials or silhouette)
   
3. Title Section (80px):
   - Large title: "Daily Briefing" (Inter Bold, 34px, #1E293B)
   - Subtitle: "Top stories and events" (Inter Regular, 16px, grey)
   - Background: White
   - Padding: 24px horizontal, 16px vertical

4. Search Bar (56px with padding):
   - Rounded rectangle (12px radius)
   - Light grey background (#F1F5F9)
   - Placeholder: "Search news, bills, officials..." (Inter Regular, 16px, grey)
   - Magnifying glass icon (left, 20px)
   - Filter button icon (right, 20px)
   - Height: 44px

Total header height: ~240px
Add subtle shadow below search bar for separation.



Prompt 13: Headlines Screen - Featured Story Card
Design a large featured story card (343px wide for 16px margins, variable height):

Card structure:
1. Image section (343x200px):
   - Placeholder: Dark grey rectangle with "16:9" text
   - Overlay gradient (bottom 60px): Black gradient 0% to 60% opacity
   - Live indicator badge (if applicable): Red dot + "LIVE" text, top-left corner, 8px margin
   
2. Content overlay (on bottom of image):
   - Category tag: Small pill "Breaking" or "Featured" (8px padding, 6px radius, semi-transparent white)
   - Headline: "Senate Passes Major Infrastructure Bill" (Inter Bold, 20px, white, 2 lines max, ellipsis)
   
3. Meta info section (below image, white background, 16px padding):
   - Source logo + name: "Associated Press" (Inter Regular, 14px, grey)
   - Timestamp: "2 hours ago" (Inter Regular, 14px, grey)
   - Dot separator between source and time
   
Card styling:
- Border radius: 16px
- Subtle shadow: 0px 2px 8px rgba(0,0,0,0.08)
- Entire card is tappable

Top margin: 16px below search bar



Prompt 14: Headlines Screen - Calendar Strip
Design a horizontal scrolling calendar strip showing today's key events (375px viewport):

Container:
- Height: 120px including padding
- Background: Light grey (#F8FAFC)
- Top/bottom padding: 16px

Section header (fixed, left side):
- "Today's Schedule" (Inter Semibold, 16px, #1E293B)
- Small right-pointing arrow (12px)

Scrollable content:
- Horizontal scroll of event cards
- Each card: 180px wide, 80px tall, 12px spacing between cards

Event card design:
- White background
- Border radius: 12px
- Padding: 12px
- Subtle shadow

Card contents:
- Time: "2:00 PM" (Inter Bold, 16px, Deep Navy)
- Event type tag: Small pill "Senate Vote" (8px padding, Deep Navy background, white text, 6px radius)
- Event name: "Infrastructure Bill HR-123" (Inter Regular, 13px, grey, 1 line truncated)

First card is 16px from left edge, last card has 16px trailing space for better UX.

Show 3-4 cards visible at once, more available via horizontal scroll.



Prompt 15: Headlines Screen - News List with Ad Integration
Design a vertical scrolling news list with integrated ad placement (375px wide):

Section header:
- "Latest Headlines" (Inter Semibold, 18px, #1E293B, 24px left padding)
- View all link (right side, Inter Regular, 14px, Deep Navy, "See all >")

News article card (standard):
- Container: Full width minus 16px margins, white background
- Layout: Horizontal (image left, content right)
  
  Left side:
  - Thumbnail: 100x100px square, 12px radius, grey placeholder
  
  Right side (remaining width minus 12px gap):
  - Category: Small tag "Politics" (Deep Navy text, 12px)
  - Headline: "Congress Debates New Climate Policy" (Inter Semibold, 16px, #1E293B, 2 lines max)
  - Source + time: "Reuters · 4h ago" (Inter Regular, 13px, grey)
  
- Card height: 116px (100px + 16px padding)
- Bottom border: 1px solid light grey (#E5E7EB)

Ad card (appears every 5 articles):
- Same dimensions as news card
- Different styling to indicate sponsored content:
  - "Community Sponsor" tag (top-left, gold background, white text, 8px padding)
  - Business logo: 100x100px left side
  - Business info right side:
    - Business name (Inter Semibold, 16px)
    - Offer: "15% off for app users" (Inter Regular, 14px)
    - Small "Learn More" button (text button style, 12px text)
  - Subtle gold left border (3px) to differentiate from news

Show stack of 3 news cards, 1 ad card, then 5 more news cards vertically.


Phase 5: For You Tab (Personalized Feed)


Prompt 16: For You Feed - Full Screen Video Card

Design a full-screen vertical video card format (375x812px like Instagram Reels/TikTok):

Layout:
1. Video player area (full screen):
   - Placeholder: Dark grey rectangle with play icon overlay
   - Video aspect ratio: Fill screen vertically, center-crop horizontally
   
2. Overlay elements (on top of video):
   
   Top section (safe area 44px from top):
   - "For You" title (Inter Semibold, 16px, white, with subtle shadow for readability)
   - Filter button (top-right, white icon with background blur)
   
   Right side vertical action bar (60px from right edge):
   - Profile thumbnail (48x48px circle, white border)
   - Like button (heart icon, 44x44px tap area, white icon)
   - Like count "124" below icon (Inter Regular, 12px, white)
   - Comment button (speech bubble icon)
   - Comment count "12"
   - Share button (arrow icon)
   - More options (3 dots)
   - All buttons vertically stacked, 24px spacing
   
   Bottom section (120px from bottom, gradient overlay black 0-60% opacity):
   - Content creator: "@USHouseExplainers" (Inter Semibold, 14px, white)
   - Video title: "How a Bill Becomes a Law - Part 3" (Inter Bold, 18px, white, 2 lines max)
   - Description: "Understanding the committee process..." (Inter Regular, 14px, white, semi-transparent, 2 lines, "more" link)
   - Hashtags: "#CivicEducation #Congress" (Inter Regular, 13px, white, semi-transparent)
   
   Bottom tab bar: Standard navigation (83px tall)

Interaction: Swipe up for next video, tap left/right for skip back/forward 15 seconds.



Prompt 17: For You Feed - Bill Alert Card
Design a bill alert card for the For You feed (375x812px vertical format):

Background: White (differs from video cards)

Top section:
- Alert badge: "Your Representative Voted" (Gold background, white text, full-width banner, 12px padding)
- Rep profile header:
  - Left: Circular photo (64px), party color border (2px, red or blue)
  - Right content:
    - Name: "Rep. Jane Smith" (Inter Bold, 18px)
    - District: "CA-12" (Inter Regular, 14px, grey)
    - Party: Small tag "Democrat" (blue background, 6px padding)

Middle section (16px padding):
- Bill number: "HR-1234" (Inter Semibold, 16px, Deep Navy)
- Bill title: "Infrastructure Investment and Jobs Act" (Inter Bold, 24px, #1E293B, 3 lines max)

Vote section (colored background):
- Large vote result: "VOTED YES" (Inter Bold, 48px, Green #10B981, centered)
- Icon: Checkmark (64px, Green)
- Vote date: "Voted on Nov 12, 2025" (Inter Regular, 14px, grey)

Key points section:
- "What this means:" header (Inter Semibold, 16px)
- 3 bullet points with icons (16px left margin)
  - "$1.2T for infrastructure"
  - "Bipartisan support"
  - "Expected to pass Senate"

Bottom actions:
- "Read Full Bill" (Primary button, 90% width)
- "Share this update" (Text button, center, 16px below)

Right-side action bar (same as video card, positioned for consistency)

Swipeable: User swipes up to next card.


Prompt 18: For You Feed - Quote Card
Design a quote card for the For You feed (375x812px):

Background: Deep Navy gradient (#1A365D to #0F172A)

Main content (centered):
- Large quotation mark icon (top, 48px, white, 30% opacity)
- Quote text: "We must invest in our nation's future. This infrastructure bill is a once-in-a-generation opportunity." (Inter Regular, 28px, white, center-aligned, high line-height 1.5)
- Closing quotation mark (48px, white, 30% opacity)

Bottom attribution section (white background, rounded top corners 24px):
- Speaker headshot (80px circle, centered, -40px overlap with quote area)
- Name: "President Jane Doe" (Inter Bold, 20px, #1E293B)
- Context: "White House Press Briefing" (Inter Regular, 14px, grey)
- Date: "November 13, 2025" (Inter Regular, 13px, grey)
- Small icon buttons: Share, Bookmark, More (horizontal row, 40px tap areas)

Right-side action bar (same vertical placement as other cards)

Design note: Cards should have consistent UI element positions across different card types (action buttons, swipe indicators) for seamless scrolling experience.





Phase 6: Watch Tab (Live Streaming Hub)


Prompt 19: Watch Tab - Header & Live Now Section

Design the Watch tab main screen (375px width, scrollable height):

Header (fixed):
- Large title: "Watch" (Inter Bold, 34px, #1E293B, 24px left padding)
- Subtitle: "Live streams & archives" (Inter Regular, 16px, grey)
- Filter chips (horizontal scroll, 8px from title):
  - "All", "House", "Senate", "White House", "Hearings"
  - Pill-shaped, 32px height, 16px horizontal padding
  - Selected: Deep Navy background, white text
  - Unselected: Light grey background, dark text

Live Now Section:
- Section header bar:
  - Left: "LIVE NOW" (Inter Bold, 18px, Red #EF4444) with pulsing red dot (8px) before text
  - Right: "See All" link (Inter Regular, 14px, Deep Navy)
  
- Horizontal scroll of live stream cards:
  
  Large featured card (first card, 300x169px for 16:9 aspect):
  - Video thumbnail with "LIVE" badge (top-left, red background, white text, 8px padding)
  - Gradient overlay on bottom 40%
  - View count: "1.2K watching" (bottom-left, white text with icon)
  - Title overlay: "Senate Floor Debate" (bottom, white, Inter Semibold, 16px)
  - Duration badge: "Started 45m ago" (bottom-right, white)
  
  Standard cards (remaining cards, 200x113px):
  - Same structure as featured, scaled down
  - Title: "House Session" (1 line)
  
- Cards have 12px spacing, 16px leading/trailing margins
- Show 1.5 cards to indicate scrollability

Styling: White background, cards with rounded corners 12px, subtle shadows.



Prompt 20: Watch Tab - Upcoming Hearings Section

Design an "Upcoming Hearings" section for the Watch tab (375px width):

Section header:
- "Upcoming Hearings" (Inter Semibold, 18px, #1E293B, 24px left padding)
- "View Schedule" link (right, Inter Regular, 14px, Deep Navy)

List layout (vertical stack):

Each hearing card (343px wide, variable height, 12px vertical spacing):
- White background, 12px border radius, 16px padding
- Left side indicator: Colored vertical bar (4px wide, color-coded by chamber: Blue=House, Red=Senate, Purple=Joint)

Card contents (left to right layout):
1. Time block (fixed 60px width):
   - Time: "2:00 PM" (Inter Bold, 18px, Deep Navy)
   - Date: "Today" or "Nov 15" (Inter Regular, 12px, grey)

2. Divider: 1px vertical grey line

3. Content area (remaining width):
   - Chamber tag: Small pill "Senate Judiciary" (8px padding, light blue background)
   - Title: "Supreme Court Nominee Confirmation Hearing" (Inter Semibold, 15px, #1E293B, 2 lines max)
   - Location: "Hart Senate Office Building" (Inter Regular, 13px, grey)
   - Reminder button: "Set Reminder" (small text button, Deep Navy, with bell icon)

Show 3-4 hearing cards in vertical stack, then "View All Hearings" link button at bottom.

Bottom padding: 24px to accommodate tab bar.



Prompt 21: Watch Tab - Featured Archives Section

Design a "Featured Archives" section (375px width):

Section header:
- "Featured Archives" (Inter Semibold, 18px, #1E293B, 24px left padding)
- Subheader: "Best moments from yesterday" (Inter Regular, 14px, grey)

Horizontal scroll of archive video cards:

Card design (260x200px each):
1. Video thumbnail area (260x146px for 16:9 aspect):
   - Placeholder: Grey rectangle with play button overlay (48px circle, white with 60% opacity)
   - Duration badge: "12:34" (bottom-right corner of thumbnail, 8px padding, black background 70% opacity, white text)
   - View count overlay: "45K views" (bottom-left, 8px padding, same style as duration)

2. Content area below thumbnail (54px height, white background):
   - Title: "Key Moments: Infrastructure Vote" (Inter Semibold, 14px, #1E293B, 2 lines max, ellipsis)
   - Date: "Nov 13, 2025" (Inter Regular, 12px, grey)

Card styling:
- Border radius: 12px
- Subtle shadow: 0px 2px 6px rgba(0,0,0,0.06)
- 12px spacing between cards
- 16px leading/trailing margins

Show 1.3 cards visible to indicate more content to scroll.

Alternative card types to mix in:
- "Highlight Reels" - Shorter clips (2-5 min)
- "Full Sessions" - Complete recordings (2+ hours)
- Different thumbnail overlays to indicate type

Bottom: "Browse All Archives" link button (Primary button style, 90% width, centered)




Phase 7: Directory Tab (Core Data Hub)


Prompt 22: Directory Tab - Top Segment Control & Menu Grid

Design the Directory tab main view (375px width):

Header section (fixed):
- Large title: "Directory" (Inter Bold, 34px, #1E293B, 24px padding)
- Search bar (same style as Headlines tab):
  - Placeholder: "Search officials, agencies, bills..."
  - 44px height, 12px radius, light grey background
  - Magnifying glass icon left, filter icon right

Segment control (full width minus 32px margins):
- 3 segments: Federal | State | Local
- Style: iOS standard segmented control
  - Background: Light grey (#F1F5F9)
  - Selected segment: White with subtle shadow
  - Unselected: Transparent
  - Height: 36px, 6px radius
- Text: Inter Semibold, 15px
- Active state: Deep Navy text
- Inactive: Grey text (#64748B)

Content area (when "Federal" is selected):

Grid menu (2 columns, 16px gap):

Card 1 - Executive Branch:
- Size: ~165px square
- Background: Linear gradient (top: #1A365D, bottom: #334155)
- Icon: White House silhouette (64px, white)
- Title: "Executive" (Inter Bold, 20px, white)
- Subtitle: "President & Cabinet" (Inter Regular, 13px, white, 70% opacity)
- Tap area: Entire card

Card 2 - Legislative Branch:
- Background: Linear gradient (top: #0F766E, bottom: #14B8A6)
- Icon: Capitol dome (64px, white)
- Title: "Legislative"
- Subtitle: "Senate & House"

Card 3 - Judicial Branch:
- Background: Linear gradient (top: #7C3AED, bottom: #A78BFA)
- Icon: Scales of justice (64px, white)
- Title: "Judicial"
- Subtitle: "Supreme Court"

Card 4 - Federal Agencies:
- Background: Linear gradient (top: #DC2626, bottom: #F87171)
- Icon: Building/organization icon (64px, white)
- Title: "Agencies"
- Subtitle: "EPA, FDA, DOD..."

Card 5 - Lobbyists & PACs:
- Background: Linear gradient (top: #D97706, bottom: #FBBF24)
- Icon: Handshake icon (64px, white)
- Title: "Lobbyists"
- Subtitle: "Firms & PACs"
- Premium lock icon: Small gold lock (16px, top-right corner of card)

Card 6 - Bills & Legislation:
- Background: Linear gradient (top: #0284C7, bottom: #38BDF8)
- Icon: Document icon (64px, white)
- Title: "Bills"
-RetryJNContinue- Subtitle: "Track legislation"

Card styling:
- Border radius: 16px
- Subtle shadow: 0px 4px 12px rgba(0,0,0,0.12)
- Padding: 20px
- Icon positioned top-center
- Text center-aligned
- Hover/press state: Scale 0.98, slight shadow increase

Bottom padding: 100px to accommodate tab bar and scrolling comfort.



Prompt 23: Directory - Official Profile List View

Design a list view when user taps "Legislative" from Directory (375px width):

Header with back navigation:
- Back button (left): "< Directory" (Inter Regular, 16px, Deep Navy)
- Title: "U.S. Congress" (Inter Bold, 28px, #1E293B, centered)
- Filter button (right): Funnel icon (24px)

Sub-navigation tabs (horizontal scroll, sticky below header):
- Chips: "All", "Senate", "House", "Your State"
- Style: Same as Watch tab filter chips
- Selected shows count: "Senate (100)"

Search & sort bar:
- Search input: "Search by name or state..." (44px height)
- Sort dropdown button: "Sort by: State ▾" (right side, 36px height)

Official list (vertical scroll):

Each official card (343px wide, 88px height, 12px bottom margin):

Layout (horizontal):
1. Left: Profile photo (64x64px circle)
   - Overlay: Small party badge (16px circle, bottom-right of photo)
     - Blue for Democrat, Red for Republican, Grey for Independent

2. Middle content area (flexible width):
   - Line 1: Name "Sen. Elizabeth Warren" (Inter Semibold, 16px, #1E293B)
   - Line 2: "Massachusetts (D)" (Inter Regular, 14px, grey)
   - Line 3: Role tag "Senate Judiciary Committee" (small pill, 6px padding, light blue background, Deep Navy text, 12px)

3. Right: Chevron icon (20px, grey, centered vertically)

Card background: White
Border: 1px solid light grey (#E5E7EB)
Border radius: 12px
Padding: 12px
Tap state: Background changes to light grey

List features:
- Alphabet section headers: Large letter (Inter Bold, 24px, grey) with sticky positioning
  - "W" header before Warren
  - "Y" header before Yang, etc.
- Show 6-7 cards visible, then scroll
- Loading state: Skeleton cards with grey animated shimmer

Bottom: "Showing 100 of 535 results" (Inter Regular, 14px, grey, centered)



Prompt 24: Directory - Official Profile Detail View

Design a detailed profile view when user taps an official (375px width, scrollable):

Top section (fixed, with parallax scroll effect):
1. Header image area (375x200px):
   - Background: Deep Navy to Slate Grey gradient
   - Back button (top-left, white, with blur background): "< Back"
   - Share button (top-right, white)

2. Profile card (overlapping header by 60px):
   - White background, centered, 343px wide
   - Border radius: 20px
   - Shadow: 0px 8px 24px rgba(0,0,0,0.12)
   - Padding: 24px
   
   Contents:
   - Profile photo: 120x120px circle, centered, -60px offset from card top (overlaps header)
   - Name: "Sen. Elizabeth Warren" (Inter Bold, 24px, #1E293B, centered)
   - Party & State: "Democrat • Massachusetts" (Inter Regular, 16px, grey, centered)
   - Quick action buttons (horizontal row, 16px gap, centered):
     - "Follow" button (Primary style, 100px width)
     - "Contact" button (Secondary style, 100px width)

Scrollable content below profile card:

Quick Stats section (343px wide, white card, 16px margin-top):
- 3-column grid:
  
  Column 1:
  - Number: "12" (Inter Bold, 32px, Deep Navy)
  - Label: "Years in Office" (Inter Regular, 12px, grey)
  
  Column 2:
  - Number: "2026" (Inter Bold, 32px, Deep Navy)
  - Label: "Next Election" (Inter Regular, 12px, grey)
  
  Column 3:
  - Number: "89%" (Inter Bold, 32px, Green #10B981)
  - Label: "Attendance" (Inter Regular, 12px, grey)

- Card styling: White background, 12px radius, 16px padding, light border

Tab navigation (sticky below quick stats):
- Horizontal tabs: Overview | News | Voting | Donors | Contact
- Style: Underline indicator for active tab
- Active: Deep Navy text + 3px bottom border
- Inactive: Grey text
- Font: Inter Semibold, 15px

Overview Tab content:

1. Bio section:
   - Header: "Biography" (Inter Semibold, 18px)
   - Text: 2-3 paragraphs (Inter Regular, 15px, line-height 1.6, #1E293B)
   - "Read more" link if truncated

2. Committee Assignments card:
   - Header: "Committee Assignments" (Inter Semibold, 18px)
   - List of committees with role badges:
     - "Senate Judiciary Committee" (Inter Regular, 15px) - "Member" badge
     - "Banking Committee" - "Ranking Member" badge (gold)
   - Each item with small arrow icon (right)

3. Recent Activity card:
   - Header: "Recent Activity" (Inter Semibold, 18px)
   - Timeline of recent votes/actions (3-4 items):
     - Date indicator (left, grey)
     - Bill number + title (Inter Regular, 15px)
     - Vote result badge (YES/NO with color)

4. Social Media Links:
   - Icon buttons: Twitter, Facebook, Official Website
   - 48px tap areas, grey icons, horizontal row

All content cards: 16px spacing between, 16px horizontal margins, white backgrounds, 12px radius



Prompt 25: Directory - Voting Record Tab (Premium Upsell)

Design the Voting Record tab for an official's profile (375px width):

Top section (visible to all users):
- Tab title: "Voting Record" (Inter Bold, 24px, 24px padding)
- Filter row:
  - "Recent Votes" dropdown (left)
  - "Filter by topic" button (right, with filter icon)

Free preview section:
- "Last 3 Votes" header (Inter Semibold, 16px, grey)

Vote cards (3 cards visible, full-width minus 32px margins):

Each vote card (343px wide, variable height):
- Top meta row:
  - Bill number: "HR-1234" (Inter Semibold, 14px, Deep Navy)
  - Date: "Nov 10, 2025" (Inter Regular, 13px, grey, right-aligned)

- Bill title: "Infrastructure Investment and Jobs Act" (Inter Semibold, 17px, #1E293B, 2 lines max)

- Vote section (horizontal layout):
  - Left: Large vote badge
    - "YES" in white text on Green (#10B981) background, or
    - "NO" in white text on Red (#EF4444) background
    - 80px wide, 40px height, 8px radius, bold
  - Right: Vote details
    - "Voted with majority" (Inter Regular, 14px, grey)
    - Final tally: "68-32" (Inter Semibold, 14px, #1E293B)

- Card styling: White background, 16px padding, 12px radius, 1px light border
- 12px spacing between cards

Premium lock section (below 3rd card):

Blur effect overlay (160px height):
- Show 2-3 more vote cards beneath with CSS blur filter (8px blur)
- Gradual fade to white at bottom

Lock overlay (centered on blur):
- Semi-transparent white background (90% opacity)
- Border radius: 20px
- Padding: 32px
- Shadow: 0px 8px 32px rgba(0,0,0,0.16)

Contents:
- Gold lock icon (48px, centered)
- Headline: "Unlock Full Voting History" (Inter Bold, 22px, #1E293B, centered)
- Benefit list (left-aligned, checkmark icons):
  - "Complete voting record since 2015"
  - "Advanced filtering & analytics"
  - "Comparison with other officials"
  - "Export data & generate reports"
  - Font: Inter Regular, 15px, line-height 1.8

- "Try Premium" button (Primary style with gold background #F59E0B, 90% width, centered)
- "Learn more about Premium" text link (Inter Regular, 14px, Deep Navy, centered, 12px below button)

Below lock section:
- "What's included in Premium?" FAQ accordion (collapsed state, 16px top margin)



Prompt 26: Directory - Donors Tab (Premium Upsell)

Design the Donors tab for an official's profile (375px width):

Tab header:
- Title: "Campaign Finance" (Inter Bold, 24px, 24px padding)
- Cycle selector: "2024 Election Cycle ▾" dropdown (right-aligned)

Free preview section:

Top donors preview card:
- Header: "Top 3 Contributors" (Inter Semibold, 18px)
- Subheader: "Based on FEC filings" (Inter Regular, 13px, grey)

Donor list (3 items visible):

Each donor row (horizontal layout, 16px padding):
1. Rank number (left, 32px circle, light grey background):
   - "1", "2", "3" (Inter Bold, 18px, Deep Navy)

2. Donor info (middle, flexible width):
   - Organization name: "Tech Workers Union" (Inter Semibold, 16px, #1E293B)
   - Type: "Labor Organization" (Inter Regular, 13px, grey)

3. Amount (right, right-aligned):
   - "$250,000" (Inter Bold, 18px, Deep Navy)
   - Small bar graph icon (16px, grey)

- Alternating row backgrounds: White and light grey (#F8FAFC)
- 1px dividers between rows

Contribution summary card (below top 3):
- 2-column grid:
  - "Total Raised": "$2.4M" (Inter Bold, 24px, Deep Navy)
  - "Individual Donors": "3,456" (Inter Bold, 24px, Deep Navy)
- Card styling: Light blue background, 16px padding, 12px radius

Premium lock section:

Blur overlay (same technique as Voting Record tab):
- Show blurred donor list (rows 4-10) beneath
- Blur strength: 10px

Lock overlay (centered):
- White background, 20px radius, 32px padding
- Gold lock icon (48px)
- Headline: "See the Complete Donor Map" (Inter Bold, 22px, centered)

Feature highlights (icon + text rows):
- Icon: Map pin (20px, gold)
  Text: "Interactive donor geographic map"
- Icon: Pie chart (20px, gold)
  Text: "Breakdown by industry & sector"
- Icon: Timeline (20px, gold)
  Text: "Historical contribution trends"
- Icon: Network (20px, gold)
  Text: "Connected donors & PACs"

Font for features: Inter Regular, 15px, line-height 2.0

Buttons:
- "Unlock Full Data - Try Premium" (Primary button, gold background)
- "See sample report" (Text button, Deep Navy)

Bottom note:
- Small disclaimer text: "Data sourced from Federal Election Commission" (Inter Regular, 11px, grey, italic)
- FEC logo (32px, grey)




Phase 8: Profile Tab (Settings & Monetization)


Prompt 27: Profile Tab - User Dashboard

Design the Profile tab main view (375px width, scrollable):

Header section (Deep Navy gradient background, 200px height):
- Settings icon (top-right, 32px, white)
- User profile photo (120x120px circle, centered, white 4px border)
- Name: "John Doe" (Inter Bold, 24px, white, centered, below photo)
- Membership badge (centered, 8px below name):
  - Free tier: "Public Member" (grey badge, 8px padding, 6px radius)
  - Premium tier: "Premium Member" (gold badge, with crown icon)

Quick stats row (3 columns, white text, centered, 24px below badge):
- Column 1: "42" (Inter Bold, 20px) + "Following" (Inter Regular, 12px)
- Column 2: "128" + "Votes Tracked"
- Column 3: "3" + "Alerts Set"

Scrollable content (white background):

Premium upsell card (if not premium, -40px overlap with header):
- Large card: 343px wide, variable height
- Background: Linear gradient (Gold #F59E0B to Orange #F97316)
- Border radius: 20px
- Padding: 24px
- Shadow: 0px 8px 24px rgba(245,158,11,0.3)

Contents:
- Icon: Crown icon (48px, white)
- Headline: "Upgrade to Premium" (Inter Bold, 24px, white)
- Benefits list (white text, checkmark icons):
  - "Ad-free experience" (Inter Regular, 15px)
  - "Full voting records & analytics"
  - "Complete donor databases"
  - "Priority customer support"
  - "Exclusive reports & insights"

- Price: "$9.99/month" (Inter Bold, 32px, white)
  - Small text below: "or $99/year (save 17%)" (Inter Regular, 14px, white, 70% opacity)

- "Start Free Trial" button (White background, gold text, Inter Semibold 16px, full-width, 48px height)
- "Learn more" text link (white, underlined, centered, 12px below button)

My Ecosystem section (24px top margin):

Section header:
- "My Ecosystem" (Inter Bold, 22px, #1E293B, 24px left padding)
- Subheader: "Earn rewards & shop" (Inter Regular, 14px, grey)

Cards grid (2 columns, 16px gap, 16px margins):

Shop card (165x140px):
- Background: Light purple gradient
- Icon: Shopping bag (48px, white)
- Title: "Shop" (Inter Bold, 18px, white)
- Subtitle: "Support creators" (Inter Regular, 13px, white, 70% opacity)
- Badge: "New items" (small red dot, top-right)

Rewards card (165x140px):
- Background: Light green gradient
- Icon: Gift box (48px, white)
- Title: "Rewards" (Inter Bold, 18px, white)
- Points display: "1,240 pts" (Inter Bold, 20px, white)
- Subtitle: "Redeem now" (Inter Regular, 13px)

Menu list section (16px top margin):

List items (full-width, 56px height each, 1px bottom borders):
- Icon (left, 24px, Deep Navy) + Label (Inter Regular, 16px, #1E293B) + Chevron (right, grey)

Items:
1. Bell icon - "Notifications"
2. Map pin icon - "Location Settings" + small tag "Las Vegas, NV" (grey, 12px)
3. Moon icon - "Dark Mode" + Toggle switch (right, instead of chevron)
4. Document icon - "Privacy Policy"
5. Headphones icon - "Help & Support"
6. Info icon - "About Manus+Ameri" + Version "v1.0.2" (small grey text)

Bottom section:
- "Sign Out" button (Secondary button style, 90% width, centered, 24px top margin, Red text)
- Legal links: "Terms of Service • Privacy" (Inter Regular, 12px, grey, centered, 16px below)

Bottom padding: 100px for tab bar.



Prompt 28: Profile - Shop Integration Screen

Design the Shop screen (375px width, scrollable):

Header:
- Back button (left): "< Profile"
- Title: "Shop" (Inter Bold, 28px, #1E293B, centered)
- Cart icon (right, 28px) with badge showing cart count

Hero section (343px wide, 160px height):
- Banner image: Stylized illustration of merchandise
- Overlay text: "Support Independent Creators" (Inter Bold, 24px, white, with gradient overlay for readability)
- Shop tag: "Official Merch" (small pill, top-left, white background, Deep Navy text)

Filter bar (horizontal scroll, sticky):
- Chips: "All", "Apparel", "Accessories", "Books", "Art", "Digital"
- Style: Same as previous filter chips

Featured drop section:

Section header:
- "Featured Drop" (Inter Semibold, 20px, #1E293B, 24px padding)
- "Limited Edition" badge (red, pulsing animation)

Large product card (343px wide, variable height):
- Product image: 343x343px square (high-quality mockup)
- Image overlay: "Only 50 left" badge (top-right, urgent red background)

Product info (white background, 16px padding):
- Category: "Apparel" (small tag, grey)
- Name: "Constitution Graphic Tee" (Inter Bold, 20px, #1E293B)
- Creator: "by CivicPride Studios" (Inter Regular, 14px, grey)
- Price: "$34.99" (Inter Bold, 24px, Deep Navy)
- Rating: 5 stars (gold) + "(124 reviews)" (Inter Regular, 13px, grey)
- "Add to Cart" button (Primary style, full-width within card)

Product grid (2 columns, 12px gap):

Each product card (165px wide, variable height):
- Product image: 165x165px square
- Wishlist heart icon (top-right overlay, 32px tap area)
- Quick view button (bottom overlay on hover/press): Eye icon

Product info below image:
- Name: "Civic Duty Hat" (Inter Semibold, 14px, #1E293B, 2 lines max, truncate)
- Price: "$24.99" (Inter Bold, 16px, Deep Navy)
- Small "Add to Cart" icon button (36px circle, bottom-right)

Show 6-8 products in grid, then:
- "Load More" button (Secondary style, centered, 90% width)

Bottom sticky bar (when items in cart):
- White background, top shadow
- Left: "3 items • $94.97" (Inter Semibold, 16px)
- Right: "View Cart" button (Primary style, 120px width)



Prompt 29: Profile - Rewards/Points Screen

Design the Rewards screen (375px width, scrollable):

Header:
- Back button: "< Profile"
- Title: "My Rewards" (Inter Bold, 28px, centered)

Points balance card (343px wide, -20px overlap with header):
- Background: Gold gradient (#F59E0B to #FCD34D)
- Border radius: 24px
- Padding: 32px
- Shadow: 0px 8px 24px rgba(245,158,11,0.4)

Contents:
- Icon: Star burst (64px, white)
- Label: "Available Points" (Inter Regular, 16px, white, 70% opacity)
- Balance: "1,240" (Inter Bold, 56px, white)
- Earn rate: "+10 pts per $1 spent" (Inter Regular, 14px, white, 70% opacity)

How points work section (16px top margin):
- Expandable accordion: "How do I earn points?" (Inter Semibold, 16px)
- When expanded, show:
  - Icon list of earning methods:
    - Shop icon: "Shop in marketplace" - "10 pts per $1"
    - Task icon: "Complete civic tasks" - "50 pts per task"
    - Share icon: "Refer friends" - "500 pts per signup"
  - Font: Inter Regular, 15px, line-height 2.0

Redeem section:

Section header:
- "Redeem Your Points" (Inter Bold, 22px, #1E293B, 24px padding)

Reward cards (vertical list, 343px wide, 12px spacing):

Premium reward card (featured, larger):
- White background, 16px padding, 12px radius, light border
- Left side (80px): Illustration icon (64px, gold)
- Right side:
  - Reward name: "1 Month Premium" (Inter Bold, 18px, #1E293B)
  - Description: "Ad-free + full analytics" (Inter Regular, 14px, grey)
  - Point cost: "1,000 points" (Inter Bold, 16px, Deep Navy)
  - Progress bar: Visual representation of how close user is
    - Bar: Grey background, gold fill, 8px height, full-width
    - Text below: "You're 80% there!" (Inter Regular, 12px, grey)
  - "Redeem" button (if enough points) or "Keep Earning" button (if not enough)

Standard reward cards (smaller, 100px left section):
- Shop discount card:
  - Icon: Percentage symbol (48px)
  - "$10 Shop Credit" (Inter Bold, 16px)
  - "500 points" (Inter Semibold, 14px, Deep Navy)
  - "Redeem" button (small, 80px width)

- Merch reward card:
  - Icon: T-shirt (48px)
  - "Exclusive Merch" (Inter Bold, 16px)
  - "750 points"

- Donation card:
  - Icon: Heart (48px)
  - "Donate to Civic Ed" (Inter Bold, 16px)
  - "Any amount"

Show 4-5 reward options, all in vertical stack.

History section (16px top margin):
- "Points History" (Inter Semibold, 18px, expandable accordion)
- When expanded, show transaction list:
  - Date + Description + Points earned/spent
  - Format: "Nov 12 • Shop purchase • +120" (Inter Regular, 14px)
  - Green for earned, red for spent

Bottom padding: 100px




Phase 9: Native Ad Components


Prompt 30: Native Ad Card for Headlines Feed

Design a native advertisement card for insertion in the Headlines news feed (343px wide, variable height):

Card structure (differentiated but not disruptive):

Header section:
- "Community Sponsor" label (left, Inter Semibold, 11px, Gold #F59E0B text)
- Small gold star icon (8px, before text)
- "Ad" badge (right, 20px circle, light gold background, white text, Inter Bold 10px)

Visual section (horizontal layout):
- Left: Business image/logo (100x100px square, 8px radius)
- Right content area (remaining width minus 12px gap):
  - Business name: "Joe's Coffee & Civic Space" (Inter Bold, 16px, #1E293B, 2 lines max)
  - Offer text: "15% off for Manus+Ameri members" (Inter Semibold, 15px, Green #10B981)
  - Description: "Local gathering space for civic dialogue" (Inter Regular, 13px, grey, 1 line truncate)
  - Location: Map pin icon + "0.3 mi away" (Inter Regular, 12px, grey)

CTA section:
- "Learn More" button (Text button style, 12px, Deep Navy, right-aligned)

Card styling:
- Very subtle gold left border (2px, #F59E0B) to differentiate from news
- White background
- 12px border radius
- 16px padding
- Subtle shadow: 0px 1px 4px rgba(0,0,0,0.06)

Important: Card should feel premium and integrated, not like a banner ad. Use same height and spacing as news cards for seamless integration.

Placement rule: Insert 1 ad card after every 5 news articles in feed.




Prompt 31: Sponsored Content in For You Feed

Design a sponsored content card for the For You vertical feed (375x812px):

Background: White (stands out from video cards)

Top indicator:
- "Sponsored" label (top-left, 24px padding, Inter Semibold, 12px, gold text with star icon)

Content layout (centered, 327px wide content area):

Visual section (top, 327x180px):
- Product/service image (high-quality, editorial style)
- Subtle overlay gradient on bottom 20%

Content section (32px padding):
- Partner logo (60px width, top)
- Headline: "Civic Engagement Made Easy with [Partner]" (Inter Bold, 22px, #1E293B, 2 lines max)
- Body text: "Join thousands of users who stay informed and active in their communities..." (Inter Regular, 16px, grey, 3 lines, line-height 1.5)

Feature highlights (icon rows):
- Icon + text format (20px icons, gold color):
  - "Track legislation nationwide"
  - "Connect with local officials"
  - "Earn rewards for participation"
- Font: Inter Regular, 14px, line-height 2.0

CTA buttons:
- Primary: "Get Started" (Full-width Primary button with gold background)
- Secondary: "Learn More" (Text button, centered below, 12px margin)

Right-side action bar (same position as content cards for consistency):
- Like, Comment, Share buttons (but labeled as "Save", "Info", "Share" for ads)

Bottom disclosure:
- Fine print: "Sponsored content · Learn about ads" (Inter Regular, 10px, grey, centered)

Swipe behavior: User swipes up to skip to next card (mix of sponsored and organic content).

Design note: Should feel like native content, not disruptive. High-quality imagery and editorial tone.



Phase 10: Interaction States & Micro-interactions

Prompt 32: Button States & Interaction Design System

comprehensive button interaction states guide (800px wide design system page):

Show each button type with 5 states in a horizontal row:

1. Primary Button (Deep Navy #1A365D background):
   - Default: Full opacity, no effects
   - Hover (web): Brightness increase 110%
   - Active/Pressed: Scale 0.97, slight shadow inset
   - Disabled: 40% opacity, grey background
   - Loading: Spinner animation (white, 20px, centered)

2. Secondary Button (outlined):
   - Default: 2px border, transparent background
   - Hover: Background fills with 10% color
   - Active/Pressed: Background 20% color, border 3px
   - Disabled: 40% opacity
   - Loading: Spinner (border color)

3. Text Button:
   - Default: Text only, Deep Navy color
   - Hover: Underline appears
   - Active/Pressed: Color darkens 20%
   - Disabled: Grey text
   - Loading: Inline spinner before text

4. Icon Button (round, 44x44px):
   - Default: Icon centered, transparent background
   - Hover: Background grey circle appears (10% opacity)
   - Active/Pressed: Background 20% opacity, scale 0.95
   - Disabled: Icon grey 40% opacity
   - Loading: Icon replaced with spinner

Show timing specifications:
- Transitions: 200ms ease-in-out for color/opacity
- Transforms: 150ms cubic-bezier(0.4, 0.0, 0.2, 1) for scale
- Loading delay: 300ms before showing spinner (prevents flash on fast operations)

Accessibility notes:
- Minimum tap target: 44x44px (iOS) / 48x48px (Android)
- Focus ring: 2px blue outline, 2px offset
- Disabled buttons cannot receive focus



Prompt 33: Card Hover & Tap States

Design a guide showing card interaction states (375px width):

News article card states:

1. Default state:
   - White background
   - Subtle shadow: 0px 1px 3px rgba(0,0,0,0.08)
   - Border: 1px solid #E5E7EB

2. Hover state (web only):
   - Shadow increases: 0px 4px 12px rgba(0,0,0,0.12)
   - Translate Y: -2px (slight lift effect)
   - Border color: #CBD5E1 (slightly darker)
   - Cursor: pointer
   - Transition: 200ms ease-out

3. Active/Pressed state (touch):
   - Background: Light grey #F8FAFC
   - Scale: 0.98
   - Shadow decreases: 0px 1px 2px rgba(0,0,0,0.1)
   - Haptic feedback (mobile): Light impact
   - Duration: Hold for 100ms

4. Loading state (after tap, before navigation):
   - Overlay: Semi-transparent white (60% opacity)
   - Spinner: Centered, Deep Navy, 32px
   - Card slightly fades (90% opacity)

5. Swipe gesture states (For You feed cards):
   - Swipe up: Card translates up with finger, fades out
   - Swipe threshold: 80px or 30% of screen height
   - Velocity-based: Fast swipe requires less distance
   - Spring animation on release: Smooth deceleration
   - Next card slides in from bottom with scale effect (0.95 to 1.0)

Show side-by-side comparisons with before/after states and animation timing curves.



Prompt 34: Live Indicator Animation

Design animated live indicator component (multiple sizes):

Component variations:

1. Large live badge (for video cards):
   - Size: 60px width x 28px height
   - Background: Red #EF4444
   - Border radius: 6px
   - Contents:
     - Pulsing red dot (8px diameter, left side, 8px margin)
     - Text: "LIVE" (Inter Bold, 12px, white, letter-spacing 0.5px)

2. Small live indicator (for list items):
   - Size: 40px width x 20px height
   - Same styling, scaled down
   - Dot: 6px diameter
   - Text: 10px

3. Dot-only indicator (compact spaces):
   - Just the pulsing dot: 10px diameter
   - Red with white border (1px)

Pulse animation specifications:
- Dot scale: 1.0 to 1.3 and back
- Opacity: Outer ring fades 100% to 0%
- Duration: 2000ms
- Easing: ease-in-out
- Infinite loop

CSS-like animation:
@keyframes livePulse {
0% { transform: scale(1); opacity: 1; }
50% { transform: scale(1.3); opacity: 0.3; }
100% { transform: scale(1.5); opacity: 0; }
}

Badge glow effect:
- Box shadow animates: 0px 0px 8px rgba(239,68,68,0.6) to 0px 0px 16px
- Synchronized with dot pulse
- Creates "broadcasting" feeling

Show static mockup and 3-frame animation sequence.



Prompt 35: Pull-to-Refresh & Loading States

Design pull-to-refresh interaction for news feeds (375px width):

Sequence (5 frames):

Frame 1 - Initial pull (0-50px):
- User pulls down on feed
- Spinner icon appears at top, grey, 32px
- Spinner rotates with pull distance (1:1 mapping)
- Background stretches slightly (subtle elastic effect)

Frame 2 - Mid pull (50-80px):
- Spinner grows to 40px
- Color transitions grey to Deep Navy
- "Pull to refresh" text appears below (Inter Regular, 13px, grey)

Frame 3 - Release threshold reached (80px+):
- Haptic feedback: Medium impact
- Spinner fully Deep Navy, 40px
- Text changes: "Release to refresh" (Inter Semibold, 13px, Deep Navy)
- Icon changes: Arrow up icon appears

Frame 4 - Released, loading:
- Feed snaps back, spinner stays at top
- Spinner animates: Continuous rotation (1 second per rotation)
- Loading textRetryJNContinue- Loading text: "Updating feed..." (Inter Regular, 13px, grey)
- Background: Light grey bar (40px height) behind spinner

Frame 5 - Complete:
- Success animation: Checkmark replaces spinner (200ms fade transition)
- Green flash: #10B981 background pulse
- Text: "Updated" (Inter Semibold, 13px, green)
- Auto-dismiss: After 500ms, entire indicator slides up and fades out
- New content slides down with subtle entrance animation

Animation timing:
- Pull gesture: Direct manipulation (60fps)
- Release spring: 400ms cubic-bezier(0.25, 0.46, 0.45, 0.94)
- Spinner rotation: 1000ms linear infinite
- Success state: 500ms display, 300ms fade out

Loading skeleton states (while content loads):

Article card skeleton:
- Rectangle placeholders with shimmer effect:
  - Image area: 100x100px grey rectangle, left
  - Title: 2 grey bars (90% width, 16px height, 4px apart), right
  - Meta info: 1 grey bar (60% width, 12px height)
- Shimmer animation: Light grey gradient moves left to right
  - Duration: 1500ms
  - Angle: 90deg gradient
  - Colors: #E5E7EB to #F3F4F6 to #E5E7EB

Show 3-4 skeleton cards stacked vertically while loading initial feed.




Phase 11: Responsive Design & Platform Variations


Prompt 36: Tablet Layout (iPad) - Headlines Tab

Design the Headlines tab optimized for tablet (768px wide x 1024px tall):

Layout changes from mobile:

Header section (full width):
- Side margins: 32px (increased from 16px)
- Search bar: 600px max-width, centered
- Title: Larger "Daily Briefing" (Inter Bold, 42px)

Featured story card:
- Landscape orientation: 700px wide x 400px tall
- Image: 700x400px (16:9 maintained)
- Title overlays: Larger text (Inter Bold, 28px)

Calendar strip:
- Show 5-6 events visible at once (instead of 3-4)
- Card width: 220px (increased from 180px)
- Better typography hierarchy with more space

News list - Two-column grid:
- Each column: 352px wide (with 32px gap)
- Cards maintain aspect ratio but use more vertical space
- Images: 140x140px (larger from 100x100px)

Ad placement:
- Native ads span full width between grid rows
- Every 10 articles instead of every 5

Navigation:
- Side navigation rail (left side, 72px wide) instead of bottom tabs
- Icons stack vertically with labels
- Always visible, not overlaying content

Show full tablet mockup with annotations for spacing and grid system.



Prompt 37: Desktop/Web Layout (1440px) - Directory Tab

Design the Directory tab for desktop web browser (1440px wide x 900px viewport):

Master-detail layout:

Left sidebar (permanent, 280px wide):
- Sticky navigation:
  - "Directory" title (Inter Bold, 28px)
  - Search bar (full width minus 24px padding)
  - Segment control: Federal | State | Local (vertical pills instead of horizontal)
  - Category list:
    - Executive
    - Legislative
    - Judicial
    - Agencies
    - Lobbyists (with lock icon)
    - Bills
  - Each category: Hover state with background color change
  - Selected category: Deep Navy background, white text, left border indicator

Main content area (remaining width, minimum 800px):

Header bar (fixed, with shadow):
- Breadcrumb: "Directory > Legislative > U.S. Senate" (Inter Regular, 14px, grey)
- View switcher: Grid icon | List icon (right side)
- Sort dropdown: "Sort by: State" (right side)

Content grid (when grid view selected):
- 3-column layout for official cards
- Each card: 360px wide, 200px tall
- Card design:
  - Top: Profile photo (80px circle)
  - Name (Inter Bold, 20px)
  - State + Party (Inter Regular, 16px)
  - Committee chips (scrollable horizontal)
  - "View Profile" button (hover state shows, normally hidden)
- 24px gap between cards
- Hover effect: Card lifts with shadow

Content list (when list view selected):
- Table-like layout:
  - Columns: Photo | Name | Party | State | Committees | Next Election
  - Sortable column headers
  - Row height: 80px
  - Alternating row backgrounds
  - Entire row clickable

Right sidebar (320px wide, when viewing detail):
- Shows official's quick info
- Sticky position
- Recent activity feed
- Related officials
- Allows browsing without losing place

Responsive breakpoints:
- 1440px+: Three-column layout with both sidebars
- 1024-1439px: Two-column (hide right sidebar, collapse on demand)
- 768-1023px: Single column with expandable left nav
- <768px: Mobile layout (bottom tabs)

Show full desktop mockup with hover states and grid overlay.



Prompt 38: Dark Mode Theme

Design dark mode color scheme and component variations (375px width mockup):

Color palette adjustments:

Backgrounds:
- Primary: #0F172A (very dark navy, was white)
- Secondary: #1E293B (dark grey, was #F8FAFC)
- Elevated cards: #334155 (slate, was white)

Text:
- Primary: #F1F5F9 (off-white, was #1E293B)
- Secondary: #94A3B8 (light grey, was #64748B)
- Disabled: #475569 (medium grey)

Accents (remain same for consistency):
- Green: #10B981 (In Session)
- Red: #EF4444 (Urgent)
- Gold: #F59E0B (Premium)
- Deep Navy: Now #3B82F6 (lighter blue for contrast)

Component adjustments:

1. Headlines screen (dark mode):
- Status bar: White text on dark background
- Search bar: Dark grey #1E293B with light grey placeholder
- Featured card:
  - Image overlay: Darker gradient (80% opacity)
  - Text: All white for readability
  - Card background: #334155

2. News article cards:
- Background: #1E293B (slightly lighter than screen background)
- Border: #334155 (subtle, lighter than background)
- Text: White and light grey
- Hover state: Background lightens to #334155

3. Buttons:
- Primary: Keep Deep Navy but use lighter shade #3B82F6
- Secondary: Border color #3B82F6, text white
- Disabled: Dark grey #475569 with 40% opacity

4. Native ads:
- Maintain light background to differentiate (use #1E293B)
- "Community Sponsor" label in gold stands out
- Subtle glow effect: 0px 0px 12px rgba(245,158,11,0.2)

5. Tab bar:
- Background: #1E293B with top border #334155
- Active tab: #3B82F6 color
- Inactive: #64748B

6. Premium upsell card:
- Maintain gold gradient (stands out beautifully in dark mode)
- No adjustments needed - designed to pop

7. Profile section:
- Header gradient: Darker Deep Navy #0F172A to #1E293B
- User stats: White text
- Cards: #334155 background

Accessibility considerations:
- All text meets WCAG AA contrast ratios (4.5:1 minimum)
- Focus indicators: Brighter blue #60A5FA, 2px
- Reduced motion preference: Disable animations
- High contrast mode toggle available in settings

Toggle mechanism:
- Settings > Dark Mode toggle switch
- System preference: "Auto (System)" option
- Smooth transition: 300ms ease for color changes on toggle

Show side-by-side comparison: Light mode | Dark mode for key screens.




Phase 12: Error States & Empty States


Prompt 39: Error States & Retry Mechanisms

Design error state screens for various failure scenarios (375px width):

1. Network Error (no internet connection):

Layout (centered content):
- Illustration: WiFi icon with slash (120px, grey)
- Headline: "No Internet Connection" (Inter Bold, 24px, #1E293B)
- Body text: "Please check your connection and try again." (Inter Regular, 16px, grey, center-aligned, line-height 1.5)
- "Retry" button (Primary style, 240px width, centered)
- "View Cached Content" button (Text button, below, 16px margin)

Background: Light grey #F8FAFC full screen

2. Server Error (500/503 errors):

Layout:
- Illustration: Server icon with warning symbol (120px, orange)
- Headline: "Something Went Wrong" (Inter Bold, 24px, #1E293B)
- Body text: "We're experiencing technical difficulties. Our team has been notified." (Inter Regular, 16px, grey, center-aligned)
- Error code: "Error 503" (Inter Regular, 14px, light grey, small)
- "Try Again" button (Primary style)
- "Report Issue" button (Text button)

3. Content Not Found (404):

Layout:
- Illustration: Magnifying glass with X (120px, grey)
- Headline: "Content Not Found" (Inter Bold, 24px, #1E293B)
- Body text: "The page you're looking for doesn't exist or has been moved." (Inter Regular, 16px, grey)
- "Go to Homepage" button (Primary style)
- "Search Directory" button (Secondary style, 16px below)

4. Search No Results:

Layout (within search interface):
- Small illustration: Empty folder (80px, grey)
- Headline: "No Results Found" (Inter Semibold, 20px, #1E293B)
- Body text: "Try adjusting your search terms or filters." (Inter Regular, 15px, grey)
- Suggestions section:
  - "Popular searches:" header (Inter Semibold, 14px)
  - Chip buttons: "House Bills", "Senate", "Local Officials" (tappable, navigate to pre-filtered results)

5. Failed to Load Video Stream:

Layout (within video player):
- Player background: Black
- Icon: Play button with warning (64px, white, centered)
- Message: "Unable to load stream" (Inter Semibold, 16px, white)
- Submessage: "The broadcast may have ended or is temporarily unavailable." (Inter Regular, 14px, white, 70% opacity)
- "Retry" button (white outline, white text, 180px width)
- "View Schedule" link (text button, white)

6. Form Validation Error (inline):

Show example: Authentication screen with errors
- Email field with error:
  - Red border (2px, #EF4444)
  - Error icon (right side of input, 20px, red)
  - Error message below: "Please enter a valid email address" (Inter Regular, 13px, red)
- Password field with error:
  - Red border
  - Error message: "Password must be at least 8 characters" (red)
- Submit button: Disabled state (grey) until errors fixed

Animation:
- Error states fade in (300ms ease)
- Shake animation for form errors (150ms, 3px left-right movement)
- Retry button shows loading spinner when tapped

Retry logic:
- Automatic retry: After 5 seconds for network errors (show countdown)
- Exponential backoff: 5s, 10s, 30s for server errors
- User-triggered retry: Immediate on button tap



Prompt 40: Empty States (No Content Yet)

Design empty state screens for various scenarios (375px width):

1. Empty Following List (For You tab, new user):

Layout (centered vertically):
- Illustration: Heart icon with plus sign (100px, light grey)
- Headline: "Your Feed is Empty" (Inter Bold, 24px, #1E293B)
- Body text: "Follow topics and officials to see personalized updates here." (Inter Regular, 16px, grey, center-aligned, line-height 1.6)
- "Browse Topics" button (Primary style, 240px width, centered)
- "Discover Officials" button (Secondary style, 240px width, 16px below)

Background: White with subtle pattern (5% opacity dots)

2. No Upcoming Hearings (Watch tab):

Layout (within section):
- Small illustration: Calendar with checkmark (80px, green)
- Headline: "No Hearings Scheduled" (Inter Semibold, 20px, #1E293B)
- Body text: "Check back later for upcoming congressional hearings and sessions." (Inter Regular, 15px, grey)
- "View Past Hearings" button (Text button, Deep Navy)
- "Enable Notifications" toggle switch below (optional action)

3. No Search History (Directory search):

Layout (appears when search field focused, no history):
- Icon: Clock with dash (60px, light grey)
- Text: "No recent searches" (Inter Regular, 15px, grey)
- Trending searches section below:
  - "Trending now:" header (Inter Semibold, 14px, #1E293B)
  - 5 trending search terms as chips (tappable):
    - "Infrastructure Bill"
    - "Climate Policy"
    - "Senate Vote"
    - Etc.

4. Empty Bookmarks/Saved Items:

Layout:
- Illustration: Bookmark icon outlined (100px, light grey)
- Headline: "No Saved Items" (Inter Bold, 24px, #1E293B)
- Body text: "Tap the bookmark icon on articles, bills, or profiles to save them here." (Inter Regular, 16px, grey, center-aligned)
- Tutorial hint: Small animated GIF or illustration showing bookmark interaction
- "Explore Headlines" button (Primary style)

5. Zero Points/Rewards (new account):

Layout (on Rewards screen):
- Illustration: Gift box opening (100px, with sparkles animation)
- Headline: "Start Earning Rewards" (Inter Bold, 24px, #1E293B)
- Body text: "Shop in the marketplace or complete civic tasks to earn points." (Inter Regular, 16px, grey)
- Point earning methods (icon list):
  - Shop icon: "Shop = 10 pts per $1"
  - Task icon: "Tasks = 50 pts each"
  - Share icon: "Referrals = 500 pts"
- "Visit Shop" button (Primary style with gold background)
- "View Tasks" button (Secondary style)

6. No Notifications Yet:

Layout:
- Illustration: Bell icon with zzz (80px, light grey)
- Headline: "No Notifications" (Inter Semibold, 20px, #1E293B)
- Body text: "You're all caught up! We'll notify you about important updates." (Inter Regular, 15px, grey)
- "Notification Settings" link (Text button, Deep Navy)

Design principles for empty states:
- Always explain WHY it's empty (not user's fault vs. needs action)
- Provide clear next steps (CTAs)
- Use friendly, encouraging tone
- Include helpful illustrations (not generic)
- Consider onboarding tips for first-time scenarios
- Make CTAs contextually relevant

Animation on load:
- Illustration fades in + slight scale (0.95 to 1.0)
- Text fades in 100ms after illustration
- Buttons fade in 100ms after text
- Total sequence: 400ms for smooth, non-jarring appearance




Phase 13: Onboarding Tooltips & First-Time User Experience


Prompt 41: Feature Discovery Tooltips

Design contextual tooltip system for first-time users (375px width):

Tooltip component structure:

Visual design:
- Background: Deep Navy (#1A365D) with 95% opacity
- Border radius: 12px
- Padding: 16px
- Shadow: 0px 4px 16px rgba(0,0,0,0.24)
- Pointer/arrow: 12px triangle pointing to target element
- Max width: 280px

Content structure:
- Badge: "Tip 1 of 5" (Inter Bold, 11px, gold background, 6px padding, 4px radius, top-right)
- Title: Feature name (Inter Semibold, 16px, white)
- Description: 2-3 sentences (Inter Regular, 14px, white, 90% opacity, line-height 1.5)
- Action buttons (horizontal row):
  - "Next" (small Primary button, gold background, 80px width)
  - "Skip Tour" (Text button, white text, 80px width)

Tooltip placements for key features:

1. Tab Bar Introduction (first launch):
- Target: Headlines tab icon
- Position: Above tab bar, centered
- Title: "Headlines Tab"
- Description: "See breaking news and today's most important stories from trusted sources."
- This tooltip appears: On first app launch, after onboarding complete

2. For You Feed Swipe Gesture:
- Target: For You tab first card
- Position: Center overlay (semi-transparent background)
- Title: "Swipe to Explore"
- Description: "Swipe up to see your next personalized update. We curate content based on your interests."
- Animated hand gesture icon: Swipe up motion
- This tooltip appears: On first visit to For You tab

3. Live Stream Indicator:
- Target: Red "LIVE" badge on Watch tab
- Position: Right side of badge, arrow pointing left
- Title: "Watch Live Democracy"
- Description: "This badge means a session is happening right now. Tap to watch the stream."
- This tooltip appears: When user first sees a live stream

4. Premium Lock Feature:
- Target: Blurred content area with lock icon
- Position: Below lock overlay
- Title: "Premium Analytics"
- Description: "Unlock complete voting records, donor maps, and advanced insights with Premium."
- CTA: "Learn More" button (navigates to premium info)
- This tooltip appears: First time user encounters locked content

5. Native Ad Identifier:
- Target: "Community Sponsor" label on ad card
- Position: Above label
- Title: "Supporting Local Business"
- Description: "These Community Sponsors help keep our platform free while supporting your local economy."
- This tooltip appears: First time user sees an ad card

6. Points Balance (Rewards):
- Target: Points balance number on Profile tab
- Position: Above the number
- Title: "Your Reward Points"
- Description: "Earn points by shopping and completing civic tasks. Redeem for Premium access and exclusive perks."
- This tooltip appears: After user's first point-earning action

Tooltip behavior:

Trigger logic:
- Only show each tooltip once per user
- Maximum 1 tooltip visible at a time
- Wait 1 second after screen load before showing
- Auto-dismiss after 15 seconds if no interaction
- Persist through session storage which tooltip was shown

User controls:
- Tap outside: Dismisses tooltip
- "Skip Tour": Dismisses all remaining tooltips for this session
- "Next": Shows next tooltip in sequence
- Don't show again: Checkbox option for advanced users

Progressive disclosure:
- Session 1: Show 2-3 most critical tooltips
- Session 2-3: Show additional feature tooltips as user explores
- Never overwhelm with >3 tooltips in one session

Accessibility:
- Screen reader announces tooltip content
- Focusable with keyboard navigation
- High contrast mode compatible
- Reduced motion: Fade only, no slide animations

Show example screen with tooltip positioned and target element highlighted.



Prompt 42: Onboarding Checklist (Sticky Progress Tracker)

Design an onboarding checklist widget that helps new users complete setup (343px wide card):

Widget design:

Card structure:
- Collapsible/expandable
- Sticky position: Top of feed (below header, above content)
- Border radius: 16px
- Background: White (light mode) / #1E293B (dark mode)
- Shadow: 0px 2px 8px rgba(0,0,0,0.1)
- 16px margins

Collapsed state (60px height):
- Left icon: Checkmark in circle (24px, gold if in progress, green if complete)
- Text: "Complete your profile" (Inter Semibold, 15px, #1E293B)
- Progress bar: Visual bar showing 3/6 complete (gold progress, grey background, 4px height, full width)
- Percentage: "50%" (Inter Bold, 14px, gold, right side)
- Expand icon: Chevron down (right, 20px, tappable)

Expanded state (variable height):
- Header same as collapsed but chevron points up
- Checklist items (vertical stack, 8px spacing):

Item structure:
1. Checkbox icon (20px):
   - Unchecked: Grey circle outline
   - Checked: Green checkmark in green circle
   
2. Task title (Inter Regular, 15px, #1E293B or grey if complete):
   - Strike-through effect if completed
   
3. Action button (small, right-aligned):
   - "Do it" (Text button, Deep Navy, 60px width)
   - "Done" (Green text, checkmark icon, if completed)

Checklist tasks:

1. ✓ Create account (auto-complete after authentication)
2. ○ Select your location (links to: Settings > Location)
3. ○ Follow 3+ topics (links to: Personalization)
4. ○ Explore the Watch tab (marks complete on first visit)
5. ○ Save your first article (tutorial tooltip shows bookmark icon)
6. ○ Enable notifications (permission prompt)

Completion state:
- All items checked: Card background changes to light green
- Confetti animation (brief, 1 second)
- Message: "All set! You're ready to stay informed." (Inter Semibold, 16px, centered)
- Dismiss button: "Got it" (Primary button, centered)
- Card auto-dismisses after 3 seconds

Behavior:
- Appears: After onboarding flow complete, on Headlines tab
- Persists: Across sessions until all tasks complete or manually dismissed
- Can be collapsed: User preference saved
- Permanent dismiss: "X" button (top-right) with confirmation

"Skip for now" option (bottom of expanded state):
- Text link: "Skip for now" (Inter Regular, 13px, grey)
- Dismisses widget but can be reopened from Profile > Settings

Show both collapsed and expanded states side by side.






MANUS+AMERI COMPLETE COMPONENT LIBRARY


🎯 Component Library Overview

This is your comprehensive design system for Manus+Ameri. Use these components as building blocks for all screens. Each component includes specifications, variants, states.



1. FOUNDATION SYSTEM



1.1 Color System


 AI Prompt:

Create a color palette documentation page (1200px wide x 2400px tall) for Manus+Ameri civic engagement app:

LAYOUT:
Organize in sections with clear headers (Inter Bold, 32px, #1E293B)

SECTION 1: PRIMARY COLORS
Create large color swatches (200x200px squares, 16px radius) in a 3-column grid:

Row 1 - Brand Colors:
- Deep Navy: #1A365D
  - Below swatch: Hex code (Inter Semibold, 18px)
  - Usage: "Primary brand, buttons, headers" (Inter Regular, 14px, grey)
  - Accessibility note: "AAA on white" (small badge)
  
- Slate Grey: #64748B
  - Usage: "Secondary text, borders, inactive states"
  - Accessibility: "AA on white"
  
- White: #FFFFFF
  - Usage: "Backgrounds, button text"

Row 2 - Accent Colors:
- Green (In Session): #10B981
  - RGB: "16, 185, 129" below hex
  - Usage: "Success states, 'In Session' indicators"
  - Accessibility: "AA on white"
  
- Red (Urgent): #EF4444
  - Usage: "Alerts, 'Urgent Vote', error states"
  - Accessibility: "AA on white"
  
- Gold (Premium): #F59E0B
  - Usage: "Premium features, rewards, CTAs"
  - Accessibility: "AA on white"

SECTION 2: NEUTRAL SCALE (9 shades)
Create a horizontal gradient bar showing progression:
- Grey 50: #F8FAFC (lightest)
- Grey 100: #F1F5F9
- Grey 200: #E5E7EB
- Grey 300: #CBD5E1
- Grey 400: #94A3B8
- Grey 500: #64748B
- Grey 600: #475569
- Grey 700: #334155
- Grey 800: #1E293B
- Grey 900: #0F172A (darkest)

Each with:
- Swatch: 120px square
- Name and hex below
- Common usage label

SECTION 3: SEMANTIC COLORS
Show color application with example components:

Success:
- Color: #10B981
- Example: Success message card with checkmark icon
- Text on color: White (#FFFFFF)

Warning:
- Color: #F59E0B
- Example: Warning banner
- Text on color: #1E293B (dark)

Error:
- Color: #EF4444
- Example: Error message with X icon
- Text on color: White

Info:
- Color: #3B82F6
- Example: Info tooltip
- Text on color: White

SECTION 4: DARK MODE PALETTE
Side-by-side comparison swatches (150px squares):
- Show light mode color → dark mode equivalent
- Primary BG: #FFFFFF → #0F172A
- Secondary BG: #F8FAFC → #1E293B
- Card BG: #FFFFFF → #334155
- Primary Text: #1E293B → #F1F5F9
- Secondary Text: #64748B → #94A3B8

SECTION 5: ACCESSIBILITY MATRIX
Create a contrast ratio table:
- Rows: Background colors (White, Grey 100, Deep Navy, etc.)
- Columns: Text colors (Primary text, Secondary text, etc.)
- Cells: Show contrast ratio number
  - Green cell: AAA (7:1+)
  - Yellow cell: AA (4.5:1+)
  - Red cell: Fail (<4.5:1)

Add legend explaining WCAG standards.

SECTION 6: COLOR USAGE GUIDELINES
Create "Do" and "Don't" example cards:

DO:
- Use Deep Navy for primary actions ✓
- Use Green only for positive states ✓
- Maintain 4.5:1 contrast minimum ✓

DON'T:
- Don't use Red for non-error states ✗
- Don't use low-contrast grey on white ✗
- Don't mix warm and cool greys ✗

Style all sections with clean, professional layout, ample white space (32px between sections), and consistent Inter font family throughout.




1.2 Typography System



 typography style guide page (1200px wide x 2000px tall) for Manus+Ameri:

FONT FAMILY DECLARATION (top banner):
- Large specimen: "Inter" (Inter font, 120px, #1E293B)
- Subtext: "Primary typeface for all platforms" (Inter Regular, 18px, grey)
- Download link: "Google Fonts: Inter" (small link)

SECTION 1: TYPE SCALE
Display each style as both specimen and specification:

Display Large (Rare usage):
- Sample text: "Breaking News" (actual size: 48px)
- Specifications box below:
  - Font: Inter Bold
  - Size: 48px / 3rem
  - Line height: 56px (1.167)
  - Letter spacing: -1px
  - Color: #1E293B
  - Usage: "Hero headlines, special announcements"

Display (App headers):
- Sample: "Daily Briefing" (34px)
- Font: Inter Bold
- Size: 34px / 2.125rem
- Line height: 40px (1.176)
- Letter spacing: -0.5px
- Usage: "Screen titles, large tab headers"

Heading 1:
- Sample: "Senate Passes Infrastructure Bill" (28px)
- Font: Inter Bold
- Size: 28px / 1.75rem
- Line height: 36px (1.286)
- Letter spacing: -0.25px
- Usage: "Article headlines, modal titles"

Heading 2:
- Sample: "Latest Headlines" (24px)
- Font: Inter Semibold
- Size: 24px / 1.5rem
- Line height: 32px (1.333)
- Letter spacing: 0px
- Usage: "Section headers, profile names"

Heading 3:
- Sample: "Committee Assignments" (20px)
- Font: Inter Semibold
- Size: 20px / 1.25rem
- Line height: 28px (1.4)
- Letter spacing: 0px
- Usage: "Card titles, subsection headers"

Body Large:
- Sample: "This is body large text used for important content that needs emphasis. It's highly readable and provides good hierarchy." (16px)
- Font: Inter Regular
- Size: 16px / 1rem
- Line height: 24px (1.5)
- Letter spacing: 0px
- Usage: "Primary content, descriptions, button labels"

Body Regular:
- Sample: "This is regular body text for most content in the application. It maintains good readability while being space-efficient." (14px)
- Font: Inter Regular
- Size: 14px / 0.875rem
- Line height: 20px (1.429)
- Letter spacing: 0px
- Usage: "Secondary content, list items, captions"

Caption:
- Sample: "Posted 2 hours ago • 234 views" (12px)
- Font: Inter Regular
- Size: 12px / 0.75rem
- Line height: 16px (1.333)
- Letter spacing: 0px
- Color: #64748B
- Usage: "Metadata, timestamps, helper text"

Button Text:
- Sample: "GET STARTED" (16px, all caps shown)
- Font: Inter Semibold
- Size: 16px / 1rem
- Line height: 16px (1.0)
- Letter spacing: 0.5px
- Transform: None (but can be uppercase)
- Usage: "All button labels"

Label:
- Sample: "Email Address" (13px)
- Font: Inter Medium
- Size: 13px / 0.8125rem
- Line height: 18px (1.385)
- Letter spacing: 0px
- Color: #475569
- Usage: "Form labels, small tags"

Overline:
- Sample: "BREAKING NEWS" (11px, shown in caps)
- Font: Inter Bold
- Size: 11px / 0.6875rem
- Line height: 16px (1.455)
- Letter spacing: 1px
- Transform: Uppercase
- Usage: "Category tags, badges, micro-labels"

SECTION 2: TYPOGRAPHIC HIERARCHY EXAMPLE
Show a realistic content card demonstrating all styles in context:

Card example (600px wide):
- Overline: "POLITICS" (11px, Deep Navy)
- Heading 1: "Senate Debates New Climate Policy" (28px)
- Body Large: "In a heated session today, senators from both parties discussed the implications of the proposed..." (16px, 3 lines)
- Caption: "Associated Press • 3 hours ago" (12px, grey)

Annotate each element with arrows pointing to the type scale it uses.

SECTION 3: RESPONSIVE TYPOGRAPHY
comparison table showing size adjustments:

Columns: Mobile (375px) | Tablet (768px) | Desktop (1440px)
Rows: Each heading level

Example:
Display: 34px | 42px | 48px
Heading 1: 24px | 28px | 32px
Body: 14px | 15px | 16px

SECTION 4: SPECIAL TREATMENTS

Emphasis styles:
- Bold: Inter Bold for **strong emphasis**
- Semibold: Inter Semibold for *medium emphasis*
- Italic: Inter Italic for specialized terms (rarely used)

Link styles:
- Color: #1A365D (Deep Navy)
- Hover: Underline appears
- Visited: #5B21B6 (Purple, only on web)

Number styles:
- Large numbers: Inter Bold, tabular numbers
- Example: "$1,240,000" vs "1,240,000 votes"
- Use tabular-nums feature for alignment

SECTION 5: ACCESSIBILITY GUIDELINES

Text boxes showing:
- Minimum body text: 14px (never smaller)
- Maximum line length: 75 characters
- Minimum line height: 1.5 for body text
- Link underlines: Required for accessibility
- All-caps: Maximum 2-3 words (readability)

SECTION 6: USAGE DO'S AND DON'TS

Visual examples:
DO:
- Use consistent line heights ✓
- Maintain type scale ratios ✓
- Limit to 2-3 weights per screen ✓

DON'T:
- Don't use multiple fonts ✗
- Don't go below 14px for body text ✗
- Don't use pure black (#000000) ✗

Add gridlines and measurements throughout for precision. Use light grey (#F1F5F9) backgrounds for each section to separate clearly.





1.3 Spacing System


spacing system documentation page (1200px wide x 1600px tall):

HEADER:
Title: "Spacing & Layout Grid" (Inter Bold, 36px)
Subtitle: "8px base unit system" (Inter Regular, 18px, grey)

SECTION 1: BASE SPACING SCALE
Visual ruler showing increments (horizontal):

Create colored blocks showing each spacing value:
- 4px: Tiny red block (4x40px) - "Hairline spacing"
- 8px: Small orange block (8x40px) - "Tight spacing"
- 12px: Yellow block (12x40px) - "Compact spacing"
- 16px: Green block (16x40px) - "Default spacing" ⭐
- 24px: Blue block (24x40px) - "Comfortable spacing"
- 32px: Indigo block (32x40px) - "Spacious"
- 48px: Purple block (48x40px) - "Section breaks"
- 64px: Pink block (64x40px) - "Major sections"
- 96px: Grey block (96x40px) - "Page margins"

Below each block:
- Pixel value (Inter Bold, 16px)
- Rem value (Inter Regular, 13px, grey)
- Usage tokens (Inter Regular, 12px)

SECTION 2: SPACING TOKENS
Table format (3 columns):

Column 1: Token Name
Column 2: Value
Column 3: Common Usage

Rows:
- space-xs: 4px | Icon-to-text gaps, tight list items
- space-sm: 8px | Chip spacing, compact layouts
- space-md: 12px | Card internal padding (light)
- space-base: 16px | Default element spacing ⭐
- space-lg: 24px | Section headers, card stacks
- space-xl: 32px | Screen margins, modal padding
- space-2xl: 48px | Major section breaks
- space-3xl: 64px | Hero sections, onboarding
- space-4xl: 96px | Safe area, bottom nav clearance

SECTION 3: COMPONENT SPACING EXAMPLES

Show annotated components with spacing callouts:

Button example:
- [Button: "Get Started"]
- Annotations with arrows:
  - "16px horizontal padding" (left/right)
  - "12px vertical padding" (top/bottom)
  - "8px icon-to-text gap" (if icon present)
  - "48px minimum height"

Card example:
- [News Article Card with image and text]
- Annotations:
  - "16px card padding (all sides)"
  - "12px gap between image and text"
  - "8px gap between title and metadata"
  - "24px margin between cards"

Form field example:
- [Input field with label]
- Annotations:
  - "8px label-to-input gap"
  - "16px input horizontal padding"
  - "12px input vertical padding"
  - "24px gap between form fields"

SECTION 4: LAYOUT GRID SYSTEM

Mobile (375px width):
- Visual grid overlay showing:
  - 16px side margins (highlighted)
  - 343px content area (highlighted different color)
  - 12px gutter for multi-column (if used)
- Annotation: "Safe area: 16px margins on all sides"

Tablet (768px width):
- 32px side margins
- 704px content area
- 16px gutter for 2-column layouts
- Annotation: "Max content width: 704px"

Desktop (1440px width):
- 64px side margins (or auto-center)
- 1312px max content width
- 24px gutter for multi-column
- Annotation: "Content centered with max-width: 1312px"

SECTION 5: VERTICAL RHYTHM
Show a full screen example (375px wide) with vertical spacing annotated:

- Status bar: 44px height
- Header: 60px + 16px bottom margin = 76px
- Section title: 24px top margin
- Content card: 116px + 16px bottom margin
- Another card: 116px + 16px bottom margin
- Section break: 48px
- New section title: 24px top margin
- ...continuing pattern

Total annotations showing cumulative spacing.

SECTION 6: SAFE AREAS & CLEARANCES

Device-specific safe zones:

iPhone (with notch):
- Top safe area: 44px
- Bottom safe area: 34px (home indicator)
- Illustration showing notch clearance

iPhone (without notch):
- Top safe area: 20px
- Bottom safe area: 0px

Android:
- Top safe area: 24px
- Bottom safe area: Variable (gesture bar)

Tab bar clearance:
- Height: 83px (49px bar + 34px safe area)
- Content should have 100px bottom padding

SECTION 7: RESPONSIVE BREAKPOINTS

Visual chart:
- Mobile: 320px - 767px
  - Margins: 16px
  - Single column
  
- Tablet: 768px - 1023px
  - Margins: 32px
  - 2-column option
  
- Desktop Small: 1024px - 1439px
  - Margins: 64px or auto
  - 2-3 column layouts
  
- Desktop Large: 1440px+
  - Max content: 1312px (centered)
  - 3-4 column layouts

SECTION 8: SPACING DO'S AND DON'TS

Visual examples:
DO:
- Use consistent spacing multiples of 8px ✓
- Maintain comfortable tap targets (44px min) ✓
- Provide breathing room around content ✓

DON'T:
- Don't use arbitrary spacing values (e.g., 17px) ✗
- Don't cram content (use minimum 16px padding) ✗
- Don't forget safe areas on notched devices ✗

Use light grid overlay on all examples to show alignment. Color-code different spacing zones for visual clarity.




2. ATOMIC COMPONENTS


2.1 Buttons


comprehensive button component library (1400px wide x 2000px tall):

HEADER:
Title: "Button Components" (Inter Bold, 36px)

SECTION 1: PRIMARY BUTTONS
Show all variants in rows (each button 320px wide x 48px tall unless noted):

Row 1 - Sizes:
- Large: 320px x 56px, "Get Started", Inter Semibold 18px
- Medium (Default): 320px x 48px, "Continue", Inter Semibold 16px ⭐
- Small: 240px x 40px, "Submit", Inter Semibold 14px

Row 2 - States (all medium size):
- Default: 
  - Background: Deep Navy (#1A365D)
  - Text: White (#FFFFFF)
  - Border radius: 12px
  - No border
  - Shadow: 0px 1px 2px rgba(0,0,0,0.05)

- Hover (web only):
  - Background: Lighter navy (#2A4A7D)
  - Shadow: 0px 2px 4px rgba(0,0,0,0.1)
  - Cursor: pointer
  - Transition: 200ms ease

- Pressed/Active:
  - Background: Darker navy (#152945)
  - Scale: 0.98
  - Shadow: 0px 1px 1px rgba(0,0,0,0.1) (reduced)

- Disabled:
  - Background: Grey (#94A3B8)
  - Text: White with 60% opacity
  - Cursor: not-allowed
  - No hover effect

- Loading:
  - Background: Deep Navy
  - Text: Hidden
  - Spinner: White, 24px diameter, centered
  - Animation: Rotating spinner

Row 3 - With Icons:
- Icon Left: 
  - [Arrow Right Icon] "Continue"
  - Icon size: 20px
  - Gap: 8px between icon and text
  
- Icon Right:
  - "Next" [Arrow Right Icon]
  - Icon size: 20px
  - Gap: 8px

- Icon Only (Square button):
  - 48x48px
  - [Plus Icon] centered
  - Icon size: 24px
  - Padding: 12px all sides

SECTION 2: SECONDARY BUTTONS
Same layout structure as Primary:

Row 1 - Sizes (same as primary)

Row 2 - States:
- Default:
  - Background: Transparent
  - Border: 2px solid Deep Navy (#1A365D)
  - Text: Deep Navy (#1A365D)
  - Border radius: 12px

- Hover:
  - Background: Light navy with 10% opacity (#1A365D1A)
  - Border: 2px solid Deep Navy
  - Text: Deep Navy

- Pressed:
  - Background: Light navy with 20% opacity
  - Border: 3px solid Deep Navy (thicker)
  - Scale: 0.98

- Disabled:
  - Border: 2px solid Grey (#CBD5E1)
  - Text: Grey (#94A3B8)
  - Background: Transparent

- Loading:
  - Border: 2px solid Deep Navy
  - Spinner: Deep Navy color

SECTION 3: TEXT BUTTONS
Simpler, more compact:

Row 1 - Sizes:
- Large: "Learn More", 18px
- Medium: "View All", 16px ⭐
- Small: "Edit", 14px

Row 2 - States:
- Default:
  - No background
  - No border
  - Text: Deep Navy (#1A365D)
  - Padding: 8px horizontal, 4px vertical

- Hover:
  - Underline appears (1px solid)
  - Text color: Slightly darker
  - Cursor: pointer

- Pressed:
  - Text color: Much darker (#0F1E33)
  - Underline thicker (2px)

- Disabled:
  - Text: Grey (#94A3B8)
  - No underline
  - Cursor: not-allowed

With icons:
- "Share" [Share Icon]
- Icon: 16px, right side
- Gap: 6px

SECTION 4: SPECIAL BUTTONS

Premium Button:
- Background: Gold gradient (#F59E0B to #FBBF24)
- Text: White, Inter Semibold 16px
- Icon: Lock icon (16px) left of text, white
- Border radius: 12px
- Shadow: 0px 4px 12px rgba(245,158,11,0.3)
- Size: 320px x 48px
- Label: "Unlock Premium"

Destructive Button (Delete/Remove):
- Background: Red (#EF4444)
- Text: White
- Border radius: 12px
- Hover: Darker red (#DC2626)
- Label: "Delete Account"

Success Button (Confirmation):
- Background: Green (#10B981)
- Text: White
- Border radius: 12px
- Icon: Checkmark (optional)
- Label: "Confirm"

Ghost Button (Minimal):
- Background: Light grey (#F1F5F9)
- Text: Dark grey (#475569)
- Border radius: 12px
- Hover: Darker grey background (#E5E7EB)
- Label: "Cancel"

SECTION 5: BUTTON GROUPS

Horizontal group:
- Two buttons side-by-side:
  - Left: Secondary "Cancel" (48% width)
  - Gap: 4% (16px)
  - Right: Primary "Confirm" (48% width)

Segmented control (iOS style):
- Three connected buttons: "Federal" | "State" | "Local"
- Container: Light grey (#F1F5F9), 6px radius
- Selected: White background with shadow
- Unselected: Transparent
- Total width: 343px, 36px height

Floating Action Button (FAB):
- Size: 56x56px circle
- Background: Deep Navy
- Icon: Plus (24px, white), centered
- Shadow: 0px 4px 16px rgba(26,54,93,0.3)
- Position: Bottom-right corner of screen
- Fixed positioning

SECTION 6: BUTTON LAYOUTS

Full-width button:
- Width: 100% of container (minus 32px margins)
- Example showing in 375px phone screen
- Typical use: Bottom of forms, modal CTAs

Button stack (vertical):
- Three buttons stacked:
  - Primary "Sign In"
  - 16px gap
  - Secondary "Create Account"
  - 16px gap
  - Text "Guest Mode"

Inline button (within text):
- Body text: "By continuing, you agree to our"
- Inline text button: "Terms of Service"
- Body text continues: "and Privacy Policy"

SECTION 7: ACCESSIBILITY SPECIFICATIONS

Box showing requirements:
- Minimum tap target: 44x44px (iOS) / 48x48px (Android)
- Focus indicator: 2px blue (#3B82F6) outline, 2px offset
- Color contrast: Minimum 4.5:1 (text on background)
- Disabled state: Cannot receive focus
- Loading state: Announce to screen readers
- Haptic feedback: Light impact on tap (mobile)

SECTION 8: USAGE GUIDELINES

DO:
- Use Primary for main actions (1 per screen) ✓
- Maintain 44px minimum hit area ✓
- Show loading states for async actions ✓
- Use clear, action-oriented labels ✓

DON'T:
- Don't use multiple Primary buttons on one screen ✗
- Don't use icon-only buttons without labels (except common icons) ✗
- Don't disable buttons without explanation ✗
- Don't use vague labels like "Click Here" ✗

Show all buttons with proper spacing, labels, and annotations. Use light backgrounds to separate sections clearly.

2.2 Form Inputs
form input component library (1400px wide x 2400px tall):

HEADER:
Title: "Form Input Components" (Inter Bold, 36px)

SECTION 1: TEXT INPUT FIELDS

Standard text input (343px wide):
- Label: "Email Address" (Inter Medium, 13px, #475569, 8px above input)
- Input field:
  - Height: 48px
  - Background: White
  - Border: 1px solid #CBD5E1
  - Border radius: 8px
  - Padding: 12px horizontal
  - Font: Inter Regular, 16px, #1E293B
  - Placeholder: "Enter your email" (grey #94A3B8)

States to show:
1. Default (empty with placeholder)
2. Focused:
   - Border: 2px solid Deep Navy (#1A365D)
   - Shadow: 0px 0px 0px 4px rgba(26,54,93,0.1)
   - Cursor: text
   
3. Filled (with text):
   - Text: "user@example.com"
   - Border: 1px solid #CBD5E1
   
4. Error:
   - Border: 2px solid Red (#EF4444)
   - Icon: Warning icon (20px, red, right side inside input)
   - Helper text below: "Please enter a valid email address" (Inter Regular, 13px, red, 8px below)
   
5. Success:
   - Border: 2px solid Green (#10B981)
   - Icon: Checkmark (20px, green, right side)
   - Helper text: "Looks good!" (Inter Regular, 13px, green)
   
6. Disabled:
   - Background: Light grey (#F8FAFC)
   - Border: 1px solid #E5E7EB
   - Text: Grey (#94A3B8)
   - Cursor: not-allowed

SECTION 2: INPUT VARIATIONS

Password input:
- Label: "Password"
- Input field (same styling as text)
- Text: Masked as "••••••••"
- Icon button (right side): Eye icon to toggle visibility
  - Icon: 20px, grey
  - Tap area: 44px
  - Toggle shows/hides password

Search input:
- No label (inline)
- Height: 44px
- Border radius: 12px
- Background: Light grey (#F1F5F9)
- Icon: Magnifying glass (20px, grey, left side, 12px from edge)
- Placeholder: "Search officials, bills..."
- Clear button: X icon (right side, appears when text entered)

Textarea (multiline):
- Label: "Your Message"
- Height: 120px (expandable)
- Same border/padding styling
- Resize: Vertical only
- Character count: "0 / 500" (Inter Regular, 12px, grey, bottom-right corner inside)

Number input:
- Label: "Amount"
- Input with increment/decrement buttons:
  - Left side: Minus button (32x32px)
  - Center: Number value "150"
  - Right side: Plus button (32x32px)
  - Buttons: Grey background (#F1F5F9), Deep Navy icons

SECTION 3: SELECT DROPDOWNS

Standard select:
- Label: "Select State"
- Button appearance (343px x 48px):
  - Background: White
  - Border: 1px solid #CBD5E1
  - Border radius: 8px
  - Padding: 12px horizontal
  - Text: "Choose..." (placeholder grey) OR "California" (selected, black)
  - Icon: Chevron down (20px, grey, right side)

States:
1. Default (closed)
2. Focused:
   - Border: 2px solid Deep Navy
   - Shadow: Same as text input
   
3. Open (showing dropdown menu):
   - Button border: 2px solid Deep Navy
   - Dropdown menu below:
     - Width: Same as button (343px)
     - Max height: 300px (scrollable)
     - Background: White
     - Border: 1px solid #E5E7EB
     - Border radius: 8px
     - Shadow: 0px 8px 24px rgba(0,0,0,0.12)
     - Z-index: Above other content
     
   - Menu items:
     - Height: 44px each
     - Padding: 12px horizontal
     - Text: Inter Regular, 15px
     - Hover: Light grey background (#F8FAFC)
     - Selected: Deep Navy background, white text, checkmark icon (left)
     - Dividers: 1px light grey between items

Multi-select dropdown:
- Same structure but:
  - Multiple items can be selected
  - Each selected item shows checkmark
  - Button shows count: "3 selected" or item names if few
  - Chips inside button for selected items (removable with X)

SECTION 4: CHECKBOX & RADIO BUTTONS

Checkbox:
- Size: 20x20px
- Border: 2px solid #CBD5E1
- Border radius: 4px
- Label: "I agree to the Terms of Service" (Inter Regular, 15px, right of checkbox, 12px gap)

States:
1. Unchecked (default):
   - Empty box with border
   
2. Checked:
   - Background: Deep Navy (#1A365D)
   - Checkmark: White, centered
   - Border: 2px solid Deep Navy
   
3. Indeterminate (for "select all" scenarios):
   - Background: Deep Navy
   - Horizontal line: White, centered
   
4. Disabled unchecked:
   - Border: 2px solid #E5E7EB
   - Background: Light grey (#F8FAFC)
   
5. Disabled checked:
   - Background: Grey (#94A3B8)
   - Checkmark: White with 60% opacity

Radio button:
- Size: 20x20px circle
- Border: 2px solid #CBD5E1
- Label: "Option name" (same styling as checkbox)

States:
1. Unselected:
   - Empty circle with border
   
2. Selected:
   - Border: 2px solid Deep Navy
   - Inner dot: 10px circle, Deep Navy, centered
   
3. Disabled unselected:
   - Border: 2px solid #E5E7EB
   - Background: Light grey
   
4. Disabled selected:
   - Border: 2px solid #94A3B8
   - Inner dot: Grey

Radio group example:
Show 3 radio buttons stacked vertically:
- "Federal" (selected)
- "State"
- "Local"
With 16px vertical spacing

SECTION 5: TOGGLE SWITCHES

Standard toggle:
- Width: 52px
- Height: 32px
- Border radius: 16px (fully rounded)
- Label: "Dark Mode" (Inter Regular, 15px, left of toggle, 12px gap)

States:
1. Off:
   - Background: Grey (#CBD5E1)
   - Knob: White circle, 28px diameter, 2px from edges
   - Knob position: Left side
   
2. On:
   - Background: Deep Navy (#1A365D)
   - Knob: White circle, same size
   - Knob position: Right side
   - Transition: 200ms ease (knob slides)
   
3. Disabled off:
   - Background: Light grey (#E5E7EB)
   - Knob: White with 60% opacity
   
4. Disabled on:
- Background: Grey (#94A3B8)
   - Knob: White with 60% opacity

Toggle with icons:
- Same dimensions
- Off state: Moon icon (16px, grey) inside knob
- On state: Sun icon (16px, gold) inside knob
- Label: "Auto brightness"

Small toggle variant:
- Width: 44px
- Height: 24px
- Knob: 20px diameter
- For compact layouts (table rows, dense lists)

SECTION 6: SLIDER COMPONENTS

Range slider:
- Width: 343px
- Label: "Distance" (Inter Medium, 13px)
- Value display: "25 miles" (Inter Semibold, 16px, right-aligned)

Slider components:
- Track (background):
  - Height: 4px
  - Background: Light grey (#E5E7EB)
  - Border radius: 2px
  
- Track (filled portion):
  - Same height
  - Background: Deep Navy (#1A365D)
  - From left to thumb position
  
- Thumb (handle):
  - Size: 24px circle
  - Background: White
  - Border: 3px solid Deep Navy
  - Shadow: 0px 2px 4px rgba(0,0,0,0.1)
  
- Hover state:
  - Thumb grows to 28px
  - Shadow increases
  
- Active/dragging state:
  - Thumb: 28px
  - Larger shadow: 0px 4px 8px rgba(0,0,0,0.2)
  - Track filled color: Lighter navy

Min/max labels:
- "0 mi" (left, below track, Inter Regular, 12px, grey)
- "50 mi" (right, below track)

Step indicators (optional):
- Small dots (4px) at intervals along track
- Show 5 steps: 0, 12.5, 25, 37.5, 50

Range slider (two thumbs):
- Same structure but with two handles
- Track filled between the two thumbs
- Labels: "$50" (left thumb) and "$500" (right thumb)
- Use case: Price range, date range

SECTION 7: FILE UPLOAD

Upload zone (343px x 200px):
- Dashed border: 2px dashed #CBD5E1
- Border radius: 12px
- Background: Light grey (#F8FAFC)
- Center content:
  - Icon: Upload cloud (48px, grey)
  - Text: "Drag and drop files here" (Inter Semibold, 16px, #1E293B)
  - Subtext: "or click to browse" (Inter Regular, 14px, grey)
  - Supported formats: "PDF, JPG, PNG (Max 5MB)" (Inter Regular, 12px, light grey)

States:
1. Default (shown above)

2. Hover/Drag over:
   - Border: 2px dashed Deep Navy
   - Background: Light blue (#EFF6FF)
   - Icon color: Deep Navy
   
3. Uploading:
   - Progress bar (horizontal, 80% width, centered):
     - Height: 8px
     - Background: Light grey
     - Fill: Deep Navy (animated, shows progress)
     - Percentage: "45%" (Inter Semibold, 14px, below bar)
   - Cancel button (Text button, "Cancel upload")
   
4. Success:
   - Border: 2px solid Green
   - Background: Light green (#F0FDF4)
   - Icon: Checkmark in circle (48px, green)
   - Text: "Upload complete" (Inter Semibold, 16px, green)
   - File info: "document.pdf (2.3 MB)" (Inter Regular, 13px, grey)
   - Remove button (small X icon, top-right corner)
   
5. Error:
   - Border: 2px solid Red
   - Background: Light red (#FEF2F2)
   - Icon: Warning triangle (48px, red)
   - Text: "Upload failed" (Inter Semibold, 16px, red)
   - Error message: "File size exceeds limit" (Inter Regular, 13px, red)
   - Retry button (Primary button, small)

Uploaded file list item (343px x 64px):
- White background
- Border: 1px solid #E5E7EB
- Border radius: 8px
- Padding: 12px
- Layout (horizontal):
  - Left: File icon (32px, grey)
  - Middle:
    - Filename: "document.pdf" (Inter Semibold, 14px, truncate)
    - Size: "2.3 MB" (Inter Regular, 12px, grey)
  - Right: Remove button (X icon, 20px, grey)

SECTION 8: DATE & TIME PICKERS

Date input:
- Label: "Date of Birth"
- Button appearance (343px x 48px):
  - Calendar icon (20px, grey, left side inside)
  - Selected date: "11/14/2025" (Inter Regular, 16px)
  - Placeholder: "MM/DD/YYYY" (grey)

Date picker modal (opens on tap):
- Width: 343px
- Background: White
- Border radius: 16px
- Shadow: 0px 8px 32px rgba(0,0,0,0.16)

Modal contents:
- Header bar:
  - Month/Year: "November 2025" (Inter Semibold, 18px, centered)
  - Previous month button (left, chevron icon)
  - Next month button (right, chevron icon)
  
- Calendar grid:
  - 7 columns (Su-Sa)
  - Week day labels: (Inter Medium, 12px, grey)
  - Date cells: 40x40px each
    - Default: Inter Regular, 15px, black
    - Today: Light blue background, blue text
    - Selected: Deep Navy background, white text, circle
    - Other month: Light grey text
    - Disabled/past: Grey with strikethrough
  
- Footer:
  - "Cancel" button (left, Text button)
  - "Done" button (right, Primary button, small)

Time picker:
- Label: "Time"
- Button: "2:30 PM" or placeholder "Select time"
- Modal shows scrollable hour/minute columns (iOS style)
- Or input fields: "02" : "30" with AM/PM toggle

SECTION 9: TAG/CHIP INPUTS

Tag input field:
- Label: "Topics" (Inter Medium, 13px)
- Container (343px width, variable height):
  - Border: 1px solid #CBD5E1
  - Border radius: 8px
  - Padding: 8px
  - Background: White
  
- Existing tags (chips inside):
  - Each chip: Pill shape, 6px radius
    - Background: Light blue (#EFF6FF)
    - Text: "Politics" (Inter Regular, 14px, Deep Navy)
    - Remove X icon (right, 16px, tappable)
    - Padding: 6px 12px
    - 8px spacing between chips
  
- Input cursor: Appears after last chip
- Placeholder: "Add topic..." (if empty)
- Auto-suggest dropdown: Appears below as user types

Chip variations:
1. Default chip (shown above)
2. Selected chip (darker background #DBEAFE)
3. Disabled chip (grey background, no X button)
4. Chip with icon (small icon 16px before text)
5. Chip with avatar (circular image 24px before text)

SECTION 10: AUTOCOMPLETE/TYPEAHEAD

Search input with suggestions:
- Input field: Standard search input (shown in Section 2)
- Suggestions dropdown (appears while typing):
  - Width: Match input (343px)
  - Max height: 320px (scrollable)
  - Background: White
  - Border: 1px solid #E5E7EB
  - Border radius: 8px (bottom only)
  - Shadow: 0px 4px 16px rgba(0,0,0,0.1)
  - Position: Directly below input
  
- Suggestion items:
  - Height: 56px each
  - Padding: 12px horizontal
  - Hover: Light grey background
  - Layout:
    - Left: Icon or avatar (32px)
    - Middle:
      - Primary text: Matched text (Inter Semibold, 15px)
      - Highlight: Matched portion in bold or different color
      - Secondary text: Category or details (Inter Regular, 13px, grey)
    - Right: Forward arrow or category tag
  
- Special items:
  - "No results found" state (centered, grey text)
  - Loading state (spinner, centered)
  - Section headers: "Recent Searches", "Suggestions" (Inter Semibold, 12px, grey, uppercase, 8px padding)

SECTION 11: FORM VALIDATION PATTERNS

Inline validation (real-time):
- Show error icon appearing as user types invalid input
- Error message appears below field immediately
- Border turns red on blur if error persists

On-submit validation:
- All errors appear simultaneously
- Page scrolls to first error
- Error summary at top (optional):
  - Red banner: "Please fix 3 errors below"
  - List of errors with jump links

Field-level requirements:
- Show requirements proactively (before error):
  - "Password must contain:"
  - ✓ "At least 8 characters" (green checkmark when met)
  - ○ "One uppercase letter" (grey dot when not met)
  - ○ "One number"
  - Updates in real-time as user types

Optional vs Required fields:
- Required: Red asterisk after label "Email *"
- Optional: "(Optional)" text in grey after label

SECTION 12: ACCESSIBILITY SPECIFICATIONS

Requirements box:
- Label association: Labels must be properly associated with inputs
- Focus indicators: Visible 2px blue outline on all interactive elements
- Error announcements: Screen readers announce errors immediately
- Required fields: Marked with asterisk and aria-required
- Placeholder text: Not a replacement for labels
- Touch targets: Minimum 44x44px for mobile
- Color alone: Don't rely solely on color for error states (use icons too)
- Keyboard navigation: Tab through all fields, Enter to submit

SECTION 13: FORM LAYOUT EXAMPLES

Single-column form (343px wide):
- Stack all fields vertically
- 24px spacing between fields
- Full-width buttons at bottom
- 32px bottom margin before button

Two-column form (tablet/desktop):
- First Name (48% width) | Last Name (48% width)
- 4% gap between columns
- Some fields span full width (email, address)

Inline form (compact):
- Email input + Submit button on same row
- Input: 70% width
- Button: 28% width
- 2% gap
- Use for newsletters, simple subscriptions

Multi-step form:
- Progress indicator at top (showing step 2 of 4)
- Only show fields for current step
- "Back" and "Continue" buttons at bottom
- Save progress indication

SECTION 14: USAGE GUIDELINES

DO:
- Provide clear labels for all inputs ✓
- Show validation feedback inline ✓
- Use appropriate input types (email, tel, number) ✓
- Group related fields together ✓
- Auto-focus first field on page load ✓

DON'T:
- Don't use placeholder as label replacement ✗
- Don't validate before user finishes typing ✗
- Don't use ambiguous error messages ✗
- Don't make optional fields look required ✗
- Don't clear form on error ✗

Use consistent spacing, clear typography, and visual hierarchy throughout. Add gridlines showing 8px spacing system. Use annotations with arrows for measurements.

2.3 Cards & Containers
 card and container component library (1400px wide x 3000px tall):

HEADER:
Title: "Cards & Container Components" (Inter Bold, 36px)
Subtitle: "Reusable content containers for all contexts" (Inter Regular, 16px, grey)

SECTION 1: BASE CARD ANATOMY

Standard card (343px wide x 200px height):
Show exploded view with annotations:

- Container:
  - Background: White (#FFFFFF)
  - Border: 1px solid #E5E7EB (optional, often no border)
  - Border radius: 16px
  - Shadow: 0px 2px 8px rgba(0,0,0,0.08)
  - Padding: 16px (all sides) ⭐
  
- Content hierarchy:
  - Top: Optional header/meta (8px from top)
  - Middle: Main content (flexible space)
  - Bottom: Optional footer/actions (8px from bottom)

Elevation levels (show 3 cards with different shadows):
1. Level 1 (Default):
   - Shadow: 0px 2px 8px rgba(0,0,0,0.08)
   - Use: Standard cards in feed
   
2. Level 2 (Elevated):
   - Shadow: 0px 4px 16px rgba(0,0,0,0.12)
   - Use: Modal cards, feature cards
   
3. Level 3 (Floating):
   - Shadow: 0px 8px 32px rgba(0,0,0,0.16)
   - Use: Dropdowns, popovers, tooltips

SECTION 2: NEWS ARTICLE CARDS

Horizontal layout card (343px x 116px):
- Structure:
  - Left: Image (100x100px square, 8px radius)
  - Right: Content area (remaining width, 12px gap from image)
  
- Content area breakdown:
  - Line 1: Category tag
    - Small pill: "Politics" (Inter Medium, 11px)
    - Background: Light blue (#EFF6FF)
    - Text: Deep Navy (#1A365D)
    - Padding: 4px 8px
    - Border radius: 4px
    
  - Line 2: Headline (8px below tag)
    - Text: "Congress Debates New Climate Policy"
    - Font: Inter Semibold, 16px, #1E293B
    - Max lines: 2
    - Overflow: Ellipsis
    - Line height: 1.4
    
  - Line 3: Meta info (8px below headline)
    - Source: "Reuters" (Inter Regular, 13px, grey #64748B)
    - Separator: " · " (dot)
    - Time: "4h ago" (same styling)

- Card states:
  - Default: As described above
  - Hover (web): Shadow increases, translates Y -2px
  - Pressed (mobile): Background light grey, scale 0.98
  - Read state: Headline opacity 60% (indicating already read)

Vertical layout card (343px x 320px):
- Structure top to bottom:
  - Image: 343x193px (16:9 ratio, top edge matches card radius)
  - Content area: 16px padding
  
- Content:
  - Category + Save icon (horizontal row):
    - Left: Category tag "Breaking" (red background)
    - Right: Bookmark icon (20px, grey, tappable)
  - Headline: "Senate Passes Major Infrastructure Bill"
    - Font: Inter Bold, 20px
    - Max lines: 3
    - 8px top margin
  - Description: Brief summary text (Inter Regular, 14px, grey, 2 lines, 8px top margin)
  - Meta row (12px top margin):
    - Source + timestamp
    - Engagement: Comment count, share count (small icons + numbers)

Large feature card (343px x 400px):
- Image: 343x240px (larger image)
- Gradient overlay on bottom 30% of image (black 0% to 70% opacity)
- Text overlaid on image bottom:
  - Category tag (white background, 60% opacity)
  - Headline in white (Inter Bold, 24px, 2-3 lines)
- Content area below image (16px padding):
  - Description: 3 lines
  - Author info: Avatar (32px) + name + timestamp
  - Read more button

SECTION 3: PROFILE CARDS

Compact profile card (343px x 80px):
- Horizontal layout:
  - Left: Profile photo (56px circle)
  - Middle content (12px gap from photo):
    - Name: "Sen. Elizabeth Warren" (Inter Semibold, 16px)
    - Details: "Massachusetts (D)" (Inter Regular, 14px, grey)
    - Role tag: "Senate Judiciary" (small pill)
  - Right: Follow button or chevron (depending on context)

Expanded profile card (343px x 240px):
- Structure:
  - Top section (Deep Navy gradient background, 100px height):
    - Profile photo (80px circle, centered, overlaps bottom edge by 40px)
    
  - Content section (white background):
    - Name: Centered, below photo overlap (16px margin)
    - Party + State: Centered
    - Quick stats row (3 columns, 24px top margin):
      - "12 Years" | "2026" | "89%"
      - Small labels below each number
    - Action buttons row:
      - "Follow" (Primary small) + "Contact" (Secondary small)
      - Horizontal, centered, 8px gap

Directory list card (343px x 88px):
- Same as compact but with additional info:
  - Right side shows: Next election date (small text)
  - Bottom border: 1px solid light grey
  - Used in scrolling lists
  - No shadow (flat design for lists)

SECTION 4: DATA/STATS CARDS

Single stat card (165px x 140px):
- Small square card for dashboard grid
- Structure:
  - Icon: Top-left (32px, Deep Navy)
  - Number: Large (Inter Bold, 36px, #1E293B)
  - Label: Below number (Inter Regular, 13px, grey)
  - Trend indicator: Small arrow + percentage (green or red)
  
Example variations:
- "124 Bills Tracked" with document icon
- "3 Live Sessions" with play icon
- "89% Activity Rate" with chart icon

Stats row card (343px x 100px):
- Horizontal layout, 3 columns:
  - Each column:
    - Number: Inter Bold, 28px, centered
    - Label: Inter Regular, 12px, grey, centered
  - Dividers: 1px vertical lines between columns

Progress card (343px x 160px):
- Header: "Profile Completion" (Inter Semibold, 18px)
- Large percentage: "65%" (Inter Bold, 48px, centered)
- Progress ring: Circular progress indicator (120px diameter, Deep Navy)
- Tasks remaining: "2 tasks left" (Inter Regular, 14px, grey)
- Button: "Complete Profile" (Primary, small)

SECTION 5: ACTION CARDS

CTA (Call-to-Action) card (343px x 200px):
- Background: Gradient (Deep Navy to darker navy) or solid color
- Icon: Large (64px, white or gold)
- Headline: "Upgrade to Premium" (Inter Bold, 24px, white)
- Body text: 2 lines explaining benefit (Inter Regular, 15px, white 80% opacity)
- Button: Contrasting color (Gold or White)
- Optional: Dismiss X button (top-right)

Premium upsell card (343px x 240px):
- Background: Gold gradient (#F59E0B to #FBBF24)
- Shadow: 0px 8px 24px rgba(245,158,11,0.4)
- Content (all white text):
  - Crown icon (48px, top)
  - "Unlock Premium" headline (Inter Bold, 26px)
  - Benefit list with checkmarks (3-4 items)
  - Price: "$9.99/month" (Inter Bold, 32px)
  - Button: White background, gold text
  - "Learn more" link

Quick action card (343px x 80px):
- Horizontal layout:
  - Left icon (40px, in colored circle background)
  - Middle: Title + subtitle
  - Right: Chevron or action button
- Examples:
  - "Enable Notifications" with bell icon
  - "Complete Profile" with user icon
  - "Share App" with share icon

SECTION 6: MEDIA CARDS

Video card (260px x 200px):
- Thumbnail: 260x146px (16:9 ratio)
- Play button overlay: 48px circle, white with 80% opacity, centered
- Duration badge: Bottom-right corner of thumbnail
  - "12:34" (Inter Semibold, 12px, white)
  - Background: Black 70% opacity
  - Padding: 4px 8px, 4px radius
- Title below: 2 lines, truncate
- Meta: Views + date

Live stream card (300px x 169px):
- Larger featured size
- LIVE badge: Top-left
  - Red background (#EF4444)
  - White text "LIVE" (Inter Bold, 12px)
  - Pulsing red dot (8px) before text
  - Padding: 6px 10px, 6px radius
- View count overlay: Bottom-left
  - "1.2K watching" with eye icon
  - White text on semi-transparent black
- Title overlay: Bottom, white text on gradient

Audio/Podcast card (343px x 100px):
- Horizontal layout:
  - Left: Square artwork (84px)
  - Middle: Title + host name + duration
  - Right: Play button (40px circle)
- Progress bar: If partially played, show below (full width, 4px height)

SECTION 7: LIST ITEM CARDS

Simple list item (343px x 64px):
- Flat design (no shadow, just bottom border)
- Horizontal layout:
  - Left icon (24px)
  - Middle text (title + subtitle if needed)
  - Right: Chevron or secondary info
- Padding: 16px horizontal, 12px vertical
- Border bottom: 1px solid #E5E7EB
- Tap state: Light grey background

Avatar list item (343px x 72px):
- Left: Avatar (48px circle)
- Middle:
  - Primary text: Name (Inter Semibold, 16px)
  - Secondary text: Role or status (Inter Regular, 14px, grey)
- Right: Action (Follow button, checkbox, or info)

Expandable list item (343px x variable):
- Collapsed state (64px):
  - Title + chevron (pointing right)
- Expanded state (variable):
  - Title + chevron (pointing down)
  - Content area revealed below (16px padding)
  - Nested items or detailed info
  - Collapse animation: Smooth height transition

SECTION 8: NOTIFICATION CARDS

Toast notification (343px x 80px):
- Floating at top or bottom of screen
- Background: White (light mode) or Dark (#1E293B)
- Shadow: 0px 4px 16px rgba(0,0,0,0.2)
- Border-left: 4px colored bar (green=success, red=error, blue=info)
- Layout:
  - Left: Status icon (24px, colored)
  - Middle: Title + message (2 lines max)
  - Right: Dismiss X button (20px)
- Auto-dismiss: After 4 seconds
- Swipe gesture: Dismiss by swiping

Alert banner (343px x 60px):
- Full-width colored background:
  - Info: Light blue (#EFF6FF)
  - Warning: Light yellow (#FEF3C7)
  - Error: Light red (#FEF2F2)
  - Success: Light green (#F0FDF4)
- Icon + text + optional button
- Dismissible with X button

Inline notification (343px x 100px):
- Less prominent than banner
- Light background matching status color
- Icon + title + description
- Optional action link
- 12px radius

SECTION 9: EMPTY STATE CARDS

Empty list card (343px x 240px):
- Centered content:
  - Illustration or icon (100px, grey)
  - Headline: "No Results Found" (Inter Semibold, 20px)
  - Body text: Explanation (Inter Regular, 15px, grey, centered)
  - Optional button: "Add First Item" (Primary)
- Background: Very light grey (#FAFAFA) or white

Placeholder card (343px x 200px):
- Skeleton loading state
- Grey rectangles representing content:
  - Image placeholder (grey rectangle with shimmer)
  - Text line placeholders (2-3 grey bars, varying widths)
- Shimmer animation: Light gradient moving left to right
- Animation duration: 1.5s infinite

SECTION 10: MODAL/DIALOG CARDS

Modal card (343px x variable, centered on screen):
- Background: White
- Border radius: 20px (larger than standard)
- Shadow: 0px 16px 48px rgba(0,0,0,0.24)
- Padding: 24px
- Structure:
  - Header:
    - Title (Inter Bold, 24px, centered or left)
    - Close X button (top-right, 32px tap area)
  - Content: Scrollable if needed
  - Footer: Action buttons (horizontal row)
- Backdrop: Semi-transparent black (60% opacity) behind modal

Bottom sheet (375px wide, variable height):
- Slides up from bottom of screen
- Rounded top corners (24px radius)
- Handle: Small grey pill (32px wide, 4px tall, centered, 8px from top)
- Content: Padding 24px sides, 16px top (below handle)
- Swipe down to dismiss gesture
- Max height: 90% of screen

Action sheet (343px wide, centered):
- List of action buttons:
  - Each button: 56px height, full width
  - Separated by 1px dividers
  - Last button: Different color (often red for destructive)
- Cancel button: Separated, 8px gap, secondary style

SECTION 11: SPECIAL CARDS

Ad card - Native (343px x 116px):
- "Community Sponsor" label (top, gold text, star icon)
- Layout: Same as news card (horizontal)
- Differentiation:
  - Subtle gold left border (3px)
  - "Ad" badge (top-right, small, light gold background)
  - Slightly different background (#FFFBF5 - very light gold tint)

Sponsored content card (343px x variable):
- "Sponsored" label prominent (top-left)
- Higher quality imagery
- Clear CTA button
- Disclosure at bottom: "Sponsored content"

Merch drop card (343px x 320px):
- High-fashion presentation:
  - Large product image (343x260px)
  - Premium shadow: 0px 12px 40px rgba(0,0,0,0.15)
  - "Limited Edition" badge (red, top-right)
- Product info (16px padding):
  - Name (Inter Bold, 18px)
  - Price (Inter Bold, 24px, Deep Navy)
  - "Add to Cart" button (Primary, full width)

Calendar event card (343px x 100px):
- Left edge: Colored bar (4px, color-coded by type)
- Content:
  - Time: Large (Inter Bold, 18px)
  - Event name: 2 lines
  - Location/details: Small grey text
  - Reminder icon: If reminder set

SECTION 12: CARD GRIDS & LAYOUTS

Single column (mobile):
- Cards stack vertically
- Full width minus 16px margins (343px)
- 12px spacing between cards

Two-column grid (tablet):
- Each card: ~352px wide
- 16px gap between columns
- 32px side margins
- Stagger if card heights vary

Three-column grid (desktop):
- Each card: ~400px wide
- 24px gaps
- Max-width container: 1312px

Horizontal scroll row:
- Cards in horizontal line
- 12px spacing
- 16px leading/trailing margins
- Peek next card (show 1.3 cards) to indicate scroll

Masonry layout (Pinterest-style):
- Variable height cards
- 2-3 columns depending on screen
- Tight packing, minimal gaps

SECTION 13: CARD BEHAVIORS

Tap/Click interactions:
- Entire card tappable (not just portions)
- Tap state: Light grey background or scale 0.98
- Haptic feedback: Light impact (mobile)
- Navigation: Smooth transition to detail view

Swipe actions (mobile):
- Swipe left: Reveal actions (Archive, Delete, etc.)
- Swipe right: Reveal alternate actions (Share, Save)
- Action buttons slide in from edge
- Colored backgrounds behind actions
- Full swipe threshold: Triggers primary action

Long press:
- Hold for 600ms triggers
- Contextual menu appears
- Options: Share, Save, Report, etc.
- Haptic feedback: Medium impact

Pull to refresh (on lists of cards):
- Pull down gesture
- Spinner appears at top
- New cards slide in from top

SECTION 14: ACCESSIBILITY & GUIDELINES

Accessibility requirements:
- Minimum tap target: 44x44px for interactive elements
- Focus indicator: 2px outline around card on keyboard focus
- Screen reader: Card content properly structured (heading, body, actions)
- Color contrast: All text meets WCAG AA minimum
- Motion: Respect reduced-motion preference (no slide/scale animations)

DO:
- Keep card content scannable and concise ✓
- Use consistent card dimensions per context ✓
- Provide clear visual hierarchy ✓
- Include tap state feedback ✓
- Group related information ✓

DON'T:
- Don't nest cards inside cards ✗
- Don't use cards for single pieces of info ✗
- Don't make entire card unclickable ✗
- Don't use inconsistent shadows/elevations ✗
- Don't overload cards with content ✗


