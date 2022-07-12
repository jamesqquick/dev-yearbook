var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf, __hasOwnProp = Object.prototype.hasOwnProperty;
var __markAsModule = (target) => __defProp(target, "__esModule", { value: !0 });
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: !0 });
}, __reExport = (target, module2, copyDefault, desc) => {
  if (module2 && typeof module2 == "object" || typeof module2 == "function")
    for (let key of __getOwnPropNames(module2))
      !__hasOwnProp.call(target, key) && (copyDefault || key !== "default") && __defProp(target, key, { get: () => module2[key], enumerable: !(desc = __getOwnPropDesc(module2, key)) || desc.enumerable });
  return target;
}, __toESM = (module2, isNodeMode) => __reExport(__markAsModule(__defProp(module2 != null ? __create(__getProtoOf(module2)) : {}, "default", !isNodeMode && module2 && module2.__esModule ? { get: () => module2.default, enumerable: !0 } : { value: module2, enumerable: !0 })), module2), __toCommonJS = /* @__PURE__ */ ((cache) => (module2, temp) => cache && cache.get(module2) || (temp = __reExport(__markAsModule({}), module2, 1), cache && cache.set(module2, temp), temp))(typeof WeakMap != "undefined" ? /* @__PURE__ */ new WeakMap() : 0);

// server.js
var server_exports = {};
__export(server_exports, {
  handler: () => handler
});

// node_modules/@remix-run/dev/dist/compiler/shims/react.ts
var React = __toESM(require("react"));

// server.js
var import_netlify = require("@remix-run/netlify");

// server-entry-module:@remix-run/dev/server-build
var server_build_exports = {};
__export(server_build_exports, {
  assets: () => assets_manifest_default,
  entry: () => entry,
  routes: () => routes
});

// app/entry.server.tsx
var entry_server_exports = {};
__export(entry_server_exports, {
  default: () => handleRequest
});
var import_react = require("@remix-run/react"), import_server = require("react-dom/server");
function handleRequest(request, responseStatusCode, responseHeaders, remixContext) {
  let markup = (0, import_server.renderToString)(/* @__PURE__ */ React.createElement(import_react.RemixServer, {
    context: remixContext,
    url: request.url
  }));
  return responseHeaders.set("Content-Type", "text/html"), new Response("<!DOCTYPE html>" + markup, {
    status: responseStatusCode,
    headers: responseHeaders
  });
}

// route:/Users/jamesquick/code/devyearbook/app/root.tsx
var root_exports = {};
__export(root_exports, {
  default: () => App,
  links: () => links,
  meta: () => meta
});
var import_react2 = require("@remix-run/react");

// app/tailwind.css
var tailwind_default = "/build/_assets/tailwind-IY4AZL3D.css";

// route:/Users/jamesquick/code/devyearbook/app/root.tsx
var links = () => [
  { rel: "stylesheet", href: tailwind_default }
], meta = () => ({
  charset: "utf-8",
  title: "New Remix App",
  viewport: "width=device-width,initial-scale=1"
});
function App() {
  return /* @__PURE__ */ React.createElement("html", {
    lang: "en"
  }, /* @__PURE__ */ React.createElement("head", null, /* @__PURE__ */ React.createElement(import_react2.Meta, null), /* @__PURE__ */ React.createElement(import_react2.Links, null)), /* @__PURE__ */ React.createElement("body", null, /* @__PURE__ */ React.createElement("div", {
    className: " mx-auto my-10 max-w-6xl px-10"
  }, /* @__PURE__ */ React.createElement(import_react2.Outlet, null), /* @__PURE__ */ React.createElement(import_react2.ScrollRestoration, null), /* @__PURE__ */ React.createElement(import_react2.Scripts, null), /* @__PURE__ */ React.createElement(import_react2.LiveReload, null))));
}

// route:/Users/jamesquick/code/devyearbook/app/routes/index.tsx
var routes_exports = {};
__export(routes_exports, {
  action: () => action,
  default: () => Index
});
var import_node = require("@remix-run/node");

