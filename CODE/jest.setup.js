// jest.setup.js
global.window = global;
global.document = global.document;
global.window = { location: { pathname: "/internals" } };