# 🔍 GitHub Search Users

A simple web app to search GitHub users by username, built with **React / Next.js**.
It fetches data from the [GitHub REST API](https://docs.github.com/en/rest) and displays user profiles, repositories, and other details in a clean UI.

---

## 🚀 Features

* 🔎 Search for GitHub users by username
* 👤 View user profile details (name, avatar, bio, followers, following, etc.)
* 📂 Optional: View user repositories with stars and forks
* ⏳ Loading and error handling states
* ⚡ Debounced search to reduce unnecessary API calls
* 📄 Pagination support using GitHub API’s `page` parameter
* 🔐 Handles GitHub API rate limits gracefully

---

## 🛠️ Tech Stack

* **Frontend:** React / Next.js
* **Styling:** CSS / TailwindCSS (optional)
* **API:** GitHub REST API
* **State Management:** React hooks (`useState`, `useEffect`)
* **Deployment:** Vercel / Netlify

---

## 📦 Installation & Setup

1. Clone the repo:

   ```bash
   git clone https://github.com/gvardhan97/Search-Github-users.git
   cd Search-Github-users
   ```

2. Install dependencies:

   ```bash
   npm install
   # or
   yarn install
   ```

3. Create a `.env.local` file (optional if using GitHub token to increase rate limits):

   ```
   NEXT_PUBLIC_GITHUB_TOKEN=your_github_personal_access_token
   ```

4. Run the development server:

   ```bash
   npm run dev
   ```

5. Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## ⚙️ Usage

* Enter a GitHub username in the search bar.
* The app will fetch and display the user’s profile.
* Click on "View Repositories" to see the list of public repos.
* If API rate limit is hit, an error message will be shown.


---

## 📚 API Reference

* **Search Users:**
  `GET https://api.github.com/search/users?q={username}`

* **Get User Details:**
  `GET https://api.github.com/users/{username}`

* **Get User Repositories:**
  `GET https://api.github.com/users/{username}/repos`

---

## 🔒 Security Notes

* For public demo, API calls can be unauthenticated (60 req/hr).
* To avoid hitting limits, use a GitHub personal access token stored in `.env.local`.
* Never commit your token to Git.

---

## 📈 Future Improvements

* Add authentication so users can save favorites
* Infinite scroll for repositories
* GraphQL GitHub API for more efficient queries
* Dark mode UI

---

## 🙌 Acknowledgements

* [GitHub REST API](https://docs.github.com/en/rest)
* [React](https://reactjs.org/)

---