// app/components/newsletter.tsx
var import_react3 = require("@remix-run/react"), import_react4 = require("react"), NEWSLETTER_STATES = {
  SUCCESS: "SUCCESS",
  SUBMITING: "SUBMITING",
  NOT_SUBMITED: "NOT_SUBMITTED",
  ERRORS: "ERRORS"
};
function Newsletter() {
  var _a, _b, _c, _d;
  let actionData = (0, import_react3.useActionData)(), transition = (0, import_react3.useTransition)(), [visibleClasses, setvisibleClasses] = (0, import_react4.useState)("opacity-0 scale-100"), hiddenClasses = "opacity-0 scale-100", [state, setState] = (0, import_react4.useState)();
  return (0, import_react4.useEffect)(() => {
    actionData !== void 0 && !(actionData == null ? void 0 : actionData.errors) ? setState(NEWSLETTER_STATES.SUCCESS) : (actionData == null ? void 0 : actionData.errors) ? setState(NEWSLETTER_STATES.ERRORS) : actionData === void 0 && setState(NEWSLETTER_STATES.NOT_SUBMITED), transition.submission && setState(NEWSLETTER_STATES.SUBMITING);
  }, [actionData, transition]), setTimeout(() => {
    setvisibleClasses("transition-all duration-300 ease-in opacity-100 scale-100 block");
  }, 0), /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("div", {
    className: `delay-200 ${state === NEWSLETTER_STATES.SUCCESS ? visibleClasses : hiddenClasses}`
  }, state === NEWSLETTER_STATES.SUCCESS && /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("h2", {
    className: "text-2xl text-center"
  }, "Successfully subscribed!"), /* @__PURE__ */ React.createElement("p", {
    className: "text-center"
  }, "Please check your email to verify your subscription."))), /* @__PURE__ */ React.createElement("div", {
    className: `${state !== NEWSLETTER_STATES.SUCCESS ? visibleClasses : hiddenClasses}`
  }, /* @__PURE__ */ React.createElement("h2", {
    className: "text-3xl mb-2 text-center"
  }, "Sign up for updates"), /* @__PURE__ */ React.createElement("p", {
    className: "text-center mb-6"
  }, "Follow progress as we build Dev Yearbook in public!"), /* @__PURE__ */ React.createElement(import_react3.Form, {
    method: "post",
    action: "/?index"
  }, /* @__PURE__ */ React.createElement("label", null, "Email ", /* @__PURE__ */ React.createElement("input", {
    name: "email",
    className: "block border-2 w-full px-4 py-1 rounded-sm border-gray-500 mb-4",
    type: "text",
    defaultValue: (_a = actionData == null ? void 0 : actionData.values) == null ? void 0 : _a.email
  })), /* @__PURE__ */ React.createElement("button", {
    type: "submit",
    className: "border-2 border-gray-500 px-4 py-1 rounded-sm"
  }, state === NEWSLETTER_STATES.SUBMITING ? "Loading..." : "Sign Up!"), /* @__PURE__ */ React.createElement("p", {
    className: "text-center"
  }, (_b = actionData == null ? void 0 : actionData.errors) == null ? void 0 : _b.email)), ((_c = actionData == null ? void 0 : actionData.errors) == null ? void 0 : _c.generalErrorMsg) && /* @__PURE__ */ React.createElement("p", null, (_d = actionData == null ? void 0 : actionData.errors) == null ? void 0 : _d.generalErrorMsg)));
}

// app/utils/mailchimp.ts
var import_mailchimp_marketing = __toESM(require("@mailchimp/mailchimp_marketing"));
import_mailchimp_marketing.default.setConfig({
  apiKey: process.env.MAILCHIMP_API_KEY,
  server: process.env.MAILCHIMP_SERVER_CODE
});
if (!process.env.MAILCHIMP_LIST_ID)
  throw new Error("Please include MAILCHIMP_LIST_ID in your environment variables");
if (!process.env.MAILCHIMP_SUBSCRIBER_TAG)
  throw new Error("Please include MAILCHIMP_SUBSCRIBER TAG in your environment variables");
