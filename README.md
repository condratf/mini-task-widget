# mini-task-widget

## Description
A React application that implements a dynamic widget for managing tasks.
The widget consists of accordion elements, each representing a group of tasks.
The value of the progress bar is dynamically calculated as the normalized sum of the values of the checked tasks.

## Features
Accordion-style widget with tasks grouped in sections.
Dynamic progress bar that state of checked tasks.
Visual indication of completed groups when all tasks within a group are checked.

## Folder Structure
The Folder structure is a simplified interpretation of Feature Sliced Design architecture.
- app: main entry of application
- entities: main entities of application
- shared: shared components, functions, helpers, utils and assets; includes folders: api, assets, utils, hooks, ui
- features: main feature components that are used by widgets
- widgets: widget components that are used by the application

## How to Test
Check/uncheck tasks within accordion groups.
Observe the change in the progress bar based on the normalized sum of checked tasks.
Verify that when all tasks in a group are checked, the group is visually marked as completed (green).

## Usage
- to run dev version - yarn dev
- to preview - yarn build && yarn preview
