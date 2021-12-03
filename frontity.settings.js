const settings = {
  "name": "awsm-project",
  "state": {
    "frontity": {
      "url": "https://test.frontity.org",
      "title": "Staffing company for nurses - San Staffing",
      "description": "Are you a nurse looking for your next gig? Check out our contracts for LVN's and Nurse Practitioners."
    }
  },
  "packages": [
    {
      "name": "@awsmin/f1",
      "state": {
        "theme": {
          "menu": [
            [
              "HomePage",
              "./HomePage"
            ],
            [
              "About us",
              "./pages/Aboutus"
            ],
            [
              "Nurses",
              "./pages/Nurses"
            ],
            [
              "Employers",
              "./pages/Employers"
            ],
            [
              "Contact us",
              "./pages/Contactus"
            ],
            [
              "Blog",
              "/"

            ]
          ],
          "featured": {
            "showOnList": false,
            "showOnPost": false
          }
        }
      }
    },
    {
      "name": "@frontity/wp-source",
      "state": {
        "source": {
          "url": "https://test.frontity.org",
          "homepage": "./pages/HomePage",
        }
      }
    },
    "@frontity/tiny-router",
    "@frontity/html2react"
  ]
};

export default settings;
