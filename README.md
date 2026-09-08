😂 Comedy Gold!

A lighthearted joke-generator web app. click a button, get a joke, laugh (hopefully). Built with plain HTML, Tailwind CSS, and vanilla JavaScript, powered by the [JokeAPI](https://jokeapi.dev/).

> Made with ❤️ by **Oly_Verse**

Features

- **Random jokes on demand** — fetches a new joke from JokeAPI with one click
- **Category filtering** — choose between 💻 Tech, 🎲 Random, 🖤 Dark Humor, and 🔬 Science
- **Safe mode enabled** — jokes are filtered to avoid explicit/NSFW content
- **Like / Dislike reactions** — a small interactive touch on each joke (visual only, not persisted)
- **Dark mode toggle** — switch between light and dark themes, remembered via a simple class toggle
- **Responsive layout** — mobile-friendly nav with a collapsible menu, animated floating decorations that reposition across breakpoints
- **Loading state** — a playful "Loading 😂😂" indicator while a joke is being fetched
- **Handles single-part and two-part jokes** — supports both JokeAPI's `single` type and `setup`/`delivery` (two-part) type

Tech Stack

- **HTML5**
- **[Tailwind CSS](https://tailwindcss.com/)** (via CDN, with `darkMode: "class"` configured)
- **Vanilla JavaScript** — no frameworks, no build step
- **[JokeAPI v2](https://v2.jokeapi.dev/)** — external API for joke data
- **Google Fonts** — [Comic Relief](https://fonts.google.com/specimen/Comic+Relief) for the playful hand-written look

Project Structure
 index.html      # Markup, layout, and Tailwind styling
 main.js         # All interactivity: menu, dark mode, joke fetching, likes, categories
 README.md

Getting Started
No build tools or dependencies to install — this is a static site.

1. **Clone the repository**
   ```bash
   git clone https://github.com/<your-username>/<repo-name>.git
   cd <repo-name>
   
2. **Open it in a browser**
   - Easiest: just double-click `index.html`, or
   - Recommended: serve it locally so relative paths and fonts behave consistently (e.g. with the VS Code "Live Server" extension, or):
     ```bash
     npx serve .
     
3. Click **"Next Joke"** and start laughing.

API Reference

Jokes are fetched from JokeAPI's public endpoint:

GET https://v2.jokeapi.dev/joke/{category}?safe-mode


- `{category}` — one of `Programming`, `Any`, `Dark`, `Misc` (mapped to the app's category buttons)
- `safe-mode` — filters out jokes flagged as racist, sexist, explicit, etc.

See the full [JokeAPI documentation](https://jokeapi.dev/) for available categories, flags, and response formats.

 Known Limitations / Ideas for Later

- Like/dislike state isn't saved between jokes or page reloads
- No loading/error retry button — a failed fetch just shows a fallback message
- Dark mode preference isn't persisted (resets on page refresh)
- Category selection isn't remembered for the next joke (always need to reselect, or it defaults back to "Any")

Credits

- Jokes provided by [JokeAPI](https://jokeapi.dev/)
- Built by **Oly_Verse**
