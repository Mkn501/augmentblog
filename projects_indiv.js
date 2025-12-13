window.PROJECTS = [
    {
        "id": "rental-yield-trap",
        "category": "Real Estate Analysis",
        "type": "Case Study",
        "style_type": "organic",
        "title": "The Rental Yield Trap",
        "subtitle": "When Bond Yield Beats Rental Yield",
        "tagline": "Using AI to expose the 'Negative Leverage' trap in a premium property market.",
        "author": "You",
        "likes": 0,
        "tech_stack": ["Gemini 3.0", "Streamlit", "Antigravity"],
        "metrics": {
            "role": "Solo Builder",
            "timeline": "60 Mins",
            "impact": "Saved €500k",
            "tech": "Gemini 3.0, Streamlit, Antigravity"
        },
        "summary": "An investigative analysis of a €469k apartment listing. What looked like a standard investment was revealed to be a capital sinkhole when compared against risk-free Bunds. This project automated the financial math to prove the fair price was actually €380k, not €469k.",
        "insights": {
            "analyst": "Risk-Adjusted: Property (2.4%) vs Bond (2.8%). Data-driven reality check.",
            "businessman": "ROI Focus: Identified €500k capital allocation error in < 10 mins.",
            "visionary": "Future of Work: Rapid \"Vibe Coding\" cycles turn abstract ideas into tools instantly.",
            "humanist": "Liberation: Removing the fear from complex financial decisions through clarity."
        },
        "steps": [
            {
                "title": "The Prompt (Human Intent)",
                "color": "stone-400",
                "content_type": "text",
                "text": "\"Here is an exposé for a flat (€469k). Calculate the annual net cold rent and show me the calculation path. Is the yield attractive?\""
            },
            {
                "title": "Deep Dive Discovery",
                "color": "insight-blue",
                "content_type": "list",
                "items": [
                    "Initial Yield is only 1.92% (Net Rent €10,800).",
                    "Rent Cap Discovery: 15% limit due to existing tenants.",
                    "Negative Leverage: Mortgage interest (~3.8%) exceeds potential Property Yield (2.24%).",
                    "Benchmark: Risk-free German Bonds yield 2.8% with zero effort."
                ]
            },
            {
                "title": "Automation Review",
                "color": "insight-yellow",
                "content_type": "html",
                "html": "To avoid manual math for every listing, I built a <strong>Reverse Calculator</strong>. Instead of asking <em>'What is the yield?'</em>, it asks <em>'What should the price be to hit 3%?'</em>. Result: Fair price is <strong class=\"bg-yellow-100 px-1\">€300k</strong> (36% below asking)."
            },
            {
                "title": "Implementation",
                "color": "stone-900",
                "content_type": "image",
                "image_url": "pics/streamlit_dashboard.png",
                "image_caption": "Streamlit Calculator: Cashflow & Bond Comparison",
                "link_url": "https://residentialinvestmentcalc-ikffwbbuqfpvu2ksd9iolx.streamlit.app/"
            },
            {
                "title": "Feedback Refinement",
                "color": "insight-green",
                "content_type": "failure_success",
                "failure": "The financial model ignored the physical asset age (1972) and legal risks.",
                "success": "Manually added a Due Diligence Checklist: 1992 Heating System (GEG Exchange Obligation) & WEG Reserve Fund check."
            }
        ],
        "lessons": [
            "AI excels at math but needs human guidance on legal constraints (Rent Control, GEG).",
            "Vibe Coding shifts the PM role from 'specifying' to 'building'.",
            "Never analyze yield in a vacuum; always compare to Risk-Free rates."
        ],
        "generalizes": "Institutional firms spend millions on analysts to vet deals overnight. This workflow proves that a solo operator with AI can now replicate that **institutional-grade due diligence in seconds**. It generalizes into a 'Personal Investment Committee' that creates a standardized, unemotional scorecard for every financial decision you face."
    },
    {
        "id": "job-skills",
        "category": "Career",
        "type": "Tool",
        "style_type": "structured",
        "title": "Job Skills Matching",
        "subtitle": "Automated tailoring",
        "tagline": "Automated tailoring",
        "author": "Sarah",
        "likes": 0,
        "tech_stack": ["React", "GPT-4"],
        "metrics": {
            "role": "Developer",
            "timeline": "2 Weeks",
            "impact": "3x Interview Rate",
            "tech": "React, OpenAI"
        },
        "summary": "Job applications are a numbers game, but personalization wins. This bot takes a CV and a Job Description, matches keywords, and rewrites the resume summary to highlight relevant experience automatically.",
        "insights": {
            "analyst": "Keyword matching analysis vs JD.",
            "businessman": "Increased interview rate by 300%.",
            "visionary": "Personal branding agent.",
            "humanist": "Tone check: Confidence vs Arrogance."
        },
        "steps": [
            {
                "title": "The Prompt (Human Intent)",
                "color": "stone-400",
                "content_type": "text",
                "text": "User intent: 'I want to apply for this Product Manager role, but my CV is too engineering-heavy. Rewrite my summary to emphasize strategic leadership while keeping the technical details accurate.'"
            },
            {
                "title": "Deep Dive Discovery",
                "color": "insight-blue",
                "content_type": "list",
                "items": [
                    "Recruiters spend <6 seconds per resume.",
                    "ATS systems reject 75% of qualified candidates due to missing keywords."
                ]
            },
            {
                "title": "Automation Review",
                "color": "insight-yellow",
                "content_type": "html",
                "html": "The <strong class=\"bg-yellow-100 px-1\">Context Matcher</strong> algorithm extracts the top 5 required skills from the JD and maps them to the user's project history, generating a 'Skills Gap Analysis' before writing."
            },
            {
                "title": "Implementation",
                "color": "stone-900",
                "content_type": "image",
                "image_url": "https://lh3.googleusercontent.com/aida-public/AB6AXuB6gPommhRV3U7IAzhEbExPy-aZyhzjgskV0RKyEeUu3_x0g5PD9pR66U6YCOnCwKnWzzq4IQYl3NdXDfxngFduPdHOHsi52CFtpfPAjMc9T1LISzyR3-CnmMrlfDjkMhrm5QyQuxg8qhlMUUyFOnlciVsxmmveMP9nATNuAphe71aC9cDA01m0QKpDosHki80Ch7zFPdHV_OletgZq-4weINpYe5z_KDqbGwc0T8d39_RD9H2hTSTm-_zvP0UZfoVHfJCaDw3y4mYw",
                "image_caption": "Dashboard Interface"
            },
            {
                "title": "Feedback Refinement",
                "color": "insight-green",
                "content_type": "failure_success",
                "failure": "Initial drafts sounded too robotic and used excessive buzzwords like 'synergy'.",
                "success": "Implemented a 'Tone Slider' that adjusts the temperature of the model, allowing users to choose between 'Professional', 'Creative', or 'Direct'."
            }
        ],
        "lessons": [
            "Parsing PDFs is harder than generating text.",
            "Users trust the output more if they see the changes highlighted."
        ],
        "generalizes": "This 'Context Matcher' service can be adapted for any domain requiring document alignment, such as grant proposals, sales pitches, or legal contract reviews, saving thousands of hours in manual tailoring."
    },
    {
        "id": "fact-checking",
        "category": "Automation",
        "type": "Tool",
        "style_type": "code",
        "coming_soon": true,
        "title": "Fact Checking",
        "subtitle": "Automated Verification",
        "tagline": "v2.0.1",
        "author": "You",
        "likes": 0,
        "tech_stack": ["Node.js", "Puppeteer"],
        "metrics": {
            "role": "Engineer",
            "timeline": "1 Weekend",
            "impact": "40h/week Saved",
            "tech": "Puppeteer"
        },
        "summary": "Manual data entry is soul-crushing. This scraper monitors competitor pricing in real-time and alerts the team via Slack when significant threshold breaches occur.",
        "insights": {
            "analyst": "99% data accuracy.",
            "businessman": "Saved 40 hours/week.",
            "visionary": "Real-time market pulse.",
            "humanist": "Rate-limiting ethics built-in."
        },
        "steps": [
            {
                "title": "The Prompt (Human Intent)",
                "color": "stone-400",
                "content_type": "text",
                "text": "'We need to know when Competitor X drops their price below €50. Checking manually every hour is wasting 20% of the sales team's capacity.'"
            },
            {
                "title": "Deep Dive Discovery",
                "color": "insight-blue",
                "content_type": "list",
                "items": [
                    "Competitor sites use dynamic rendering (hydration).",
                    "Simple HTTP requests return empty HTML bodies."
                ]
            },
            {
                "title": "Automation Review",
                "color": "insight-yellow",
                "content_type": "html",
                "html": "Instead of regex, we deployed a <strong class=\"bg-yellow-100 px-1\">Headless Browser Cluster</strong> that renders the full DOM, waits for the 'AddToCart' button (signaling load complete), and then scrapes the price."
            },
            {
                "title": "Implementation",
                "color": "stone-900",
                "content_type": "image",
                "image_url": "https://lh3.googleusercontent.com/aida-public/AB6AXuB6gPommhRV3U7IAzhEbExPy-aZyhzjgskV0RKyEeUu3_x0g5PD9pR66U6YCOnCwKnWzzq4IQYl3NdXDfxngFduPdHOHsi52CFtpfPAjMc9T1LISzyR3-CnmMrlfDjkMhrm5QyQuxg8qhlMUUyFOnlciVsxmmveMP9nATNuAphe71aC9cDA01m0QKpDosHki80Ch7zFPdHV_OletgZq-4weINpYe5z_KDqbGwc0T8d39_RD9H2hTSTm-_zvP0UZfoVHfJCaDw3y4mYw",
                "image_caption": "Terminal Output Stream"
            },
            {
                "title": "Feedback Refinement",
                "color": "insight-green",
                "content_type": "failure_success",
                "failure": "We got IP banned after 400 requests in 1 minute.",
                "success": "Implemented exponential backoff and rotating residential proxies to mimic human behavior."
            }
        ],
        "lessons": [
            "Websites change frequently; selectors must be robust.",
            "Respect robots.txt to avoid IP bans."
        ],
        "generalizes": "The Headless Browser Cluster is a universal data extraction engine. It can be pointed at any website—financial portals, social media, e-commerce—to create real-time data feeds for market intelligence, sentiment analysis, or compliance monitoring."
    }
];
