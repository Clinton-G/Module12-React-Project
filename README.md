Module12-React-Project

Description:
This is a React-based e-commerce application developed for Module 12 of the Frontend Specialization.
The app allows users to view products, add items to a shopping cart, and complete the checkout process.
The project has been configured to utilize Continuous Integration (CI) and Continuous Deployment (CD) with GitHub Actions and Vercel, ensuring that all code changes are automatically tested and deployed.

Features:
Product Listings: View a list of products available for purchase.
Shopping Cart: Add products to a shopping cart and view cart contents.
Checkout Process: Simulate a checkout process for the added products.
Unit Testing: Comprehensive unit tests implemented with Vitest to ensure the reliability of core features.
Continuous Integration (CI): Automatically runs tests on every push to the main branch via GitHub Actions.
Continuous Deployment (CD): Automatically deploys to Vercel after successful test execution on GitHub Actions.
Code Linting: Code is linted using ESLint to maintain clean and consistent code style.




Installation:

To get started with the project on your local machine:

Clone the repository:
  git clone https://github.com/Clinton-G/Module12-React-Project.git

Change into the project directory:
  cd Module12-React-Project

Install the necessary dependencies:
  npm install

Start the development server:
  npm run dev

Open your browser and go to http://localhost:3000 to view the app.

Running Tests:

To run unit tests, execute the following command in your terminal:
  npm run test

This will run Vitest to check for any issues in your code and ensure everything is working correctly.




Continuous Integration (CI):

  GitHub Actions: A GitHub Actions workflow has been set up to automatically run unit tests whenever changes are pushed to the main branch.

  Test Failures: If any test fails during the CI process, the deployment will be prevented to ensure only working code is deployed.




Continuous Deployment (CD):

This project is automatically deployed to Vercel. The CD pipeline works as follows:
  When changes are pushed to the main branch, the GitHub Actions workflow triggers.
  The tests are run automatically.
  If the tests pass, the application is deployed to Vercel.



Deployment
The application is deployed using Vercel. You can view the deployed version at the URL provided by Vercel after the successful deployment.
  Vercel Project ID: prj_iBtibHvB2NCQJyiJNUmuw67xlCzn
  GitHub Actions Workflow: The CI/CD workflow is configured in .github/workflows/main.yml.




Technologies Used:
  React: A JavaScript library for building user interfaces.
  Vite: A fast build tool and development server used to bundle and serve the React application.
  Vitest: A testing framework for running unit tests.
  GitHub Actions: For CI/CD workflows, including automated testing and deployment.
  Vercel: For deploying the React application to the web.
  ESLint: A static code analysis tool for maintaining code quality.




Contributing:

If you'd like to contribute to the project:
  Fork the repository.
  Create a new branch (git checkout -b feature-branch).
  Make your changes and commit them (git commit -am 'Add new feature').
  Push your changes to the branch (git push origin feature-branch).
  Open a pull request to the main branch.
