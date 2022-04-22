module.exports = {
    content: [
      "./src/**/*.{js,jsx,ts,tsx}",
    ],
    theme: {
      extend: {
        backgroundImage: theme => ({
        'cover_nhac_viet': "linear-gradient(to bottom, rgba(0, 0, 0, 0), rgba(26, 55, 77, 0), rgba(26, 55, 77, 1)), url('https://photo-zmp3.zmdcdn.me/cover/c/0/2/b/c02b9e121d335e26b6537772b8d88faa.jpg')",
        })
      },
    },
    plugins: [],
  }