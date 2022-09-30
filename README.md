# To install the app locally and open dev server after git clone

npm install
npm run dev (to open dev server)

# Set up dev environment to use Capacitor

upgrade node version:
v18.3.0

install homebrew:
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"

install cocoapods:
brew install cocoapods

install xcode:
xcode-select --install // command line tools
xcode-select -p // check if installed

install android studio

# Deployment & Workflow ci/cd

npm run build // creates the dist folder

npx cap sync // syncronize the web code (from dist folder) to the apps (ios, android folder)

npx cap open ios // to open ios simulator

npx cap open android // to open android simulator

appflow to ci/cd to market places (need to check)
