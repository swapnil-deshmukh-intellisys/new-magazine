module.exports = [
"[externals]/@tanstack/react-query [external] (@tanstack/react-query, esm_import)", ((__turbopack_context__) => {
"use strict";

return __turbopack_context__.a(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {

const mod = await __turbopack_context__.y("@tanstack/react-query");

__turbopack_context__.n(mod);
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, true);}),
"[externals]/@tanstack/react-query-devtools [external] (@tanstack/react-query-devtools, esm_import)", ((__turbopack_context__) => {
"use strict";

return __turbopack_context__.a(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {

const mod = await __turbopack_context__.y("@tanstack/react-query-devtools");

__turbopack_context__.n(mod);
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, true);}),
"[externals]/styled-jsx/style.js [external] (styled-jsx/style.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("styled-jsx/style.js", () => require("styled-jsx/style.js"));

module.exports = mod;
}),
"[externals]/react-dom [external] (react-dom, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("react-dom", () => require("react-dom"));

module.exports = mod;
}),
"[project]/UNICORN/src/components/common/LoadingPage.jsx [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react/jsx-dev-runtime [external] (react/jsx-dev-runtime, cjs)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$styled$2d$jsx$2f$style$2e$js__$5b$external$5d$__$28$styled$2d$jsx$2f$style$2e$js$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/styled-jsx/style.js [external] (styled-jsx/style.js, cjs)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react [external] (react, cjs)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [ssr] (ecmascript)");
;
;
;
;
const LoadingPage = ()=>{
    const [isLoading, setIsLoading] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"])(true);
    (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useEffect"])(()=>{
        // Simulate loading time
        const timer = setTimeout(()=>{
            setIsLoading(false);
        }, 2000); // 2 seconds loading time
        return ()=>clearTimeout(timer);
    }, []);
    if (!isLoading) return null;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                className: "jsx-d3478c7d13870ab6" + " " + "loading-page",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                    className: "jsx-d3478c7d13870ab6" + " " + "loading-container",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                            className: "jsx-d3478c7d13870ab6" + " " + "loading-logo",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {
                                src: "/logos/chronicle_logo.png",
                                alt: "Chronicles Logo",
                                width: 300,
                                height: 120,
                                style: {
                                    objectFit: "contain",
                                    width: "100%",
                                    height: "auto",
                                    maxWidth: "300px"
                                }
                            }, void 0, false, {
                                fileName: "[project]/UNICORN/src/components/common/LoadingPage.jsx",
                                lineNumber: 23,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0))
                        }, void 0, false, {
                            fileName: "[project]/UNICORN/src/components/common/LoadingPage.jsx",
                            lineNumber: 22,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                            className: "jsx-d3478c7d13870ab6" + " " + "loading-dots",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                    className: "jsx-d3478c7d13870ab6" + " " + "dot"
                                }, void 0, false, {
                                    fileName: "[project]/UNICORN/src/components/common/LoadingPage.jsx",
                                    lineNumber: 38,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                    className: "jsx-d3478c7d13870ab6" + " " + "dot"
                                }, void 0, false, {
                                    fileName: "[project]/UNICORN/src/components/common/LoadingPage.jsx",
                                    lineNumber: 39,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                    className: "jsx-d3478c7d13870ab6" + " " + "dot"
                                }, void 0, false, {
                                    fileName: "[project]/UNICORN/src/components/common/LoadingPage.jsx",
                                    lineNumber: 40,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/UNICORN/src/components/common/LoadingPage.jsx",
                            lineNumber: 37,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                            className: "jsx-d3478c7d13870ab6" + " " + "loading-progress",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                className: "jsx-d3478c7d13870ab6" + " " + "progress-bar",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                    className: "jsx-d3478c7d13870ab6" + " " + "progress-fill"
                                }, void 0, false, {
                                    fileName: "[project]/UNICORN/src/components/common/LoadingPage.jsx",
                                    lineNumber: 45,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0))
                            }, void 0, false, {
                                fileName: "[project]/UNICORN/src/components/common/LoadingPage.jsx",
                                lineNumber: 44,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0))
                        }, void 0, false, {
                            fileName: "[project]/UNICORN/src/components/common/LoadingPage.jsx",
                            lineNumber: 43,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                            className: "jsx-d3478c7d13870ab6" + " " + "loading-text",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("h2", {
                                    className: "jsx-d3478c7d13870ab6",
                                    children: "Loading..."
                                }, void 0, false, {
                                    fileName: "[project]/UNICORN/src/components/common/LoadingPage.jsx",
                                    lineNumber: 50,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("p", {
                                    className: "jsx-d3478c7d13870ab6",
                                    children: "Welcome to The Entrepreneurial Chronicles"
                                }, void 0, false, {
                                    fileName: "[project]/UNICORN/src/components/common/LoadingPage.jsx",
                                    lineNumber: 51,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/UNICORN/src/components/common/LoadingPage.jsx",
                            lineNumber: 49,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/UNICORN/src/components/common/LoadingPage.jsx",
                    lineNumber: 21,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/UNICORN/src/components/common/LoadingPage.jsx",
                lineNumber: 20,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$externals$5d2f$styled$2d$jsx$2f$style$2e$js__$5b$external$5d$__$28$styled$2d$jsx$2f$style$2e$js$2c$__cjs$29$__["default"], {
                id: "d3478c7d13870ab6",
                children: ".loading-page.jsx-d3478c7d13870ab6{z-index:9999;color:#fff;--logo-max-width:300px;--progress-width:200px;--heading-size:1.5rem;--text-size:1rem;--dot-size:12px;--container-gap:2rem;background:#000;justify-content:center;align-items:center;width:100%;height:100vh;display:flex;position:fixed;top:0;left:0}.loading-container.jsx-d3478c7d13870ab6{text-align:center;justify-content:center;align-items:center;gap:var(--container-gap);flex-direction:column;display:flex}.loading-logo.jsx-d3478c7d13870ab6{width:100%;max-width:var(--logo-max-width);justify-content:center;align-items:center;animation:1s ease-in-out logoFadeIn;display:flex}.loading-dots.jsx-d3478c7d13870ab6{justify-content:center;align-items:center;gap:8px;animation:1.5s ease-in-out dotsFadeIn;display:flex}.dot.jsx-d3478c7d13870ab6{width:var(--dot-size);height:var(--dot-size);background:#d4af37;border-radius:50%;animation:1.4s ease-in-out infinite both bounce}.dot.jsx-d3478c7d13870ab6:first-child{animation-delay:-.32s}.dot.jsx-d3478c7d13870ab6:nth-child(2){animation-delay:-.16s}.dot.jsx-d3478c7d13870ab6:nth-child(3){animation-delay:0s}.loading-progress.jsx-d3478c7d13870ab6{width:var(--progress-width);animation:1.8s ease-in-out progressFadeIn}.progress-bar.jsx-d3478c7d13870ab6{background:#333;border-radius:2px;width:100%;height:4px;overflow:hidden}.progress-fill.jsx-d3478c7d13870ab6{background:linear-gradient(90deg,#d4af37,gold,#d4af37);border-radius:2px;height:100%;animation:2s ease-in-out progressFill}.loading-text.jsx-d3478c7d13870ab6{animation:2s ease-in-out textFadeIn}.loading-text.jsx-d3478c7d13870ab6 h2.jsx-d3478c7d13870ab6{color:#d4af37;font-size:var(--heading-size);margin:0 0 .5rem;font-weight:600;animation:2s ease-in-out infinite pulse}.loading-text.jsx-d3478c7d13870ab6 p.jsx-d3478c7d13870ab6{color:#ccc;font-size:var(--text-size);margin:0;font-weight:300}@keyframes pulse{0%,to{opacity:1}50%{opacity:.5}}@keyframes logoFadeIn{0%{opacity:0;transform:translateY(-20px)}to{opacity:1;transform:translateY(0)}}@keyframes dotsFadeIn{0%{opacity:0;transform:translateY(20px)}to{opacity:1;transform:translateY(0)}}@keyframes bounce{0%,80%,to{opacity:.5;transform:scale(0)}40%{opacity:1;transform:scale(1)}}@keyframes textFadeIn{0%{opacity:0;transform:translateY(20px)}to{opacity:1;transform:translateY(0)}}@keyframes progressFadeIn{0%{opacity:0;transform:translateY(10px)}to{opacity:1;transform:translateY(0)}}@keyframes progressFill{0%{width:0%}to{width:100%}}@media (width<=1024px){.loading-page.jsx-d3478c7d13870ab6{--logo-max-width:280px;--progress-width:180px;--heading-size:1.4rem;--text-size:.95rem;--dot-size:11px;--container-gap:1.5rem}.loading-logo.jsx-d3478c7d13870ab6 img.jsx-d3478c7d13870ab6{width:100%!important;height:auto!important}}@media (width<=768px){.loading-page.jsx-d3478c7d13870ab6{--logo-max-width:220px;--progress-width:160px;--heading-size:1.2rem;--text-size:.9rem;--dot-size:10px;--container-gap:1.2rem}.loading-container.jsx-d3478c7d13870ab6{padding:20px}.loading-logo.jsx-d3478c7d13870ab6 img.jsx-d3478c7d13870ab6{width:100%!important;height:auto!important}.loading-dots.jsx-d3478c7d13870ab6{gap:6px}}@media (width<=480px){.loading-page.jsx-d3478c7d13870ab6{--logo-max-width:180px;--progress-width:140px;--heading-size:1rem;--text-size:.8rem;--dot-size:8px;--container-gap:1rem}.loading-container.jsx-d3478c7d13870ab6{padding:15px}.loading-logo.jsx-d3478c7d13870ab6 img.jsx-d3478c7d13870ab6{width:100%!important;height:auto!important}.loading-dots.jsx-d3478c7d13870ab6{gap:5px}}@media (width<=360px){.loading-page.jsx-d3478c7d13870ab6{--logo-max-width:150px;--progress-width:120px;--heading-size:.9rem;--text-size:.75rem;--dot-size:7px;--container-gap:.8rem}.loading-container.jsx-d3478c7d13870ab6{padding:10px}.loading-logo.jsx-d3478c7d13870ab6 img.jsx-d3478c7d13870ab6{width:100%!important;height:auto!important}.loading-dots.jsx-d3478c7d13870ab6{gap:4px}}"
            }, void 0, false, void 0, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true);
};
const __TURBOPACK__default__export__ = LoadingPage;
}),
"[project]/UNICORN/src/components/common/ScrollToTop.jsx [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react/jsx-dev-runtime [external] (react/jsx-dev-runtime, cjs)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$styled$2d$jsx$2f$style$2e$js__$5b$external$5d$__$28$styled$2d$jsx$2f$style$2e$js$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/styled-jsx/style.js [external] (styled-jsx/style.js, cjs)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react [external] (react, cjs)");
;
;
;
const ScrollToTop = ()=>{
    const [isVisible, setIsVisible] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"])(false);
    // Debug: Show button immediately for testing
    (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useEffect"])(()=>{
        setIsVisible(true);
    }, []);
    // Show button when page is scrolled down
    (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useEffect"])(()=>{
        const toggleVisibility = ()=>{
            // Lower threshold for mobile devices
            const threshold = window.innerWidth <= 768 ? 200 : 300;
            if (window.pageYOffset > threshold) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };
        window.addEventListener('scroll', toggleVisibility);
        return ()=>window.removeEventListener('scroll', toggleVisibility);
    }, []);
    // Scroll to top function
    const scrollToTop = ()=>{
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["Fragment"], {
        children: [
            isVisible && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("button", {
                onClick: scrollToTop,
                "aria-label": "Scroll to top",
                className: "jsx-3c1272467b570b30" + " " + "scroll-to-top",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("i", {
                    className: "jsx-3c1272467b570b30" + " " + "fas fa-arrow-up"
                }, void 0, false, {
                    fileName: "[project]/UNICORN/src/components/common/ScrollToTop.jsx",
                    lineNumber: 44,
                    columnNumber: 11
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/UNICORN/src/components/common/ScrollToTop.jsx",
                lineNumber: 39,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$externals$5d2f$styled$2d$jsx$2f$style$2e$js__$5b$external$5d$__$28$styled$2d$jsx$2f$style$2e$js$2c$__cjs$29$__["default"], {
                id: "3c1272467b570b30",
                children: ".scroll-to-top.jsx-3c1272467b570b30{color:#000;cursor:pointer;z-index:9999;opacity:0;background:#d4af37;border:none;border-radius:50%;justify-content:center;align-items:center;width:50px;height:50px;font-size:18px;font-weight:700;transition:all .3s;animation:.3s forwards fadeInUp;display:flex;position:fixed;bottom:30px;right:30px;transform:translateY(20px);box-shadow:0 4px 20px #d4af374d}.scroll-to-top.jsx-3c1272467b570b30:hover{background:gold;transform:translateY(-3px);box-shadow:0 6px 25px #d4af3766}.scroll-to-top.jsx-3c1272467b570b30:active{transform:translateY(-1px)}@keyframes fadeInUp{to{opacity:1;transform:translateY(0)}}@media (width<=768px){.scroll-to-top.jsx-3c1272467b570b30{z-index:9999;width:45px;height:45px;font-size:16px;bottom:20px;right:20px;display:flex!important}}@media (width<=480px){.scroll-to-top.jsx-3c1272467b570b30{z-index:9999;width:40px;height:40px;font-size:14px;bottom:15px;right:15px;display:flex!important}}@media (width<=1024px){.scroll-to-top.jsx-3c1272467b570b30{visibility:visible!important;display:flex!important}}"
            }, void 0, false, void 0, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true);
};
const __TURBOPACK__default__export__ = ScrollToTop;
}),
"[project]/UNICORN/src/pages/_app.js [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

return __turbopack_context__.a(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react/jsx-dev-runtime [external] (react/jsx-dev-runtime, cjs)");
var __TURBOPACK__imported__module__$5b$externals$5d2f40$tanstack$2f$react$2d$query__$5b$external$5d$__$2840$tanstack$2f$react$2d$query$2c$__esm_import$29$__ = __turbopack_context__.i("[externals]/@tanstack/react-query [external] (@tanstack/react-query, esm_import)");
var __TURBOPACK__imported__module__$5b$externals$5d2f40$tanstack$2f$react$2d$query$2d$devtools__$5b$external$5d$__$2840$tanstack$2f$react$2d$query$2d$devtools$2c$__esm_import$29$__ = __turbopack_context__.i("[externals]/@tanstack/react-query-devtools [external] (@tanstack/react-query-devtools, esm_import)");
var __TURBOPACK__imported__module__$5b$project$5d2f$UNICORN$2f$src$2f$components$2f$common$2f$LoadingPage$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/UNICORN/src/components/common/LoadingPage.jsx [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$UNICORN$2f$src$2f$components$2f$common$2f$ScrollToTop$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/UNICORN/src/components/common/ScrollToTop.jsx [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react [external] (react, cjs)");
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$externals$5d2f40$tanstack$2f$react$2d$query__$5b$external$5d$__$2840$tanstack$2f$react$2d$query$2c$__esm_import$29$__,
    __TURBOPACK__imported__module__$5b$externals$5d2f40$tanstack$2f$react$2d$query$2d$devtools__$5b$external$5d$__$2840$tanstack$2f$react$2d$query$2d$devtools$2c$__esm_import$29$__
]);
[__TURBOPACK__imported__module__$5b$externals$5d2f40$tanstack$2f$react$2d$query__$5b$external$5d$__$2840$tanstack$2f$react$2d$query$2c$__esm_import$29$__, __TURBOPACK__imported__module__$5b$externals$5d2f40$tanstack$2f$react$2d$query$2d$devtools__$5b$external$5d$__$2840$tanstack$2f$react$2d$query$2d$devtools$2c$__esm_import$29$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__;
;
;
;
;
;
;
;
;
;
const queryClient = new __TURBOPACK__imported__module__$5b$externals$5d2f40$tanstack$2f$react$2d$query__$5b$external$5d$__$2840$tanstack$2f$react$2d$query$2c$__esm_import$29$__["QueryClient"](); // Create a query client instance
function MyApp({ Component, pageProps }) {
    const [isLoading, setIsLoading] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"])(true);
    (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useEffect"])(()=>{
        // Show loading page for initial load
        const timer = setTimeout(()=>{
            setIsLoading(false);
        }, 2000); // 2 seconds loading time
        return ()=>clearTimeout(timer);
    }, []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
        style: {
            background: '#000',
            color: '#fff',
            minHeight: '100vh'
        },
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$externals$5d2f40$tanstack$2f$react$2d$query__$5b$external$5d$__$2840$tanstack$2f$react$2d$query$2c$__esm_import$29$__["QueryClientProvider"], {
            client: queryClient,
            children: [
                isLoading && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$UNICORN$2f$src$2f$components$2f$common$2f$LoadingPage$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                    fileName: "[project]/UNICORN/src/pages/_app.js",
                    lineNumber: 27,
                    columnNumber: 23
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(Component, {
                    ...pageProps
                }, void 0, false, {
                    fileName: "[project]/UNICORN/src/pages/_app.js",
                    lineNumber: 28,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$UNICORN$2f$src$2f$components$2f$common$2f$ScrollToTop$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                    fileName: "[project]/UNICORN/src/pages/_app.js",
                    lineNumber: 29,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$externals$5d2f40$tanstack$2f$react$2d$query$2d$devtools__$5b$external$5d$__$2840$tanstack$2f$react$2d$query$2d$devtools$2c$__esm_import$29$__["ReactQueryDevtools"], {
                    initialIsOpen: false
                }, void 0, false, {
                    fileName: "[project]/UNICORN/src/pages/_app.js",
                    lineNumber: 30,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/UNICORN/src/pages/_app.js",
            lineNumber: 26,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/UNICORN/src/pages/_app.js",
        lineNumber: 25,
        columnNumber: 5
    }, this);
}
const __TURBOPACK__default__export__ = MyApp;
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__5c224169._.js.map