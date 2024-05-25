This is a new [**React Native**](https://reactnative.dev) project, bootstrapped using [`@react-native-community/cli`](https://github.com/react-native-community/cli).

# Getting Started

>**Note**: Make sure you have completed the [React Native - Environment Setup](https://reactnative.dev/docs/environment-setup) instructions till "Creating a new application" step, before proceeding.

## Step 1: Start the Metro Server

First, you will need to start **Metro**, the JavaScript _bundler_ that ships _with_ React Native.

To start Metro, run the following command from the _root_ of your React Native project:

```bash
# using npm
npm start

# OR using Yarn
yarn start
```

## Step 2: Start your Application

Let Metro Bundler run in its _own_ terminal. Open a _new_ terminal from the _root_ of your React Native project. Run the following command to start your _Android_ or _iOS_ app:

### For Android

```bash
# using npm
npm run android

# OR using Yarn
yarn android
```

### For iOS

```bash
# using npm
npm run ios

# OR using Yarn
yarn ios
```

If everything is set up _correctly_, you should see your new app running in your _Android Emulator_ or _iOS Simulator_ shortly provided you have set up your emulator/simulator correctly.

This is one way to run your app — you can also run it directly from within Android Studio and Xcode respectively.

# Explanation of the chosen architecture pattern and state management approach.

For this project I use redux like a state management. It is a small project with a not huge state tree. Benefits for this state management are the next one:
1. Predictable State Management
2. Middleware for Asynchronous Logic
3. Maintainable and Scalable Code
4. Flexible Architecture

For this app, I combine patterns.

1. Component-Based Architecture: At the core, use a component-based architecture to structure  UI.
2. Clean Architecture Principles: Apply clean architecture principles to separate concerns and organize code into layers (Presentation, Domain, Data).
3. Component-Based Architecture: the app is divided into reusable, self-contained components. Each component manages its own state and UI logic.

# Dependency list 

@react-native-async-storage/async-storage: A simple, asynchronous, persistent, key-value storage system for React Native applications. It’s used for storing data locally on the device.

@react-native-community/hooks: A collection of useful hooks for React Native, like useKeyboard, useAppState, etc.

@react-navigation/native: The core library for React Navigation, providing the essential components and utilities to manage navigation in a React Native app.

@react-navigation/stack: Provides stack-based navigation for React Navigation.

@reduxjs/toolkit: Official, recommended way to write Redux logic. It helps with writing Redux store setup, reducers, and actions more efficiently.

react-native-gesture-handler: A library for handling gestures in React Native apps.

react-native-paper: A library for creating smooth animations and gesture interactions in React Native.

react-native-safe-area-context: Provides a way to handle safe area insets (like the notch and home indicator) for React Native apps.

react-native-screens: A library that optimizes screen rendering and performance by using native navigation primitives.

react-native-storage: Provides a simple, persistent, and async key-value storage system for React Native apps

react-native-toast-message: A library to display customizable toast messages in React Native apps.

react-navigation: A navigation library for React Native

react-redux: Official React bindings for Redux, enabling your React components to interact with the Redux store.

redux-persist: A library to persist and rehydrate Redux state.