var listId = process.env.MAILCHIMP_LIST_ID, subscriberTag = process.env.MAILCHIMP_SUBSCRIBER_TAG;
async function addSubscriber(email) {
  var _a, _b, _c, _d;
  try {
    return await import_mailchimp_marketing.default.lists.addListMember(listId, {
      email_address: email,
      status: "subscribed",
      tags: [subscriberTag]
    }), [null, email];
  } catch (err) {
    return ((_b = (_a = err == null ? void 0 : err.response) == null ? void 0 : _a.body) == null ? void 0 : _b.title) === "Member Exists" ? [{ email: "This email address is already subscribed." }, null] : ((_d = (_c = err == null ? void 0 : err.response) == null ? void 0 : _c.body) == null ? void 0 : _d.detail) === "Please provide a valid email address." ? [{ email: err.response.body.detail }, null] : [{ generalErrorMsg: "Failed to save subscriber." }, null];
  }
}
var mailchimp_default = addSubscriber;

// route:/Users/jamesquick/code/devyearbook/app/routes/index.tsx
var action = async ({
  request
}) => {
  let formData = await request.formData(), email = formData.get("email") || "", [errors] = await mailchimp_default(email == null ? void 0 : email.toString()), values = Object.fromEntries(formData);
  if (errors) {
    let body = { errors, values }, status = (errors == null ? void 0 : errors.generalErrorMsg) ? 500 : 400;
    return (0, import_node.json)(body, { status });
  }
  return (0, import_node.json)({ errors, values });
};
function Index() {
  return /* @__PURE__ */ React.createElement("div", {
    className: "max-w-2xl mx-auto"
  }, /* @__PURE__ */ React.createElement("h1", {
    className: "text-4xl text-center mb-2 uppercase font-bold"
  }, "Welcome to Dev Yearbook"), /* @__PURE__ */ React.createElement("p", {
    className: "mb-8 text-xl text-center italic"
  }, "The easiest way to track relationships built at Tech Conferences"), /* @__PURE__ */ React.createElement(Newsletter, null));
}

// server-assets-manifest:@remix-run/dev/assets-manifest
var assets_manifest_default = { version: "7767ec65", entry: { module: "/build/entry.client-T66SJME4.js", imports: ["/build/_shared/chunk-6MKBFO43.js"] }, routes: { root: { id: "root", parentId: void 0, path: "", index: void 0, caseSensitive: void 0, module: "/build/root-HZ5MFQ42.js", imports: void 0, hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/index": { id: "routes/index", parentId: "root", path: void 0, index: !0, caseSensitive: void 0, module: "/build/routes/index-IRBSTMWK.js", imports: void 0, hasAction: !0, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 } }, url: "/build/manifest-7767EC65.js" };

// server-entry-module:@remix-run/dev/server-build
var entry = { module: entry_server_exports }, routes = {
  root: {
    id: "root",
    parentId: void 0,
    path: "",
    index: void 0,
    caseSensitive: void 0,
    module: root_exports
  },
  "routes/index": {
    id: "routes/index",
    parentId: "root",
    path: void 0,
    index: !0,
    caseSensitive: void 0,
    module: routes_exports
  }
};

// server.js
function getLoadContext(event, context) {
  let rawAuthorizationString, netlifyGraphToken;
  event.authlifyToken != null && (netlifyGraphToken = event.authlifyToken);
  let authHeader = event.headers.authorization, graphSignatureHeader = event.headers["x-netlify-graph-signature"];
  authHeader != null && /Bearer /gi.test(authHeader) && (rawAuthorizationString = authHeader.split(" ")[1]);
  let loadContext = {
    clientNetlifyGraphAccessToken: rawAuthorizationString,
    netlifyGraphToken,
    netlifyGraphSignature: graphSignatureHeader
  };
  return Object.keys(loadContext).forEach((key) => {
    loadContext[key] == null && delete loadContext[key];
  }), loadContext;
}
var handler = (0, import_netlify.createRequestHandler)({
  build: server_build_exports,
  getLoadContext,
  mode: "development"
});
module.exports = __toCommonJS(server_exports);
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  handler
});
//# sourceMappingURL=server.js.map
