var dl = Object.defineProperty, fl = Object.defineProperties;
var pl = Object.getOwnPropertyDescriptors;
var Dt = Object.getOwnPropertySymbols;
var Cn = Object.prototype.hasOwnProperty, Sn = Object.prototype.propertyIsEnumerable;
var pt = Math.pow, Wt = (e, t, n) => t in e ? dl(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n, q = (e, t) => {
  for (var n in t || (t = {}))
    Cn.call(t, n) && Wt(e, n, t[n]);
  if (Dt)
    for (var n of Dt(t))
      Sn.call(t, n) && Wt(e, n, t[n]);
  return e;
}, fe = (e, t) => fl(e, pl(t));
var It = (e) => typeof e == "symbol" ? e : e + "", Yt = (e, t) => {
  var n = {};
  for (var o in e)
    Cn.call(e, o) && t.indexOf(o) < 0 && (n[o] = e[o]);
  if (e != null && Dt)
    for (var o of Dt(e))
      t.indexOf(o) < 0 && Sn.call(e, o) && (n[o] = e[o]);
  return n;
};
var O = (e, t, n) => (Wt(e, typeof t != "symbol" ? t + "" : t, n), n);
var Ge = (e, t, n) => new Promise((o, l) => {
  var s = (i) => {
    try {
      r(n.next(i));
    } catch (p) {
      l(p);
    }
  }, a = (i) => {
    try {
      r(n.throw(i));
    } catch (p) {
      l(p);
    }
  }, r = (i) => i.done ? o(i.value) : Promise.resolve(i.value).then(s, a);
  r((n = n.apply(e, t)).next());
});
import { reactive as me, ref as z, defineComponent as ye, useSlots as st, h as Te, openBlock as c, createBlock as G, computed as T, createElementBlock as f, normalizeClass as B, normalizeStyle as A, createElementVNode as g, createTextVNode as ge, unref as pe, createCommentVNode as N, renderSlot as _, provide as Oe, inject as Ae, getCurrentInstance as Xe, onUnmounted as Ue, Fragment as J, toDisplayString as E, createApp as ml, watchEffect as $t, Transition as Jt, withCtx as oe, withDirectives as Ie, withModifiers as De, vShow as Me, watch as Q, toRefs as be, resolveComponent as U, Teleport as Kn, mergeProps as dt, createVNode as te, onMounted as $e, onBeforeUnmount as Qt, shallowReactive as hl, markRaw as Tn, isVNode as gl, Comment as vl, Text as yl, nextTick as Ne, renderList as ie, normalizeProps as bl, guardReactiveProps as $l, resolveDynamicComponent as Ve, onActivated as Ct, toRef as Qe, createSlots as wt, onBeforeMount as Un, readonly as Nn, onDeactivated as St, render as xt, vModelText as wl } from "vue";
class Xn {
}
let kl = class extends Xn {
  constructor() {
    super(...arguments);
    O(this, "save", "保存");
    O(this, "confirm", "确认");
    O(this, "cancel", "取消");
    O(this, "done", "完成");
    O(this, "noData", "暂无数据");
    O(this, "placeholder", "请输入");
    O(this, "select", "请选择");
    O(this, "video", {
      errorTip: "视频加载失败",
      clickRetry: "点击重试"
    });
    O(this, "fixednav", {
      activeText: "收起导航",
      unActiveText: "快速导航"
    });
    O(this, "pagination", {
      prev: "上一页",
      next: "下一页"
    });
    O(this, "calendaritem", {
      weekdays: ["日", "一", "二", "三", "四", "五", "六"],
      end: "结束",
      start: "开始",
      title: "日期选择",
      monthTitle: (n, o) => `${n}年${o}月`,
      today: "今天"
    });
    O(this, "calendarcard", {
      weekdays: ["日", "一", "二", "三", "四", "五", "六"],
      end: "结束",
      start: "开始",
      title: "日期选择",
      monthTitle: (n, o) => `${n}年${o}月`,
      today: "今天"
    });
    O(this, "shortpassword", {
      title: "请输入密码",
      desc: "您使用了虚拟资产，请进行验证",
      tips: "忘记密码"
    });
    O(this, "uploader", {
      ready: "准备完成",
      readyUpload: "准备上传",
      waitingUpload: "等待上传",
      uploading: "上传中",
      success: "上传成功",
      error: "上传失败"
    });
    O(this, "countdown", {
      day: "天",
      hour: "时",
      minute: "分",
      second: "秒"
    });
    O(this, "address", {
      selectRegion: "请选择所在地区",
      deliveryTo: "配送至",
      chooseAnotherAddress: "选择其他地址"
    });
    O(this, "signature", {
      reSign: "重签",
      unSupportTpl: "对不起，当前浏览器不支持Canvas，无法使用本控件！"
    });
    O(this, "ecard", {
      chooseText: "请选择电子卡面值",
      otherValueText: "其他面值",
      placeholder: "请输入1-5000整数"
    });
    O(this, "timeselect", {
      pickupTime: "取件时间"
    });
    O(this, "sku", {
      buyNow: "立即购买",
      buyNumber: "购买数量",
      addToCart: "加入购物车"
    });
    O(this, "skuheader", {
      skuId: "商品编号"
    });
    O(this, "addresslist", {
      addAddress: "新建地址",
      default: "默认"
    });
    O(this, "comment", {
      complaintsText: "我要投诉",
      additionalReview: (n) => `购买${n}天后追评`,
      additionalImages: (n) => `${n}张追评图片`
    });
    O(this, "infiniteloading", {
      loading: "加载中...",
      pullTxt: "松开刷新",
      loadMoreTxt: "哎呀，这里是底部了啦"
    });
    O(this, "datepicker", {
      year: "年",
      month: "月",
      day: "日",
      hour: "时",
      min: "分",
      seconds: "秒"
    });
    O(this, "audiooperate", {
      back: "倒退",
      start: "开始",
      pause: "暂停",
      forward: "快进",
      mute: "静音"
    });
    O(this, "pullrefresh", {
      pulling: "下拉刷新",
      loosing: "释放刷新",
      loading: "加载中...",
      complete: "刷新成功"
    });
  }
};
class Cl extends Xn {
  constructor() {
    super(...arguments);
    O(this, "save", "Save");
    O(this, "confirm", "Confirm");
    O(this, "cancel", "Cancel");
    O(this, "done", "Done");
    O(this, "noData", "No Data");
    O(this, "placeholder", "Placeholder");
    O(this, "select", "Select");
    O(this, "video", {
      errorTip: "Error Tip",
      clickRetry: "Click Retry"
    });
    O(this, "fixednav", {
      activeText: "Close Nav",
      unActiveText: "Open Nav"
    });
    O(this, "pagination", {
      prev: "Previous",
      next: "Next"
    });
    O(this, "calendaritem", {
      weekdays: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
      end: "End",
      start: "Start",
      title: "Calendar",
      monthTitle: (n, o) => `${n}/${o}`,
      today: "Today"
    });
    O(this, "calendarcard", {
      weekdays: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
      end: "End",
      start: "Start",
      title: "Calendar",
      monthTitle: (n, o) => `${n}/${o}`,
      today: "Today"
    });
    O(this, "shortpassword", {
      title: "Please input a password",
      desc: "Verify",
      tips: "Forget password"
    });
    O(this, "uploader", {
      ready: "Ready",
      readyUpload: "Ready to upload",
      waitingUpload: "Waiting for upload",
      uploading: "Uploading",
      success: "Upload successful",
      error: "Upload failed"
    });
    O(this, "countdown", {
      day: " Day ",
      hour: " Hour ",
      minute: " Minute ",
      second: " Second "
    });
    O(this, "address", {
      selectRegion: "Select Region",
      deliveryTo: "Delivery To",
      chooseAnotherAddress: "Choose Another Address"
    });
    O(this, "signature", {
      reSign: "Re Sign",
      unSupportTpl: "Sorry, the current browser doesn't support canvas, so we can't use this control!"
    });
    O(this, "ecard", {
      chooseText: "Select",
      otherValueText: "Other Value",
      placeholder: "Placeholder"
    });
    O(this, "timeselect", {
      pickupTime: "Pickup Time"
    });
    O(this, "sku", {
      buyNow: "Buy Now",
      buyNumber: "Buy Number",
      addToCart: "Add to Cart"
    });
    O(this, "skuheader", {
      skuId: "Sku Number"
    });
    O(this, "addresslist", {
      addAddress: "Add New Address",
      default: "default"
    });
    O(this, "comment", {
      complaintsText: "I have a complaint",
      additionalReview: (n) => `Review after ${n} days of purchase`,
      additionalImages: (n) => `There are ${n} follow-up comments`
    });
    O(this, "infiniteloading", {
      loading: "Loading...",
      pullTxt: "Loose to refresh",
      loadMoreTxt: "Oops, this is the bottom"
    });
    O(this, "datepicker", {
      year: "Year",
      month: "Month",
      day: "Day",
      hour: "Hour",
      min: "Minute",
      seconds: "Second"
    });
    O(this, "audiooperate", {
      back: "Back",
      start: "Start",
      pause: "Pause",
      forward: "Forward",
      mute: "Mute"
    });
    O(this, "pullrefresh", {
      pulling: "Pull to refresh...",
      loosing: "Loose to refresh...",
      loading: "Loading...",
      complete: "Refresh successfully"
    });
  }
}
const en = (e, {
  args: t = [],
  done: n,
  canceled: o
}) => {
  if (e) {
    const l = e(...t);
    Zn(l) ? l.then((s) => {
      s ? n(s) : o && o();
    }).catch(() => {
    }) : l ? n() : o && o();
  } else
    n();
}, Kt = (e) => {
  if (e === null)
    return "null";
  const t = typeof e;
  if (t === "undefined" || t === "string")
    return t;
  switch (toString.call(e)) {
    case "[object Array]":
      return "array";
    case "[object Date]":
      return "date";
    case "[object Boolean]":
      return "boolean";
    case "[object Number]":
      return "number";
    case "[object Function]":
      return "function";
    case "[object RegExp]":
      return "regexp";
    case "[object Object]":
      return e.nodeType !== void 0 ? e.nodeType == 3 ? /\S/.test(e.nodeValue) ? "textnode" : "whitespace" : "element" : "object";
    default:
      return "unknow";
  }
}, qn = Array.isArray, Sl = (e) => e instanceof Date, At = (e) => typeof e == "function", Tl = (e) => typeof e == "string", ct = (e) => e !== null && typeof e == "object", Zn = (e) => ct(e) && At(e.then) && At(e.catch), Nl = document, _n = Nl.body, Ut = (e, t) => {
  try {
    return t.split(".").reduce((n, o) => n[o], e);
  } catch (n) {
    return "";
  }
}, _l = (e, t, n) => {
  const o = Object.assign({}, e), l = Object.assign({}, n);
  return Object.keys(t).length > 0 ? (Object.keys(o).forEach((s) => {
    if (Object.prototype.hasOwnProperty.call(l, s)) {
      const a = Kt(l[s]);
      a == "function" && (o[s] = l[s](t)), a == "string" && (o[s] = t[l[s]]);
    } else
      t[s] && (o[s] = t[s]);
  }), o) : e;
}, Gn = (e, t) => (Object.keys(t).forEach((n) => {
  const o = e[n], l = t[n];
  ct(o) && ct(l) ? Gn(o, l) : e[n] = l;
}), e);
function Dl(e, t = 2) {
  return Object.is(parseFloat(e), NaN) ? console.log(`传入的值：${e}不是一个数字`) : (e = parseFloat(e), (Math.round((e + Number.EPSILON) * Math.pow(10, t)) / Math.pow(10, t)).toFixed(t));
}
function ft(e, t) {
  (typeof e.cancelable != "boolean" || e.cancelable) && e.preventDefault(), t && e.stopPropagation();
}
const Je = (e, t = 2) => {
  for (e += ""; e.length < t; )
    e = "0" + e;
  return e.toString();
}, ze = (e, t, n) => Math.min(Math.max(e, t), n), Jn = () => window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0, Bt = me({
  "zh-CN": new kl(),
  "en-US": new Cl()
});
class Qn {
  static languages() {
    return Bt[this.currentLang.value];
  }
  static use(t, n) {
    n && (Bt[t] = new n()), this.currentLang.value = t;
  }
  static merge(t, n) {
    n && (Bt[t] ? Gn(Bt[t], n) : this.use(t, n));
  }
}
O(Qn, "currentLang", z("zh-CN"));
const Il = /* @__PURE__ */ ye({
  __name: "IconFont",
  props: {
    name: { type: String, default: "" },
    size: { type: [String, Number], default: "" },
    width: { type: [String, Number], default: "" },
    height: { type: [String, Number], default: "" },
    classPrefix: { type: String, default: "nut-icon" },
    fontClassName: { type: String, default: "nutui-iconfont" },
    color: { type: String, default: "" },
    tag: { type: String, default: "i" }
  },
  setup(e) {
    var t;
    const n = e, o = "nut-icon", l = st(), s = () => n.name ? n.name.indexOf("/") !== -1 : !1, a = (d) => {
      if (d)
        return isNaN(Number(d)) ? String(d) : d + "px";
    }, r = s();
    let i = Te(
      r ? "img" : n.tag,
      {
        class: r ? `${o}__img` : `${n.fontClassName} ${o} ${n.classPrefix}-${n.name}`,
        style: {
          color: n.color,
          fontSize: a(n.size),
          width: a(n.width || n.size),
          height: a(n.height || n.size)
        },
        src: r ? n.name : ""
      },
      (t = l.default) == null ? void 0 : t.call(l)
    );
    const p = () => i;
    return (d, y) => (c(), G(p));
  }
});
function Bl(e) {
  return e.name = "IconFont", e.install = (t) => {
    t.component("IconFont", e);
  }, e;
}
Bl(Il);
const F = (e) => ye({
  props: {
    class: { type: String, default: "" },
    name: { type: String, default: e },
    color: { type: String, default: "" },
    width: { type: [String, Number], default: "" },
    height: { type: [String, Number], default: "" }
  },
  setup(t) {
    const n = (s) => {
      if (s)
        return isNaN(Number(s)) ? String(s) : s + "px";
    }, o = T(() => {
      const s = "nut-icon";
      return {
        [t.class]: t.class,
        [s]: !0,
        [s + "-" + t.name]: t.name
      };
    }), l = T(() => {
      const s = {};
      return s.height = n(t.height), s.width = n(t.width), s.color = t.color, s;
    });
    return { classes: o, style: l };
  }
}), ve = (e, t) => {
  const n = e.__vccOpts || e;
  for (const [o, l] of t)
    n[o] = l;
  return n;
};
F("add");
F("addfollow");
F("arrow-down");
const Ml = F("arrow-down2"), Ll = /* @__PURE__ */ g("path", {
  d: "M1741.19 227.497a121.654 121.654 0 1 1 127.858 206.812L1292.65 790.27a182.482 182.482 0 0 1-191.727 0L524.646 434.31a121.654 121.654 0 1 1 127.859-206.812l544.403 335.887c181.387-111.8 362.773-223.965 544.282-335.887",
  fill: "currentColor",
  "fill-opacity": "0.9"
}, null, -1), Pl = [
  Ll
];
function El(e, t, n, o, l, s) {
  return c(), f("svg", {
    class: B(e.classes),
    style: A(e.style),
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 2472 1024",
    role: "presentation"
  }, Pl, 6);
}
const Al = /* @__PURE__ */ ve(Ml, [["render", El]]);
F("arrow-right");
F("arrow-right2");
F("arrow-up");
const zl = F("arrow-up2"), Vl = /* @__PURE__ */ g("path", {
  d: "M623.406 815.479A129.722 129.722 0 1 1 487.068 594.95C691.9 468.083 896.73 341.993 1101.691 215.125a194.583 194.583 0 0 1 204.442 0l614.494 379.567a129.722 129.722 0 1 1-136.338 220.657l-580.506-358.292-580.377 358.422",
  fill: "currentColor",
  "fill-opacity": "0.9"
}, null, -1), Ol = [
  Vl
];
function Hl(e, t, n, o, l, s) {
  return c(), f("svg", {
    class: B(e.classes),
    style: A(e.style),
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 2472 1024",
    role: "presentation"
  }, Ol, 6);
}
const Rl = /* @__PURE__ */ ve(zl, [["render", Hl]]);
F("ask");
F("ask2");
F("cart");
F("cart2");
F("category");
const Fl = F("check-checked"), Wl = /* @__PURE__ */ g("path", {
  d: "M510.613 2.837C229.793 2.837.032 232.598.032 513.418S229.793 1024 510.613 1024s510.582-229.762 510.582-510.582S794.27 2.837 510.613 2.837zm0 794.238c-156.01 0-283.656-127.646-283.656-283.657s127.645-283.656 283.656-283.656S794.27 357.407 794.27 513.418 666.624 797.075 510.613 797.075z",
  fill: "currentColor",
  "fill-opacity": "0.9"
}, null, -1), Yl = /* @__PURE__ */ g("path", {
  d: "M382.968 513.418a127.645 127.645 0 1 0 255.29 0 127.645 127.645 0 1 0-255.29 0Z",
  fill: "currentColor",
  "fill-opacity": "0.9"
}, null, -1);
function jl(e, t, n, o, l, s) {
  return c(), f("svg", {
    class: B(e.classes),
    style: A(e.style),
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 1032 1024",
    role: "presentation"
  }, [
    Wl,
    ge(","),
    Yl
  ], 6);
}
const Kl = /* @__PURE__ */ ve(Fl, [["render", jl]]), Ul = F("check-disabled"), Xl = /* @__PURE__ */ g("path", {
  d: "M506.467 0C227.962 0 .094 227.868.094 506.374s227.868 506.373 506.373 506.373 506.374-227.868 506.374-506.373S787.786 0 506.467 0zm202.55 571.077H306.73c-45.01 0-67.516-22.506-67.516-67.517 0-45.01 22.505-67.516 67.516-67.516h402.286c45.01 0 67.516 22.505 67.516 67.516 0 45.011-22.505 67.517-67.516 67.517z",
  fill: "currentColor",
  "fill-opacity": "0.9"
}, null, -1), ql = [
  Xl
];
function Zl(e, t, n, o, l, s) {
  return c(), f("svg", {
    class: B(e.classes),
    style: A(e.style),
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 1024 1024",
    role: "presentation"
  }, ql, 6);
}
const Gl = /* @__PURE__ */ ve(Ul, [["render", Zl]]), Jl = F("check-normal"), Ql = /* @__PURE__ */ g("path", {
  d: "M512 1024c-136.533 0-264.533-54.044-361.244-150.756C54.044 776.534 0 648.534 0 512c0-136.533 54.044-264.533 150.756-361.244C247.466 54.044 375.466 0 512 0c136.533 0 264.533 54.044 361.244 150.756C969.956 247.466 1024 375.466 1024 512s-54.044 264.533-150.756 361.244C776.534 969.956 648.534 1024 512 1024zm0-938.667c-113.778 0-221.867 45.511-301.511 125.156S85.333 398.222 85.333 512s45.511 221.867 125.156 301.511S398.222 938.667 512 938.667s221.867-45.511 301.511-125.156S938.667 625.778 938.667 512 893.156 290.133 813.51 210.489 625.778 85.333 512 85.333z",
  fill: "currentColor",
  "fill-opacity": "0.9"
}, null, -1), xl = [
  Ql
];
function es(e, t, n, o, l, s) {
  return c(), f("svg", {
    class: B(e.classes),
    style: A(e.style),
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 1024 1024",
    role: "presentation"
  }, xl, 6);
}
const xn = /* @__PURE__ */ ve(Jl, [["render", es]]), ts = F("Check"), ns = /* @__PURE__ */ g("path", {
  d: "M998.4 245.029c-219.429 153.6-398.629 332.8-552.229 552.228-40.228 58.514-128 54.857-164.571-3.657-69.486-106.057-149.943-186.514-256-256-51.2-32.914-18.286-113.371 40.229-98.743C182.857 460.8 274.286 508.343 358.4 585.143c157.257-190.172 358.4-340.114 588.8-435.2 62.171-25.6 106.057 58.514 51.2 95.086",
  fill: "currentColor",
  "fill-opacity": "0.9"
}, null, -1), os = [
  ns
];
function ls(e, t, n, o, l, s) {
  return c(), f("svg", {
    class: B(e.classes),
    style: A(e.style),
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 1024 1024",
    role: "presentation"
  }, os, 6);
}
const eo = /* @__PURE__ */ ve(ts, [["render", ls]]), ss = F("checked"), as = /* @__PURE__ */ g("path", {
  d: "M512 0C230.4 0 0 230.4 0 512s230.4 512 512 512 512-230.4 512-512S793.6 0 512 0zm281.6 369.778C779.378 381.156 600.178 500.622 472.178 691.2c0 0 0 2.844-2.845 2.844-8.533 5.69-48.355 36.978-88.177-8.533-39.823-51.2-62.578-99.555-142.223-142.222-2.844 0-2.844-2.845-2.844-2.845-8.533-11.377-39.822-56.888 19.911-56.888 45.511 0 91.022 11.377 162.133 73.955 5.69 5.689 14.223 5.689 17.067 0C469.333 517.69 608.711 366.933 768 318.578c0 0 19.911-2.845 31.289 14.222 5.689 11.378 11.378 22.756-5.689 36.978z",
  fill: "currentColor",
  "fill-opacity": "0.9"
}, null, -1), rs = [
  as
];
function is(e, t, n, o, l, s) {
  return c(), f("svg", {
    class: B(e.classes),
    style: A(e.style),
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 1024 1024",
    role: "presentation"
  }, rs, 6);
}
const to = /* @__PURE__ */ ve(ss, [["render", is]]), us = F("checklist"), cs = /* @__PURE__ */ g("path", {
  d: "M159.289 500.622c62.578 0 125.155 17.067 221.867 102.4 8.533 5.69 19.91 5.69 25.6 0 48.355-54.044 238.933-261.689 455.11-329.955 0 0 28.445-5.69 42.667 19.91 8.534 17.067 19.911 34.134-5.689 54.045-22.755 17.067-264.533 179.2-440.888 440.89l-2.845 2.844c-11.378 8.533-68.267 51.2-119.467-14.223-56.888-71.11-85.333-139.377-196.266-196.266-2.845 0-2.845-2.845-5.69-5.69-11.377-11.377-54.044-73.955 25.6-73.955z",
  fill: "currentColor",
  "fill-opacity": "0.9"
}, null, -1), ds = [
  cs
];
function fs(e, t, n, o, l, s) {
  return c(), f("svg", {
    class: B(e.classes),
    style: A(e.style),
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 1024 1024",
    role: "presentation"
  }, ds, 6);
}
const ps = /* @__PURE__ */ ve(us, [["render", fs]]), ms = F("circle-close"), hs = /* @__PURE__ */ g("path", {
  d: "M511.492 73.063a438.425 438.425 0 0 1 310.545 748.953 439.16 439.16 0 1 1-621.09-621.073A435.695 435.695 0 0 1 511.492 73.046m0-73.063C267.49.018 57.468 172.408 9.87 411.717-37.713 651.042 90.39 890.658 315.823 984.03c225.45 93.355 485.444 14.472 621.005-188.416 135.543-202.906 108.885-473.293-63.659-645.82A509.645 509.645 0 0 0 511.492.002zm-175.7 635.495 299.673-299.674c12.049-12.049 24.115-12.049 36.164 0l15.496 15.497c12.05 12.066 12.05 24.115 0 36.18L387.47 687.122c-12.066 12.05-24.115 12.05-36.181 0l-15.497-15.496c-12.049-12.066-12.049-24.115 0-36.182zm0-284.177 15.496-15.497c12.066-12.049 24.115-12.049 36.18 0l299.64 299.674c12.05 12.049 12.05 24.098 0 36.164l-15.496 15.496c-12.05 12.05-24.115 12.05-36.182 0L335.808 387.465c-12.049-12.05-12.049-24.098 0-36.164z",
  fill: "currentColor",
  "fill-opacity": "0.9"
}, null, -1), gs = [
  hs
];
function vs(e, t, n, o, l, s) {
  return c(), f("svg", {
    class: B(e.classes),
    style: A(e.style),
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 1024 1024",
    role: "presentation"
  }, gs, 6);
}
const tn = /* @__PURE__ */ ve(ms, [["render", vs]]);
F("clock");
F("close-little");
const ys = F("close"), bs = /* @__PURE__ */ g("path", {
  d: "M981.577 1024c-11.703 0-23.406-2.926-32.183-11.703L13.166 76.07c-14.629-17.555-14.629-46.812 0-64.366 17.554-14.629 46.811-14.629 64.365 0L1013.76 947.93c17.554 17.555 17.554 43.886 0 61.44-8.777 11.703-20.48 14.629-32.183 14.629zm-936.228 0c-11.703 0-23.406-2.926-32.183-11.703-17.555-17.554-17.555-43.886 0-61.44L949.394 14.63c17.555-17.555 43.886-17.555 61.44 0 17.555 17.554 17.555 43.885 0 61.44L74.606 1012.297C68.754 1021.074 57.05 1024 45.349 1024z",
  fill: "currentColor",
  "fill-opacity": "0.9"
}, null, -1), $s = [
  bs
];
function ws(e, t, n, o, l, s) {
  return c(), f("svg", {
    class: B(e.classes),
    style: A(e.style),
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 1026 1024",
    role: "presentation"
  }, $s, 6);
}
const zt = /* @__PURE__ */ ve(ys, [["render", ws]]), ks = F("comment"), Cs = /* @__PURE__ */ g("path", {
  d: "M760.415 876.089H259.793c-132.741 0-242.726-109.985-242.726-242.726V242.726C17.067 109.986 127.052 0 259.793 0h504.414c132.741 0 242.726 109.985 242.726 242.726v394.43c-3.792 132.74-109.985 238.933-246.518 238.933zM259.793 113.778c-72.06 0-128.949 56.889-128.949 128.948v394.43c0 72.059 56.89 128.948 128.949 128.948h504.414c68.267 0 128.949-56.89 128.949-128.948v-394.43c0-72.06-56.89-128.948-128.949-128.948H259.793zm56.888 887.466c-15.17 0-30.34-3.792-41.718-15.17-22.756-22.755-22.756-56.889 0-79.644l109.985-109.986c22.756-22.755 56.889-22.755 79.645 0s22.755 56.89 0 79.645L354.607 986.074c-7.585 7.585-22.755 15.17-37.926 15.17zm193.423-398.222c-45.511 0-91.023-22.755-117.57-56.889-18.964-26.548-15.171-60.681 7.585-79.644 26.548-18.963 60.681-15.17 79.644 7.585 15.17 18.963 45.511 18.963 56.889 0 18.963-22.755 56.889-30.34 79.644-7.585s30.341 56.889 7.585 79.644c-22.755 37.926-68.266 56.89-113.777 56.89z",
  fill: "currentColor",
  "fill-opacity": "0.9"
}, null, -1), Ss = [
  Cs
];
function Ts(e, t, n, o, l, s) {
  return c(), f("svg", {
    class: B(e.classes),
    style: A(e.style),
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 1024 1024",
    role: "presentation"
  }, Ss, 6);
}
const Ns = /* @__PURE__ */ ve(ks, [["render", Ts]]);
F("date");
const _s = F("del"), Ds = /* @__PURE__ */ g("path", {
  d: "M668.444 1024H355.556c-142.223 0-256-113.778-256-256V170.667h824.888V768c0 142.222-113.777 256-256 256zM184.89 256v512c0 93.867 76.8 170.667 170.667 170.667h312.888c93.867 0 170.667-76.8 170.667-170.667V256H184.89zm753.778 0H85.333c-22.755 0-42.666-19.911-42.666-42.667s19.91-42.666 42.666-42.666h853.334c22.755 0 42.666 19.91 42.666 42.666S961.423 256 938.667 256zM625.777 85.333H398.223c-22.755 0-42.666-19.91-42.666-42.666S375.466 0 398.222 0h227.556c22.755 0 42.666 19.911 42.666 42.667s-19.91 42.666-42.666 42.666z",
  fill: "currentColor",
  "fill-opacity": "0.9"
}, null, -1), Is = [
  Ds
];
function Bs(e, t, n, o, l, s) {
  return c(), f("svg", {
    class: B(e.classes),
    style: A(e.style),
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 1024 1024",
    role: "presentation"
  }, Is, 6);
}
const no = /* @__PURE__ */ ve(_s, [["render", Bs]]);
F("del2");
F("dongdong");
F("dou-arrow-up");
const Ms = F("down-arrow"), Ls = /* @__PURE__ */ g("path", {
  d: "M128 349.867C93.867 332.8 34.133 341.333 8.533 384-8.533 418.133 0 477.867 42.667 503.467 179.2 588.8 315.733 665.6 443.733 750.933c42.667 25.6 93.867 25.6 136.534 0C716.8 665.6 853.333 588.8 981.333 503.467c42.667-25.6 51.2-76.8 25.6-119.467s-76.8-51.2-119.466-25.6C768 435.2 640 512 512 588.8 384 512 256 435.2 128 349.867",
  fill: "currentColor",
  "fill-opacity": "0.9"
}, null, -1), Ps = [
  Ls
];
function Es(e, t, n, o, l, s) {
  return c(), f("svg", {
    class: B(e.classes),
    style: A(e.style),
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 1024 1024",
    role: "presentation"
  }, Ps, 6);
}
const oo = /* @__PURE__ */ ve(Ms, [["render", Es]]);
F("download");
F("dshop");
const As = F("edit"), zs = /* @__PURE__ */ g("path", {
  d: "M285.479 992.97H108.606c-27.927 0-55.854-12.412-77.576-31.03C9.31 940.217 0 915.393 0 884.363l3.103-155.152c0-24.824 9.31-46.545 27.927-65.164L626.812 65.164c83.782-83.782 220.315-83.782 307.2 0 83.782 83.781 83.782 223.418 0 307.2l-605.09 601.988c-12.413 12.412-27.928 18.618-43.443 18.618zM781.964 93.09c-31.03 0-65.164 12.413-89.988 37.237L96.194 729.212 93.09 884.364c0 9.309 6.206 15.515 15.515 15.515h161.358l598.884-595.782c49.649-49.649 49.649-127.224 0-173.77l-3.103-3.103c-21.72-21.721-52.751-34.133-83.781-34.133zm-201.946 78.508 65.816-65.847L882.812 342.73l-65.846 65.784zM946.424 992.97H217.212c-24.824 0-46.545-21.722-46.545-46.546s21.72-46.545 46.545-46.545h729.212c24.824 0 46.546 21.721 46.546 46.545s-21.722 46.546-46.546 46.546z",
  fill: "currentColor",
  "fill-opacity": "0.9"
}, null, -1), Vs = [
  zs
];
function Os(e, t, n, o, l, s) {
  return c(), f("svg", {
    class: B(e.classes),
    style: A(e.style),
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 1024 1024",
    role: "presentation"
  }, Vs, 6);
}
const Hs = /* @__PURE__ */ ve(As, [["render", Os]]);
F("eye");
const Rs = F("fabulous"), Fs = /* @__PURE__ */ g("path", {
  d: "M584.06 1024H318.577C144.118 1024 0 883.674 0 705.422s140.326-318.578 318.578-318.578v113.778c-113.778 0-204.8 91.022-204.8 204.8s91.022 204.8 204.8 204.8h265.481V1024zm56.888 0h-53.096c-208.593 0-379.26-170.667-379.26-383.052 0-83.437 26.549-163.081 75.852-231.348l3.793-3.793c15.17-22.755 30.34-60.681 45.511-121.363l7.585-34.133c7.586-18.963 15.17-41.718 18.963-68.267C386.844 22.756 470.281 0 519.586 0c117.57 0 178.251 106.193 178.251 212.385v7.585c0 7.586-3.793 18.963-3.793 37.926C876.09 257.896 1024 405.807 1024 587.852v53.096C1024 853.333 853.333 1024 640.948 1024zM519.585 113.778c-30.34 0-41.718 53.096-49.304 87.23-3.792 34.133-11.377 60.68-15.17 83.436l-7.585 34.134c-11.378 45.51-34.133 113.778-60.682 155.496l-7.585 3.793A269.274 269.274 0 0 0 322.37 644.74c0 147.91 121.363 269.274 269.274 269.274h53.097c147.91 0 269.274-121.363 269.274-269.274v-53.097c0-117.57-98.608-216.177-216.178-216.177h-56.889c-18.963-3.793-37.926-15.17-49.304-30.341-11.377-15.17-15.17-37.926-15.17-56.889 7.585-41.718 11.378-64.474 11.378-75.852v-3.792c-3.793 0-3.793-94.815-68.267-94.815z",
  fill: "currentColor",
  "fill-opacity": "0.9"
}, null, -1), Ws = [
  Fs
];
function Ys(e, t, n, o, l, s) {
  return c(), f("svg", {
    class: B(e.classes),
    style: A(e.style),
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 1061 1024",
    role: "presentation"
  }, Ws, 6);
}
const js = /* @__PURE__ */ ve(Rs, [["render", Ys]]), Ks = F("failure"), Us = /* @__PURE__ */ g("path", {
  d: "M512 1024C229.831 1024 0 794.169 0 512S229.831 0 512 0s512 229.831 512 512-229.831 512-512 512zm0-955.733C266.24 68.267 68.267 266.24 68.267 512S266.24 955.733 512 955.733 955.733 757.76 955.733 512 757.76 68.267 512 68.267zm111.502 282.169c13.654-13.654 34.134-13.654 47.787 0 11.378 11.377 13.653 31.857 2.275 45.51l-2.275 2.276-111.502 111.502 111.502 111.503c13.653 13.653 13.653 34.133 0 47.786-13.653 13.654-34.133 13.654-47.787 0L512 557.511 400.498 669.013c-11.378 11.378-31.858 13.654-45.511 2.276l-2.276-2.276c-11.378-11.377-13.653-31.857-2.275-45.51l2.275-2.276 111.502-111.503-111.502-111.502c-13.653-13.653-13.653-34.133 0-47.786s34.133-13.654 47.787 0L512 461.938l111.502-111.502z",
  fill: "currentColor",
  "fill-opacity": "0.9"
}, null, -1), Xs = [
  Us
];
function qs(e, t, n, o, l, s) {
  return c(), f("svg", {
    class: B(e.classes),
    style: A(e.style),
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 1024 1024",
    role: "presentation"
  }, Xs, 6);
}
const lo = /* @__PURE__ */ ve(Ks, [["render", qs]]);
F("find");
F("follow");
F("footprint");
F("github");
F("heart-fill-n");
F("heart-fill");
F("heart-fill1");
F("heart-fill2");
F("heart-fill3");
F("heart-n");
F("heart");
F("heart1");
F("heart2");
F("home");
F("horizontal-n");
F("horizontal");
const Zs = F("image-error"), Gs = /* @__PURE__ */ g("path", {
  d: "M696.43 465.25c40.61 0 73.53-32.72 73.53-73.09s-32.96-73.08-73.53-73.08-73.54 32.72-73.54 73.08 32.92 73.09 73.54 73.09zM535.74 650.62l-273.61-259.4a56.19 56.19 0 0 0-15.36 11.58l-114 119.63-6-222.77c-.73-26.82 20.84-49.41 47.67-50.14l201.77-5.44 47.34-50-250.43 6.75C119 202.33 76.33 247.17 77.78 301l7.32 271.4 4.5 166.78C91.06 793 136.05 835.47 190.2 834l176-4.75 12-.32 47.34-50 116.18-122.64z",
  fill: "currentColor",
  "fill-opacity": "0.9"
}, null, -1), Js = /* @__PURE__ */ g("path", {
  d: "m861.71 214.8-242.83-33.86-55.09 41.46L855 263a49.05 49.05 0 0 1 41.79 55.13l-54.33 389.59-120.87-159.05A59.86 59.86 0 0 0 638.06 537l-44 33.08 65.07 86.15L603.84 698l-79.57 60.1-54.92 41.48 34.17 4.76 270.73 37.76a97.55 97.55 0 0 0 109.88-79.6 22.37 22.37 0 0 0 .65-3.44l60.53-434.16c7.44-53.32-29.95-102.62-83.6-110.1z",
  fill: "currentColor",
  "fill-opacity": "0.9"
}, null, -1);
function Qs(e, t, n, o, l, s) {
  return c(), f("svg", {
    class: B(e.classes),
    style: A(e.style),
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 1024 1024",
    role: "presentation"
  }, [
    Gs,
    ge(","),
    Js
  ], 6);
}
const xs = /* @__PURE__ */ ve(Zs, [["render", Qs]]), ea = F("image"), ta = /* @__PURE__ */ g("path", {
  d: "M853.161 892.55H362.595l-209.433-.414a18.5 18.5 0 0 1-1.813-.092c-24.849-2.485-47.825-14.06-64.696-32.595-16.991-18.665-26.35-42.855-26.35-68.112V264.626c0-55.808 45.404-101.211 101.212-101.211H853.16c55.808 0 101.21 45.403 101.21 101.211v225.513c0 .275-.006.552-.018.826-.022.494-1.972 51.723 15.481 85.462 4.717 9.119 1.148 20.335-7.97 25.053-9.117 4.714-20.335 1.15-25.053-7.97-21.3-41.177-19.845-97.643-19.619-103.74V264.627c0-35.307-28.724-64.031-64.03-64.031H161.515c-35.308 0-64.032 28.724-64.032 64.031v526.711c0 32.755 24.321 59.958 56.718 63.62l208.431.412h490.53c35.306 0 64.03-28.725 64.03-64.032l-.382-93.677c-.105-1.75-1.587-19.548-19.55-42.5a9.548 9.548 0 0 1-.147-.19l-21.712-28.489-117.227-155.119c-.416-.55-38.995-50.852-86.272-45.534-38.335 4.315-75.955 45.164-108.79 118.132-17.615 39.141-34.65 68.269-52.082 89.046-17.607 20.986-35.68 33.52-55.251 38.317-43.423 10.638-81.05-18.995-120.887-50.373l-5.057-3.98c-46.555-36.578-68.75-28.224-158.33 59.602-7.33 7.188-19.1 7.071-26.289-.26-7.187-7.33-7.07-19.1.26-26.287 46.659-45.746 77.544-72.727 107.086-84.283 33.358-13.048 64.275-6.267 100.242 21.994l5.093 4.008c33.923 26.72 63.22 49.795 89.029 43.467 25.618-6.279 53.3-42.114 82.28-106.509 39.14-86.976 85.838-134.027 138.797-139.849 68.454-7.515 117.824 57.405 119.892 60.172l117.122 154.98 21.6 28.344c26.277 33.631 27.334 61.639 27.367 64.725l.001.128.384 94.06c.001 55.884-45.4 101.287-101.209 101.287z",
  fill: "currentColor",
  "fill-opacity": "0.9"
}, null, -1), na = /* @__PURE__ */ g("path", {
  d: "M312.328 446.968c-42.325 0-76.759-34.434-76.759-76.76s34.434-76.759 76.76-76.759 76.759 34.435 76.759 76.76-34.434 76.759-76.76 76.759zm0-116.34c-21.824 0-39.579 17.756-39.579 39.58s17.755 39.58 39.58 39.58 39.579-17.756 39.579-39.58-17.755-39.58-39.58-39.58z",
  fill: "currentColor",
  "fill-opacity": "0.9"
}, null, -1);
function oa(e, t, n, o, l, s) {
  return c(), f("svg", {
    class: B(e.classes),
    style: A(e.style),
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 1024 1024",
    role: "presentation"
  }, [
    ta,
    ge(","),
    na
  ], 6);
}
const la = /* @__PURE__ */ ve(ea, [["render", oa]]);
F("issue");
F("JD");
F("jdl");
F("JIMI40");
const sa = F("joy-smile"), aa = /* @__PURE__ */ g("path", {
  d: "M2185.74 479.429a117.992 117.992 0 1 0-162.829-170.852c-284.772 271.204-732.314 271.204-1017.087 0A118.05 118.05 0 0 0 842.996 479.43c375.98 358.045 966.705 358.045 1342.744 0",
  fill: "currentColor",
  "fill-opacity": "0.9"
}, null, -1), ra = [
  aa
];
function ia(e, t, n, o, l, s) {
  return c(), f("svg", {
    class: B(e.classes),
    style: A(e.style),
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 3072 1024",
    role: "presentation"
  }, ra, 6);
}
const ua = /* @__PURE__ */ ve(sa, [["render", ia]]), ca = F("left"), da = /* @__PURE__ */ g("path", {
  d: "M642.973 1005.542 321.912 587.098a123.278 123.278 0 0 1 0-150.17l321.06-418.443a47.182 47.182 0 0 1 74.83 57.422l-321.088 418.47a28.994 28.994 0 0 0 0 35.3l321.088 418.47a47.155 47.155 0 0 1-74.83 57.395",
  fill: "currentColor",
  "fill-opacity": "0.9"
}, null, -1), fa = [
  da
];
function pa(e, t, n, o, l, s) {
  return c(), f("svg", {
    class: B(e.classes),
    style: A(e.style),
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 1024 1024",
    role: "presentation"
  }, fa, 6);
}
const nn = /* @__PURE__ */ ve(ca, [["render", pa]]), ma = F("link"), ha = /* @__PURE__ */ g("path", {
  d: "M313.034 1004.045c-66.848 0-124.402-24.156-170.798-70.577l-40.854-40.829C54.96 846.218 28.966 783.097 30.83 714.411c3.702-66.85 31.56-131.808 79.819-180.12l137.4-137.373c14.86-14.861 40.855-14.861 55.69 0 14.86 14.861 16.725 38.99 0 55.69l-137.348 137.4a187.47 187.47 0 0 0-55.69 126.24c-1.864 46.422 14.835 89.115 46.396 120.675l40.855 40.855c31.56 31.56 74.253 48.286 120.674 46.421 46.421-1.838 92.843-22.291 126.24-55.69l137.4-137.4c14.862-14.86 40.856-14.86 55.69 0 14.862 14.862 14.862 40.856 0 55.69l-137.4 137.427c-48.285 48.259-113.27 76.117-180.118 79.82a5.645 5.645 0 0 0-7.405 0zm475.294-382.477c-11.133 0-18.563-3.702-27.832-12.997-14.86-14.861-14.86-40.855 0-55.69l115.082-115.108a187.47 187.47 0 0 0 55.716-126.267c1.838-46.395-14.861-89.114-46.421-120.674l-40.855-40.855c-64.985-64.959-176.364-61.257-246.915 9.294L478.266 278.108c-14.835 14.835-40.829 14.835-55.69 0-14.86-14.861-14.86-40.855 0-55.716l118.81-118.81C643.524 1.444 803.163-2.232 899.734 94.287l40.829 40.855c46.421 46.421 72.415 109.541 70.55 178.228-3.702 66.85-31.56 131.807-79.819 180.093L816.186 608.571c-7.43 7.43-18.563 11.133-27.858 12.997zm-332.327-1.864c-11.16 0-18.564-3.702-27.832-12.997-14.888-14.835-14.888-40.829 0-55.69l148.506-148.532c14.861-14.862 40.855-14.862 55.69 0 14.861 14.86 14.861 40.854 0 55.69L483.832 606.706c-7.404 7.43-18.563 11.159-27.831 12.997z",
  fill: "currentColor",
  "fill-opacity": "0.9"
}, null, -1), ga = [
  ha
];
function va(e, t, n, o, l, s) {
  return c(), f("svg", {
    class: B(e.classes),
    style: A(e.style),
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 1024 1024",
    role: "presentation"
  }, ga, 6);
}
const ya = /* @__PURE__ */ ve(ma, [["render", va]]), ba = F("loading"), $a = /* @__PURE__ */ g("path", {
  d: "M784 902.4c9.6 19.2 6.4 41.6-12.8 54.4-19.2 9.6-41.6 3.2-51.2-12.8-9.6-19.2-6.4-41.6 12.8-54.4 16-12.8 38.4-8 51.2 12.8zM550.4 984c0 22.4-16 38.4-38.4 38.4s-38.4-16-38.4-38.4v-24c0-22.4 19.2-38.4 41.6-38.4 19.2 0 35.2 16 38.4 38.4v25.6h-3.2zm-240-43.2c-9.6 19.2-35.2 25.6-54.4 16-19.2-9.6-25.6-35.2-16-51.2l28.8-51.2c9.6-19.2 35.2-25.6 54.4-16s25.6 35.2 12.8 54.4l-25.6 48zM121.6 784c-19.2 9.6-41.6 3.2-54.4-16-9.6-19.2-6.4-41.6 12.8-54.4l76.8-44.8c19.2-9.6 41.6-3.2 54.4 16 9.6 19.2 3.2 41.6-16 54.4L121.6 784zM38.4 552C16 552 0 536 0 513.6s16-38.4 38.4-38.4H160c22.4 0 38.4 19.2 38.4 38.4 0 22.4-16 38.4-38.4 38.4H38.4zm44.8-241.6c-19.2-9.6-25.6-35.2-16-51.2 9.6-19.2 35.2-25.6 54.4-16L256 320c19.2 9.6 25.6 35.2 16 54.4s-35.2 25.6-54.4 16l-134.4-80zm160-185.6 92.8 160c9.6 19.2 35.2 25.6 54.4 12.8s25.6-35.2 12.8-54.4l-92.8-160C297.6 64 275.2 60.8 256 70.4c-16 12.8-22.4 33.6-12.8 54.4zM473.6 40c0-22.4 16-38.4 38.4-38.4s38.4 19.2 38.4 38.4v184c0 22.4-19.2 38.4-38.4 38.4-22.4 0-38.4-19.2-38.4-38.4V40zm240 43.2c9.6-19.2 35.2-25.6 54.4-16 19.2 9.6 25.6 35.2 16 51.2l-92.8 160c-9.6 19.2-35.2 25.6-54.4 16-19.2-9.6-25.6-35.2-12.8-54.4l89.6-156.8zm188.8 160-160 92.8c-19.2 9.6-25.6 35.2-16 54.4 12.8 19.2 35.2 25.6 54.4 12.8l160-92.8c19.2-9.6 25.6-35.2 12.8-54.4-9.6-16-32-25.6-51.2-12.8zM985.6 472c22.4 0 38.4 16 38.4 38.4s-16 38.4-38.4 38.4H800c-22.4 0-38.4-19.2-38.4-38.4 0-22.4 19.2-38.4 38.4-38.4h185.6z",
  fill: "currentColor",
  "fill-opacity": "0.9"
}, null, -1), wa = [
  $a
];
function ka(e, t, n, o, l, s) {
  return c(), f("svg", {
    class: B(e.classes),
    style: A(e.style),
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 1024 1024",
    role: "presentation"
  }, wa, 6);
}
const at = /* @__PURE__ */ ve(ba, [["render", ka]]), Ca = F("loading1"), Sa = /* @__PURE__ */ g("path", {
  d: "M520.665 64.564a29.244 29.244 0 0 0-7.071-.894c-16.211 0-29.35 13.14-29.35 29.35 0 15.83 12.538 28.696 28.223 29.293v.073c.375 0 .751-.014 1.127-.014 216.493 0 389.629 173.942 389.629 390.433 0 216.496-173.136 388.827-389.63 388.827s-389.63-172.333-389.63-388.829c0-.27.01-.536.01-.804h-.01c0-16.209-13.141-29.35-29.35-29.35s-29.35 13.139-29.35 29.35c0 .055.007.11.007.164-.001.214-.007.425-.007.64 0 247.609 200.722 448.331 448.33 448.331 247.607 0 448.33-200.722 448.33-448.33-.002-245.242-196.917-444.456-441.258-448.24z",
  fill: "currentColor",
  "fill-opacity": "0.9"
}, null, -1), Ta = [
  Sa
];
function Na(e, t, n, o, l, s) {
  return c(), f("svg", {
    class: B(e.classes),
    style: A(e.style),
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 1024 1024",
    role: "presentation"
  }, Ta, 6);
}
const _a = /* @__PURE__ */ ve(Ca, [["render", Na]]), Da = F("location"), Ia = /* @__PURE__ */ g("path", {
  d: "M512 971.487C259.938 971.487 52.513 764.062 52.513 512S259.938 52.513 512 52.513 971.487 259.938 971.487 512 764.062 971.487 512 971.487zm0-840.205c-210.051 0-380.718 170.667-380.718 380.718S301.95 892.718 512 892.718 892.718 722.05 892.718 512 722.05 131.282 512 131.282zm0 577.641c-107.651 0-196.923-89.272-196.923-196.923S404.349 315.077 512 315.077 708.923 404.349 708.923 512 619.651 708.923 512 708.923zm0-315.077c-65.641 0-118.154 52.513-118.154 118.154S446.36 630.154 512 630.154 630.154 577.64 630.154 512 577.64 393.846 512 393.846zm0-210.051c-21.005 0-39.385-18.38-39.385-39.385V39.385C472.615 18.379 490.995 0 512 0s39.385 18.38 39.385 39.385V144.41c0 21.005-18.38 39.385-39.385 39.385zM512 1024c-21.005 0-39.385-18.38-39.385-39.385V879.59c0-21.005 18.38-39.385 39.385-39.385s39.385 18.38 39.385 39.385v105.025c0 21.006-18.38 39.385-39.385 39.385zm472.615-472.615H879.59c-21.005 0-39.385-18.38-39.385-39.385s18.38-39.385 39.385-39.385h105.025c21.006 0 39.385 18.38 39.385 39.385s-18.38 39.385-39.385 39.385zm-840.205 0H39.385C18.379 551.385 0 533.005 0 512s18.38-39.385 39.385-39.385H144.41c21.005 0 39.385 18.38 39.385 39.385s-18.38 39.385-39.385 39.385z",
  fill: "currentColor",
  "fill-opacity": "0.9"
}, null, -1), Ba = [
  Ia
];
function Ma(e, t, n, o, l, s) {
  return c(), f("svg", {
    class: B(e.classes),
    style: A(e.style),
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 1024 1024",
    role: "presentation"
  }, Ba, 6);
}
const La = /* @__PURE__ */ ve(Da, [["render", Ma]]), Pa = F("location2"), Ea = /* @__PURE__ */ g("path", {
  d: "m530.286 1005.714-25.6-10.971c-36.572-14.629-58.515-25.6-73.143-36.572-102.4-84.114-164.572-135.314-193.829-171.885-43.885-51.2-76.8-91.429-106.057-142.629C95.086 577.83 76.8 504.686 76.8 431.543c0-117.029 43.886-226.743 128-307.2C285.257 43.886 394.971 0 512 0s226.743 43.886 310.857 128c84.114 80.457 128 190.171 128 307.2 0 73.143-18.286 146.286-54.857 212.114-25.6 43.886-58.514 91.429-106.057 142.629-29.257 32.914-87.772 84.114-197.486 171.886 0 0-7.314 7.314-18.286 10.971l-43.885 32.914zM497.37 874.057s3.658 3.657 14.629 7.314c3.657-3.657 7.314-3.657 10.971-7.314C621.714 797.257 683.886 742.4 705.83 716.8c40.228-47.543 69.485-87.771 91.428-128 25.6-47.543 40.229-102.4 40.229-157.257 0-87.772-32.915-168.229-95.086-230.4-58.514-58.514-142.629-91.429-230.4-91.429S340.114 142.63 277.943 204.8c-62.172 62.171-95.086 142.629-95.086 230.4 0 54.857 14.629 109.714 40.229 157.257 25.6 43.886 54.857 80.457 95.085 124.343 25.6 29.257 84.115 80.457 179.2 157.257zm18.286-248.686c-102.4 0-182.857-80.457-182.857-182.857s80.457-182.857 182.857-182.857 182.857 80.457 182.857 182.857-80.457 182.857-182.857 182.857zm0-256c-40.228 0-73.143 32.915-73.143 73.143s32.915 73.143 73.143 73.143 73.143-32.914 73.143-73.143-32.914-73.143-73.143-73.143z",
  fill: "currentColor",
  "fill-opacity": "0.9"
}, null, -1), Aa = [
  Ea
];
function za(e, t, n, o, l, s) {
  return c(), f("svg", {
    class: B(e.classes),
    style: A(e.style),
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 1024 1024",
    role: "presentation"
  }, Aa, 6);
}
const Va = /* @__PURE__ */ ve(Pa, [["render", za]]);
F("locationg3");
F("lower");
F("marshalling");
const Oa = F("mask-close"), Ha = /* @__PURE__ */ g("path", {
  d: "M512 14.897C238.594 14.897 14.897 238.594 14.897 512S238.594 1009.103 512 1009.103 1009.103 785.406 1009.103 512 785.406 14.897 512 14.897zm207.126 646.234c16.57 16.57 16.57 41.425 0 57.995s-41.425 16.57-57.995 0L512 569.996l-149.13 149.13c-16.57 16.57-41.426 16.57-57.996 0s-16.57-41.425 0-57.995L454.004 512l-149.13-149.13c-16.57-16.57-16.57-41.426 0-57.996s41.425-16.57 57.995 0L512 454.004l149.13-149.13c16.57-16.57 41.426-16.57 57.996 0s16.57 41.425 0 57.995L569.996 512l149.13 149.13z",
  fill: "currentColor",
  "fill-opacity": "0.9"
}, null, -1), Ra = [
  Ha
];
function Fa(e, t, n, o, l, s) {
  return c(), f("svg", {
    class: B(e.classes),
    style: A(e.style),
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 1024 1024",
    role: "presentation"
  }, Ra, 6);
}
const Wa = /* @__PURE__ */ ve(Oa, [["render", Fa]]);
F("message");
F("microphone");
const Ya = F("minus"), ja = /* @__PURE__ */ g("path", {
  d: "M299.52 460.8h409.6c28.16 0 51.2 23.04 51.2 51.2s-23.04 51.2-51.2 51.2h-409.6c-28.16 0-51.2-23.04-51.2-51.2s23.04-51.2 51.2-51.2z",
  fill: "currentColor",
  "fill-opacity": "0.9"
}, null, -1), Ka = [
  ja
];
function Ua(e, t, n, o, l, s) {
  return c(), f("svg", {
    class: B(e.classes),
    style: A(e.style),
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 1024 1024",
    role: "presentation"
  }, Ka, 6);
}
const Xa = /* @__PURE__ */ ve(Ya, [["render", Ua]]);
F("more-s");
const qa = F("more-x"), Za = /* @__PURE__ */ g("path", {
  d: "M937.115 428.218c-43.442 0-80.679 37.237-80.679 80.679s37.237 80.679 80.68 80.679c43.442 0 80.678-37.237 80.678-80.679s-34.133-80.679-80.679-80.679m-428.218-52.751c-74.473 0-133.43 58.957-133.43 133.43s58.957 133.43 133.43 133.43 133.43-58.957 133.43-133.43-58.957-133.43-133.43-133.43M83.782 428.218c-43.443 0-80.679 37.237-80.679 80.679s34.133 80.679 80.679 80.679 80.679-37.237 80.679-80.679-37.237-80.679-80.68-80.679",
  fill: "currentColor",
  "fill-opacity": "0.9"
}, null, -1), Ga = [
  Za
];
function Ja(e, t, n, o, l, s) {
  return c(), f("svg", {
    class: B(e.classes),
    style: A(e.style),
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 1024 1024",
    role: "presentation"
  }, Ga, 6);
}
const Qa = /* @__PURE__ */ ve(qa, [["render", Ja]]);
F("more");
F("my");
F("my2");
const xa = F("notice"), er = /* @__PURE__ */ g("path", {
  d: "M940.873 819.2h-85.334V430.933c0-192-153.6-345.6-341.333-345.6s-341.333 153.6-341.333 345.6V819.2H87.539V430.933C87.54 192 279.54 0 514.206 0s426.667 192 426.667 430.933V819.2zM514.633 1024c-68.267 0-132.267-29.867-174.934-85.333-17.066-17.067-12.8-42.667 4.267-59.734 17.067-12.8 46.933-12.8 59.733 8.534 29.867 34.133 68.267 51.2 110.934 51.2s81.066-17.067 106.666-51.2c12.8-17.067 42.667-21.334 59.734-8.534 17.066 12.8 21.333 42.667 8.533 59.734C646.899 994.133 582.899 1024 514.633 1024zm469.333-162.133h-12.8c-294.4-89.6-618.667-89.6-913.067 0-21.333 4.266-46.933-8.534-55.466-29.867-8.534-21.333 4.266-46.933 29.866-51.2 311.467-93.867 652.8-89.6 964.267 0 21.333 8.533 34.133 29.867 29.867 51.2-8.534 21.333-25.6 29.867-42.667 29.867z",
  fill: "currentColor",
  "fill-opacity": "0.9"
}, null, -1), tr = [
  er
];
function nr(e, t, n, o, l, s) {
  return c(), f("svg", {
    class: B(e.classes),
    style: A(e.style),
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 1027 1024",
    role: "presentation"
  }, tr, 6);
}
const or = /* @__PURE__ */ ve(xa, [["render", nr]]);
F("order");
F("people");
const lr = F("photograph"), sr = /* @__PURE__ */ g("path", {
  d: "M570.514 789.943c-119.954 0-219.428-99.474-219.428-219.429s99.474-219.428 219.428-219.428 219.429 99.474 219.429 219.428-99.474 219.429-219.429 219.429zm0-351.086c-73.143 0-131.657 58.514-131.657 131.657s58.514 131.657 131.657 131.657 131.657-58.514 131.657-131.657-58.514-131.657-131.657-131.657zM877.714 1024h-614.4C117.03 1024 0 906.971 0 760.686V380.343c0-146.286 117.029-263.314 263.314-263.314h32.183c0-2.926 2.926-8.778 2.926-11.703C315.977 43.886 374.49 0 438.857 0h263.314c70.218 0 128.732 49.737 143.36 117.029h32.183c146.286 0 263.315 117.028 263.315 263.314v380.343C1141.029 906.97 1024 1024 877.714 1024zm-614.4-819.2c-96.548 0-175.543 78.994-175.543 175.543v380.343c0 96.548 78.995 175.543 175.543 175.543h614.4c96.549 0 175.543-78.995 175.543-175.543V380.343c0-96.549-78.994-175.543-175.543-175.543H819.2c-32.183 0-58.514-26.331-58.514-58.514S734.354 87.77 702.17 87.77H438.857c-26.331 0-49.737 17.555-55.588 40.96-2.926 5.852-2.926 11.703-2.926 17.555 0 32.183-26.332 58.514-58.514 58.514h-58.515zm-87.771 160.914a73.143 73.143 0 1 0 146.286 0 73.143 73.143 0 1 0-146.286 0Z",
  fill: "currentColor",
  "fill-opacity": "0.9"
}, null, -1), ar = [
  sr
];
function rr(e, t, n, o, l, s) {
  return c(), f("svg", {
    class: B(e.classes),
    style: A(e.style),
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 1141 1024",
    role: "presentation"
  }, ar, 6);
}
const ir = /* @__PURE__ */ ve(lr, [["render", rr]]);
F("play-circle-fill");
F("play-double-back");
F("play-double-forward");
F("play-start");
F("play-stop");
const ur = F("plus"), cr = /* @__PURE__ */ g("path", {
  d: "M345.6 460.8h409.6q51.2 0 51.2 51.2t-51.2 51.2H345.6q-51.2 0-51.2-51.2t51.2-51.2zM550.4 256q51.2 0 51.2 51.2v409.6q0 51.2-51.2 51.2t-51.2-51.2V307.2q0-51.2 51.2-51.2z",
  fill: "currentColor",
  "fill-opacity": "0.9"
}, null, -1), dr = [
  cr
];
function fr(e, t, n, o, l, s) {
  return c(), f("svg", {
    class: B(e.classes),
    style: A(e.style),
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 1024 1024",
    role: "presentation"
  }, dr, 6);
}
const pr = /* @__PURE__ */ ve(ur, [["render", fr]]);
F("poweroff-circle-fill");
const mr = F("rect-down"), hr = /* @__PURE__ */ g("path", {
  d: "M515.072 778.24c-14.336 0-28.672-5.632-39.936-16.384L69.12 356.864c-22.016-22.016-22.016-57.856 0-79.872s57.856-22.016 79.872 0L515.584 642.56 880.64 275.968c22.016-22.016 57.856-22.016 79.872 0s22.016 57.856 0 79.872L555.008 762.368c-10.752 10.752-25.6 15.872-39.936 15.872z",
  fill: "currentColor",
  "fill-opacity": "0.9"
}, null, -1), gr = [
  hr
];
function vr(e, t, n, o, l, s) {
  return c(), f("svg", {
    class: B(e.classes),
    style: A(e.style),
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 1024 1024",
    role: "presentation"
  }, gr, 6);
}
const yr = /* @__PURE__ */ ve(mr, [["render", vr]]);
F("rect-left");
F("rect-right");
const br = F("rect-up"), $r = /* @__PURE__ */ g("path", {
  d: "M920.576 778.24c-14.336 0-28.672-5.632-39.936-16.384L515.072 395.264 148.48 760.832c-22.016 22.016-57.856 22.016-79.872 0s-22.016-57.856 0-79.872l406.528-405.504c22.016-22.016 57.856-22.016 79.872 0l405.504 406.528c22.016 22.016 22.016 57.856 0 79.872-11.264 11.264-25.6 16.384-39.936 16.384z",
  fill: "currentColor",
  "fill-opacity": "0.9"
}, null, -1), wr = [
  $r
];
function kr(e, t, n, o, l, s) {
  return c(), f("svg", {
    class: B(e.classes),
    style: A(e.style),
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 1024 1024",
    role: "presentation"
  }, wr, 6);
}
const Cr = /* @__PURE__ */ ve(br, [["render", kr]]);
F("refresh");
const Sr = F("refresh2"), Tr = /* @__PURE__ */ g("path", {
  d: "M771.938 315.077h199.55L958.358 469.99 758.81 364.964c-13.128-7.877-18.38-23.63-10.502-36.759 2.625-7.877 13.128-13.128 23.63-13.128zm-535.63 393.846H44.636L57.764 554.01l191.672 105.026c13.128 7.877 18.38 23.63 10.502 36.759-5.25 7.877-15.753 13.128-23.63 13.128zM509.374 1024C257.313 1024 44.636 845.456 5.251 596.02 0 575.016 15.754 556.637 36.76 551.386c21.005-2.626 42.01 10.502 44.636 31.507 34.133 210.052 215.302 362.339 427.98 362.339 191.671 0 362.338-128.657 417.476-312.452 5.252-21.005 28.882-34.133 49.887-26.256 21.006 5.251 34.134 28.882 26.257 49.887C937.354 871.713 735.179 1024 509.375 1024zm467.364-551.385c-18.379 0-36.759-13.128-39.384-34.133C903.22 231.056 722.05 78.77 509.374 78.77c-191.671 0-362.338 128.657-414.85 312.452-5.252 21.005-28.883 34.133-49.888 26.256-21.005-5.251-34.133-28.882-26.257-49.887C81.395 152.287 283.57 0 509.374 0c252.062 0 464.739 178.544 504.123 427.98 2.626 21.005-10.502 42.01-31.507 44.635h-5.252z",
  fill: "currentColor",
  "fill-opacity": "0.9"
}, null, -1), Nr = [
  Tr
];
function _r(e, t, n, o, l, s) {
  return c(), f("svg", {
    class: B(e.classes),
    style: A(e.style),
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 1024 1024",
    role: "presentation"
  }, Nr, 6);
}
const Dr = /* @__PURE__ */ ve(Sr, [["render", _r]]), Ir = F("retweet"), Br = /* @__PURE__ */ g("path", {
  d: "M136 552h63.6c4.4 0 8-3.6 8-8V288.7h528.6v72.6c0 1.9.6 3.7 1.8 5.2 2.9 3.6 8.1 4.3 11.7 1.4L893 255.4c4.3-5 3.6-10.3 0-13.2L749.7 129.8c-1.5-1.2-3.3-1.8-5.2-1.8-4.6 0-8.4 3.8-8.4 8.4V209H199.7c-39.5 0-71.7 32.2-71.7 71.8V544c0 4.4 3.6 8 8 8zm752-80h-63.6c-4.4 0-8 3.6-8 8v255.3H287.8v-72.6c0-1.9-.6-3.7-1.8-5.2-2.9-3.6-8.1-4.3-11.7-1.4L131 768.6c-4.3 5-3.6 10.3 0 13.2l143.3 112.4c1.5 1.2 3.3 1.8 5.2 1.8 4.6 0 8.4-3.8 8.4-8.4V815h536.6c39.5 0 71.7-32.2 71.7-71.8V480c-.2-4.4-3.8-8-8.2-8z",
  fill: "currentColor",
  "fill-opacity": "0.9"
}, null, -1), Mr = [
  Br
];
function Lr(e, t, n, o, l, s) {
  return c(), f("svg", {
    class: B(e.classes),
    style: A(e.style),
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 1024 1024",
    role: "presentation"
  }, Mr, 6);
}
const Pr = /* @__PURE__ */ ve(Ir, [["render", Lr]]), Er = F("right"), Ar = /* @__PURE__ */ g("path", {
  d: "M381.262 1005.566c-16.132 21.51-45.708 24.198-67.217 8.066-21.51-16.132-24.198-45.708-8.066-67.217C413.526 806.604 518.384 666.792 625.932 529.67c8.066-10.755 8.066-24.198 0-34.953C518.384 354.906 413.526 215.094 305.979 77.972c-16.132-21.51-10.755-51.085 8.066-67.217C335.555-5.377 365.13 0 381.262 18.82c107.547 142.5 212.405 282.311 319.953 419.434 34.952 43.019 34.952 104.858 0 150.566-107.548 139.811-212.406 279.622-319.953 416.745",
  fill: "currentColor",
  "fill-opacity": "0.9"
}, null, -1), zr = [
  Ar
];
function Vr(e, t, n, o, l, s) {
  return c(), f("svg", {
    class: B(e.classes),
    style: A(e.style),
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 1024 1024",
    role: "presentation"
  }, zr, 6);
}
const on = /* @__PURE__ */ ve(Er, [["render", Vr]]);
F("s-follow");
F("scan");
F("scan2");
F("screen-little");
F("search");
F("search2");
const Or = F("service"), Hr = /* @__PURE__ */ g("path", {
  d: "M1024 657.723H905.846v-126.03c0-228.431-177.23-413.54-393.846-413.54s-393.846 185.109-393.846 413.54v126.03H0v-126.03C0 236.307 228.43 0 512 0s512 236.308 512 531.692v126.031zM196.923 866.462C86.646 866.462 0 779.815 0 669.538s86.646-196.923 196.923-196.923 196.923 86.647 196.923 196.923S307.2 866.462 196.923 866.462zm0-275.693c-43.323 0-78.77 35.446-78.77 78.77s35.447 78.769 78.77 78.769 78.77-35.446 78.77-78.77-35.447-78.769-78.77-78.769zm630.154 275.693c-110.277 0-196.923-86.647-196.923-196.924S716.8 472.615 827.077 472.615 1024 559.262 1024 669.538s-86.646 196.924-196.923 196.924zm0-275.693c-43.323 0-78.77 35.446-78.77 78.77s35.447 78.769 78.77 78.769 78.77-35.446 78.77-78.77-35.447-78.769-78.77-78.769zm-149.662 429.293c-23.63 0-47.261-15.754-55.138-43.324-7.877-31.507 7.877-63.015 39.385-74.83 102.4-31.508 189.046-102.4 236.307-196.923 15.754-27.57 51.2-39.385 78.77-23.631s39.384 51.2 23.63 78.77c-63.015 122.091-177.23 216.614-307.2 256-3.938 3.938-11.815 3.938-15.754 3.938z",
  fill: "currentColor",
  "fill-opacity": "0.9"
}, null, -1), Rr = [
  Hr
];
function Fr(e, t, n, o, l, s) {
  return c(), f("svg", {
    class: B(e.classes),
    style: A(e.style),
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 1024 1024",
    role: "presentation"
  }, Rr, 6);
}
const Wr = /* @__PURE__ */ ve(Or, [["render", Fr]]);
F("setting");
F("share-n");
F("share");
F("share1");
F("shop");
F("shop3");
const Yr = F("star-fill-n"), jr = /* @__PURE__ */ g("path", {
  d: "M1047.135 361.244 722.87 312.89 577.802 22.756c-2.844-8.534-11.378-14.223-19.911-17.067-19.911-8.533-45.511-2.845-54.045 17.067L358.78 312.889 34.513 358.4c-8.533 0-17.067 5.689-22.755 11.378-17.067 17.066-14.223 42.666 0 56.889l233.244 227.555-54.044 321.422c-2.845 8.534 0 17.067 2.844 25.6 11.378 19.912 34.133 28.445 54.044 17.067L537.98 867.556l290.133 150.755c8.533 2.845 17.067 5.689 25.6 2.845 22.756-2.845 36.978-25.6 34.133-45.512l-54.044-321.422 233.244-227.555c5.69-5.69 11.378-14.223 11.378-22.756 5.69-19.911-8.533-39.822-31.289-42.667z",
  fill: "currentColor",
  "fill-opacity": "0.9"
}, null, -1), Kr = [
  jr
];
function Ur(e, t, n, o, l, s) {
  return c(), f("svg", {
    class: B(e.classes),
    style: A(e.style),
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 1081 1024",
    role: "presentation"
  }, Kr, 6);
}
const Xr = /* @__PURE__ */ ve(Yr, [["render", Ur]]);
F("star-fill");
F("star-fill1");
F("star-fill2");
F("star-n");
F("star");
F("star1");
F("star11");
F("star2");
const qr = F("success"), Zr = /* @__PURE__ */ g("path", {
  d: "M762.311 391.396C655.36 466.489 566.613 552.96 491.52 659.91c-20.48 27.307-61.44 27.307-79.644-2.275-34.134-52.338-72.818-91.023-125.156-125.156-25.031-15.929-9.102-54.613 20.48-50.062 56.889 11.378 100.124 34.133 143.36 72.818 77.369-93.298 175.218-166.116 286.72-213.903 27.307-9.102 50.062 31.858 25.031 50.063M512 1024C229.831 1024 0 794.169 0 512S229.831 0 512 0s512 229.831 512 512-229.831 512-512 512zm0-955.733C266.24 68.267 68.267 266.24 68.267 512S266.24 955.733 512 955.733 955.733 757.76 955.733 512 757.76 68.267 512 68.267z",
  fill: "currentColor",
  "fill-opacity": "0.9"
}, null, -1), Gr = [
  Zr
];
function Jr(e, t, n, o, l, s) {
  return c(), f("svg", {
    class: B(e.classes),
    style: A(e.style),
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 1024 1024",
    role: "presentation"
  }, Gr, 6);
}
const Qr = /* @__PURE__ */ ve(qr, [["render", Jr]]), xr = F("tips"), ei = /* @__PURE__ */ g("path", {
  d: "M512 1024C230.4 1024 0 793.6 0 512S230.4 0 512 0s512 230.4 512 512-230.4 512-512 512zm0-938.667c-234.667 0-426.667 192-426.667 426.667s192 426.667 426.667 426.667 426.667-192 426.667-426.667S746.667 85.333 512 85.333zM448 320a64 64 0 1 0 128 0 64 64 0 1 0-128 0Zm-17.067 149.333h51.2c12.8 0 21.334 8.534 21.334 21.334v8.533c0 12.8-8.534 21.333-21.334 21.333h-51.2c-12.8 0-25.6-12.8-25.6-25.6s12.8-25.6 25.6-25.6zm51.2 0H524.8c25.6 0 51.2 21.334 51.2 51.2v8.534L537.6 755.2c0 8.533-8.533 17.067-21.333 17.067H473.6c-25.6 0-51.2-21.334-51.2-51.2v-8.534L460.8 486.4c4.267-8.533 12.8-17.067 21.333-17.067zm8.534 251.734h76.8c12.8 0 25.6 12.8 25.6 25.6s-12.8 25.6-25.6 25.6h-76.8c-12.8 0-21.334-8.534-21.334-21.334v-12.8c4.267-12.8 12.8-17.066 21.334-17.066z",
  fill: "currentColor",
  "fill-opacity": "0.9"
}, null, -1), ti = [
  ei
];
function ni(e, t, n, o, l, s) {
  return c(), f("svg", {
    class: B(e.classes),
    style: A(e.style),
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 1024 1024",
    role: "presentation"
  }, ti, 6);
}
const so = /* @__PURE__ */ ve(xr, [["render", ni]]), oi = F("top"), li = /* @__PURE__ */ g("path", {
  d: "M136.533 540.444c-11.377 0-25.6-5.688-34.133-17.066-14.222-19.911-11.378-45.511 8.533-59.734L477.867 179.2c19.91-14.222 45.51-11.378 59.733 8.533s11.378 45.511-8.533 59.734L162.133 531.91c-5.689 5.689-14.222 8.533-25.6 8.533zm745.245 0c-8.534 0-17.067-2.844-25.6-8.533L489.244 247.467c-19.91-14.223-22.755-42.667-8.533-59.734 14.222-19.91 42.667-22.755 59.733-8.533l366.934 284.444c19.91 14.223 22.755 42.667 8.533 59.734-8.533 11.378-19.911 17.066-34.133 17.066zM512 1024c-22.756 0-42.667-19.911-42.667-42.667v-768c0-22.755 19.911-42.666 42.667-42.666s42.667 19.91 42.667 42.666v768c0 22.756-19.911 42.667-42.667 42.667zM884.622 85.333h-742.4c-22.755 0-42.666-19.91-42.666-42.666S119.466 0 142.222 0h742.4c22.756 0 42.667 19.911 42.667 42.667s-19.911 42.666-42.667 42.666z",
  fill: "currentColor",
  "fill-opacity": "0.9"
}, null, -1), si = [
  li
];
function ai(e, t, n, o, l, s) {
  return c(), f("svg", {
    class: B(e.classes),
    style: A(e.style),
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 1024 1024",
    role: "presentation"
  }, si, 6);
}
const ri = /* @__PURE__ */ ve(oi, [["render", ai]]), ii = F("triangle-down"), ui = /* @__PURE__ */ g("path", {
  d: "m573.056 752 308.8-404.608A76.8 76.8 0 0 0 820.736 224H203.232a76.8 76.8 0 0 0-61.056 123.392L450.976 752a76.8 76.8 0 0 0 122.08 0z",
  fill: "currentColor",
  "fill-opacity": "0.9"
}, null, -1), ci = [
  ui
];
function di(e, t, n, o, l, s) {
  return c(), f("svg", {
    class: B(e.classes),
    style: A(e.style),
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 1024 1024",
    role: "presentation"
  }, ci, 6);
}
const fi = /* @__PURE__ */ ve(ii, [["render", di]]), pi = F("triangle-up"), mi = /* @__PURE__ */ g("path", {
  d: "m573.056 272 308.8 404.608A76.8 76.8 0 0 1 820.736 800H203.232a76.8 76.8 0 0 1-61.056-123.392L450.976 272a76.8 76.8 0 0 1 122.08 0z",
  fill: "currentColor",
  "fill-opacity": "0.9"
}, null, -1), hi = [
  mi
];
function gi(e, t, n, o, l, s) {
  return c(), f("svg", {
    class: B(e.classes),
    style: A(e.style),
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 1024 1024",
    role: "presentation"
  }, hi, 6);
}
const vi = /* @__PURE__ */ ve(pi, [["render", gi]]);
F("uploader");
F("voice");
const yi = { class: "nut-button__wrap" }, qe = /* @__PURE__ */ ye({
  name: "NutButton",
  __name: "button",
  props: {
    color: { default: "" },
    shape: { default: "round" },
    plain: { type: Boolean, default: !1 },
    loading: { type: Boolean, default: !1 },
    disabled: { type: Boolean, default: !1 },
    type: { default: "default" },
    size: { default: "normal" },
    block: { type: Boolean, default: !1 }
  },
  emits: ["click"],
  setup(e, { emit: t }) {
    const n = e, o = t, l = (r) => {
      !n.loading && !n.disabled && o("click", r);
    }, s = T(() => {
      const r = "nut-button";
      return {
        [r]: !0,
        [`${r}--${n.type}`]: n.type,
        [`${r}--${n.size}`]: n.size,
        [`${r}--${n.shape}`]: n.shape,
        [`${r}--plain`]: n.plain,
        [`${r}--block`]: n.block,
        [`${r}--disabled`]: n.disabled,
        [`${r}--loading`]: n.loading
      };
    }), a = T(() => {
      let r = {};
      return n.color && (r = {
        color: n.plain ? n.color : "#fff",
        background: n.plain ? "#fff" : `border-box ${n.color}`
      }, n.color.includes("gradient") ? r.borderColor = "transparent" : r.borderColor = n.color), r;
    });
    return (r, i) => (c(), f("view", {
      class: B(s.value),
      style: A(a.value),
      onClick: l
    }, [
      g("view", yi, [
        r.loading ? (c(), G(pe(at), {
          key: 0,
          class: "nut-icon-loading"
        })) : N("", !0),
        r.$slots.icon && !r.loading ? _(r.$slots, "icon", { key: 1 }) : N("", !0),
        r.$slots.default ? (c(), f("view", {
          key: 2,
          class: B({ "nut-button__text": r.$slots.icon || r.loading })
        }, [
          _(r.$slots, "default")
        ], 2)) : N("", !0)
      ])
    ], 6));
  }
}), kt = (e) => {
  const t = me([]), n = me([]);
  return {
    children: t,
    linkChildren: (l) => {
      Oe(e, q({
        unlink: (r) => {
          if (r.proxy) {
            const i = n.indexOf(r);
            i > -1 && n.splice(i, 1);
            const p = t.indexOf(r.proxy);
            i > -1 && t.splice(p, 1);
          }
        },
        link: (r) => {
          r.proxy && (n.push(r), t.push(r.proxy));
        },
        children: t,
        internalChildren: n
      }, l));
    }
  };
}, Tt = (e) => {
  const t = Ae(e, null);
  if (t) {
    const n = Xe(), { link: o, unlink: l, internalChildren: s } = t;
    o(n), Ue(() => {
      l(n);
    });
    const a = T(() => s.indexOf(n));
    return { parent: t, index: a };
  }
  return {
    parent: t,
    index: T(() => -1)
  };
}, we = (e) => {
  const t = e;
  return t.install = (n) => {
    t.name && n.component(t.name, t);
  }, t;
};
we(qe);
function ln() {
  return Xe().proxy.$router || null;
}
const Be = (e) => {
  if (e !== void 0)
    return isNaN(Number(e)) ? String(e) : `${e}px`;
}, bi = {
  key: 0,
  class: "nut-cell__icon"
}, $i = {
  key: 1,
  class: "nut-cell__title"
}, wi = { class: "title" }, ki = { class: "nut-cell__title-desc" }, sn = /* @__PURE__ */ ye({
  name: "NutCell",
  __name: "cell",
  props: {
    title: { default: "" },
    subTitle: { default: "" },
    desc: { default: "" },
    descTextAlign: { default: "right" },
    isLink: { type: Boolean, default: !1 },
    roundRadius: { default: "" },
    center: { type: Boolean, default: !1 },
    size: { default: "normal" },
    to: {},
    replace: { type: Boolean, default: !1 },
    url: { default: "" }
  },
  emits: ["click"],
  setup(e, { emit: t }) {
    const n = e, o = t, l = T(() => {
      const p = "nut-cell";
      return {
        [p]: !0,
        [`${p}--clickable`]: n.isLink || n.to,
        [`${p}--center`]: n.center,
        [`${p}--large`]: n.size === "large"
      };
    }), s = ln(), a = T(() => ({
      borderRadius: Be(n.roundRadius)
    })), r = T(() => ({
      textAlign: n.descTextAlign
    })), i = (p) => {
      o("click", p), n.to && s ? s[n.replace ? "replace" : "push"](n.to) : n.url && (n.replace ? location.replace(n.url) : location.href = n.url);
    };
    return (p, d) => (c(), f("view", {
      class: B(l.value),
      style: A(a.value),
      onClick: i
    }, [
      _(p.$slots, "default", {}, () => [
        p.$slots.icon ? (c(), f("view", bi, [
          _(p.$slots, "icon")
        ])) : N("", !0),
        p.title || p.subTitle || p.$slots.title ? (c(), f("view", $i, [
          p.subTitle ? (c(), f(J, { key: 0 }, [
            _(p.$slots, "title", {}, () => [
              g("view", wi, E(p.title), 1)
            ]),
            g("view", ki, E(p.subTitle), 1)
          ], 64)) : _(p.$slots, "title", { key: 1 }, () => [
            ge(E(p.title), 1)
          ])
        ])) : N("", !0),
        p.desc || p.$slots.desc ? (c(), f("view", {
          key: 2,
          class: B(["nut-cell__value", { "nut-cell__value--alone": !p.title && !p.subTitle && !p.$slots.title }]),
          style: A(r.value)
        }, [
          _(p.$slots, "desc", {}, () => [
            ge(E(p.desc), 1)
          ])
        ], 6)) : N("", !0),
        _(p.$slots, "link", {}, () => [
          p.isLink || p.to ? (c(), G(pe(on), {
            key: 0,
            class: "nut-cell__link"
          })) : N("", !0)
        ])
      ])
    ], 6));
  }
});
we(sn);
const Ci = { class: "nut-cell-group" }, Si = {
  key: 1,
  class: "nut-cell-group__title"
}, Ti = {
  key: 3,
  class: "nut-cell-group__desc"
}, Ni = { class: "nut-cell-group__wrap" }, an = /* @__PURE__ */ ye({
  name: "NutCellGroup",
  __name: "cell-group",
  props: {
    title: { default: "" },
    desc: { default: "" }
  },
  setup(e) {
    return (t, n) => (c(), f("view", Ci, [
      t.$slots.title ? _(t.$slots, "title", { key: 0 }) : t.title ? (c(), f("view", Si, E(t.title), 1)) : N("", !0),
      t.$slots.desc ? _(t.$slots, "desc", { key: 2 }) : t.desc ? (c(), f("view", Ti, E(t.desc), 1)) : N("", !0),
      g("view", Ni, [
        _(t.$slots, "default")
      ])
    ]));
  }
});
we(an);
const _i = (e) => e.replace(/-./g, (t) => t[1].toUpperCase());
function x(e) {
  return {
    componentName: "nut-" + e,
    create: function(n) {
      return n.name = "Nut" + _i("-" + e), n.install = (o) => {
        o.component(n.name, n);
      }, ye(n);
    }
  };
}
const ot = (e, t) => e ? Te(e, t) : "", rn = (e, t) => {
  let n = document.body;
  const o = e.teleport || "body";
  o != "body" && (Tl(o) ? n = document.querySelector(o) : n = e.teleport);
  const l = document.createElement("view"), s = t.name ? t.name + "-" : "", a = e.id || (/* @__PURE__ */ new Date()).getTime();
  l.id = s + a;
  let r = {};
  At(t.wrapper) ? r = t.wrapper(n, l) : r = t.wrapper;
  const i = ml(r, e), p = t.components;
  return p && p.forEach((d) => {
    i.use(d);
  }), n.appendChild(l), {
    instance: i.mount(l),
    unmount: () => {
      i.unmount(), n.removeChild(l);
    }
  };
};
let mt = 0;
const Dn = "nut-overflow-hidden", Di = (e) => [() => {
  if (e())
    try {
      !mt && _n.classList.add(Dn), mt++;
    } catch (o) {
      console.warn("[NutUI] <useLockScroll>", o);
    }
}, () => {
  if (e() && mt)
    try {
      mt--, !mt && _n.classList.remove(Dn);
    } catch (o) {
      console.warn("[NutUI] <unlock>", o);
    }
}], { componentName: Ii, create: Bi } = x("overlay"), Mi = Bi({
  props: {
    visible: {
      type: Boolean,
      default: !1
    },
    zIndex: {
      type: [Number, String],
      default: 2e3
    },
    duration: {
      type: [Number, String],
      default: 0.3
    },
    lockScroll: {
      type: Boolean,
      default: !0
    },
    overlayClass: {
      type: String,
      default: ""
    },
    overlayStyle: {
      type: Object
    },
    closeOnClickOverlay: {
      type: Boolean,
      default: !0
    }
  },
  emits: ["click", "update:visible"],
  setup(e, { emit: t }) {
    const [n, o] = Di(() => e.lockScroll), l = T(() => ({
      [Ii]: !0,
      [e.overlayClass]: !0
    })), s = T(() => q({
      transitionDuration: `${e.duration}s`,
      zIndex: e.zIndex
    }, e.overlayStyle));
    return $t(() => {
      e.visible ? n() : o();
    }), { classes: l, style: s, onClick: (r) => {
      t("click", r), e.closeOnClickOverlay && t("update:visible", !1);
    } };
  }
}), ne = (e, t) => {
  const n = e.__vccOpts || e;
  for (const [o, l] of t)
    n[o] = l;
  return n;
};
function Li(e, t, n, o, l, s) {
  return c(), G(Jt, { name: "overlay-fade" }, {
    default: oe(() => [
      Ie(g("view", {
        class: B(e.classes),
        style: A(e.style),
        onClick: t[0] || (t[0] = De((...a) => e.onClick && e.onClick(...a), ["stop"]))
      }, [
        _(e.$slots, "default")
      ], 6), [
        [Me, e.visible]
      ])
    ]),
    _: 3
  });
}
const Nt = /* @__PURE__ */ ne(Mi, [["render", Li]]), _t = {
  visible: {
    type: Boolean,
    default: !1
  },
  zIndex: {
    type: [Number, String],
    default: 2e3
  },
  duration: {
    type: [Number, String],
    default: 0.3
  },
  lockScroll: {
    type: Boolean,
    default: !0
  },
  closeOnClickOverlay: {
    type: Boolean,
    default: !0
  },
  position: {
    type: String,
    default: "center"
  },
  transition: {
    type: String,
    default: ""
  },
  style: {
    type: Object,
    default: () => ({})
  },
  popClass: {
    type: String,
    default: ""
  },
  closeable: {
    type: Boolean,
    default: !1
  },
  closeIconPosition: {
    type: String,
    default: "top-right"
  },
  destroyOnClose: {
    type: Boolean,
    default: !0
  },
  teleport: {
    type: [String, Element],
    default: "body"
  },
  overlay: {
    type: Boolean,
    default: !0
  },
  round: {
    type: Boolean,
    default: !1
  },
  teleportDisable: {
    type: Boolean,
    default: !1
  },
  safeAreaInsetBottom: {
    type: Boolean,
    default: !1
  },
  overlayClass: {
    type: String,
    default: ""
  },
  overlayStyle: {
    type: Object,
    default: () => ({})
  }
}, { componentName: Pi, create: Ei } = x("popup"), ao = 2e3;
let In = ao;
const Ai = Ei({
  components: {
    NutOverlay: Nt,
    Close: zt
  },
  props: _t,
  emits: ["clickPop", "clickCloseIcon", "open", "close", "opened", "closed", "clickOverlay", "update:visible"],
  setup(e, { emit: t }) {
    let n;
    const o = me({
      zIndex: e.zIndex,
      showSlot: !0,
      closed: e.closeable
    }), l = T(() => ({
      [Pi]: !0,
      round: e.round,
      [`nut-popup--${e.position}`]: !0,
      [`nut-popup--${e.position}--safebottom`]: e.position === "bottom" && e.safeAreaInsetBottom,
      [e.popClass]: !0
    })), s = T(() => q({
      zIndex: o.zIndex,
      transitionDuration: `${e.duration}s`
    }, e.style)), a = T(() => e.transition ? e.transition : `nut-popup-slide-${e.position}`), r = () => {
      n || (n = !0, e.zIndex !== ao && (In = Number(e.zIndex)), t("update:visible", !0), o.zIndex = ++In, e.destroyOnClose && (o.showSlot = !0), t("open"));
    }, i = () => {
      n && (n = !1, t("update:visible", !1), t("close"), e.destroyOnClose && setTimeout(() => {
        o.showSlot = !1;
      }, +e.duration * 1e3));
    }, p = (w) => {
      t("clickPop", w);
    }, d = (w) => {
      w.stopPropagation(), t("clickCloseIcon", w), i();
    }, y = (w) => {
      t("clickOverlay", w), e.closeOnClickOverlay && i();
    }, v = (w) => {
      t("opened", w);
    }, b = (w) => {
      t("closed", w);
    };
    return Q(
      () => e.visible,
      () => {
        e.visible && !n && r(), !e.visible && n && i();
      }
    ), $t(() => {
      o.closed = e.closeable;
    }), fe(q({}, be(o)), {
      popStyle: s,
      transitionName: a,
      classes: l,
      onClick: p,
      onClickCloseIcon: d,
      onClickOverlay: y,
      onOpened: v,
      onClosed: b
    });
  }
});
function zi(e, t, n, o, l, s) {
  const a = U("nut-overlay"), r = U("Close");
  return c(), G(Kn, {
    to: e.teleport,
    disabled: !e.teleportDisable
  }, [
    e.overlay ? (c(), G(a, dt({
      key: 0,
      visible: e.visible,
      "close-on-click-overlay": e.closeOnClickOverlay,
      "z-index": e.zIndex,
      "lock-scroll": e.lockScroll,
      duration: e.duration,
      "overlay-class": e.overlayClass,
      "overlay-style": e.overlayStyle
    }, e.$attrs, { onClick: e.onClickOverlay }), null, 16, ["visible", "close-on-click-overlay", "z-index", "lock-scroll", "duration", "overlay-class", "overlay-style", "onClick"])) : N("", !0),
    te(Jt, {
      name: e.transitionName,
      onAfterEnter: e.onOpened,
      onAfterLeave: e.onClosed
    }, {
      default: oe(() => [
        Ie(g("view", {
          class: B(e.classes),
          style: A(e.popStyle),
          onClick: t[1] || (t[1] = (...i) => e.onClick && e.onClick(...i))
        }, [
          e.showSlot ? _(e.$slots, "default", { key: 0 }) : N("", !0),
          e.closed ? (c(), f("view", {
            key: 1,
            class: B(["nut-popup__close-icon", "nut-popup__close-icon--" + e.closeIconPosition]),
            onClick: t[0] || (t[0] = (...i) => e.onClickCloseIcon && e.onClickCloseIcon(...i))
          }, [
            _(e.$slots, "close-icon", {}, () => [
              te(r, { height: "12px" })
            ])
          ], 2)) : N("", !0)
        ], 6), [
          [Me, e.visible]
        ])
      ]),
      _: 3
    }, 8, ["name", "onAfterEnter", "onAfterLeave"])
  ], 8, ["to", "disabled"]);
}
const Ee = /* @__PURE__ */ ne(Ai, [["render", zi]]), Vi = (e) => ({
  props: {
    theme: { type: String, default: "" },
    themeVars: { type: Object, default: {} },
    tag: { type: String, default: e }
  },
  setup(t, { slots: n }) {
    const o = (r) => {
      if (!/^#([0-9a-fA-f]{3}|[0-9a-fA-f]{6})$/.test(r))
        return "";
      r = r.toLowerCase(), r.length === 4 && (r = "#" + r.slice(1).split("").map((d) => d + d).join(""));
      const p = [];
      for (let d = 1; d < 7; d += 2)
        p.push(parseInt("0x" + r.slice(d, d + 2)));
      return p.join(",");
    }, l = (r) => (r = r.replace(r.charAt(0), r.charAt(0).toLocaleLowerCase()), r.replace(/([a-z])([A-Z])/g, (i, p, d) => p + "-" + d.toLowerCase())), s = (r) => {
      if (!r)
        return;
      const i = {}, p = r == null ? void 0 : r.primaryColor;
      if (p) {
        const d = o(p);
        i["--nut-address-region-tab-line"] = `linear-gradient(90deg, ${p} 0%, rgba(${d}, 0.15) 100%)`, i["--nut-tabs-horizontal-tab-line-color"] = `linear-gradient(90deg, ${p} 0%, rgba(${d}, 0.15) 100%)`, i["--nut-tabs-vertical-tab-line-color"] = `linear-gradient(180deg, ${p} 0%, rgba(${d}, 0.15) 100%)`;
      }
      return Object.keys(r).forEach((d) => {
        i[`--nut-${l(d)}`] = r[d];
      }), i;
    }, a = T(() => s(t.themeVars));
    return () => {
      var r;
      return Te(
        t.tag,
        {
          class: `nut-theme-${t.theme}`,
          style: a.value
        },
        (r = n.default) == null ? void 0 : r.call(n)
      );
    };
  }
}), { create: Oi } = x("config-provider"), Hi = Oi(Vi("div")), { componentName: Ri, create: Fi } = x("image"), Wi = Fi({
  props: {
    src: String,
    fit: {
      type: String,
      default: "fill"
    },
    position: {
      type: String,
      default: "center"
    },
    alt: {
      type: String,
      default: ""
    },
    width: {
      type: String,
      default: "center"
    },
    height: {
      type: String,
      default: ""
    },
    round: {
      type: Boolean,
      default: !1
    },
    radius: [String, Number],
    showError: {
      type: Boolean,
      default: !0
    },
    showLoading: {
      type: Boolean,
      default: !0
    },
    lazyLoad: {
      type: Boolean,
      default: !1
    }
  },
  components: {
    Image: la,
    ImageError: xs
  },
  emits: ["click", "load", "error"],
  setup(e, { emit: t }) {
    const n = me({
      loading: !0,
      isError: !1,
      slotLoding: st().loading,
      slotError: st().error
    }), o = T(() => {
      const b = Ri;
      return {
        [b]: !0,
        [`${b}-round`]: e.round
      };
    }), l = z(null), s = z(!1), a = z(null), r = () => {
      const b = {
        threshold: [0],
        rootMargin: "0px"
      };
      l.value = new IntersectionObserver((w) => {
        w.forEach((S) => {
          S.isIntersecting && (s.value = !0, l.value.disconnect());
        });
      }, b), a.value && l.value.observe(a.value);
    };
    $e(() => {
      e.lazyLoad && r();
    }), Qt(() => {
      l.value && l.value.disconnect();
    });
    const i = T(() => {
      let b = {};
      return e.width && (b.width = Be(e.width)), e.height && (b.height = Be(e.height)), e.radius !== void 0 && e.radius !== null && (b.overflow = "hidden", b.borderRadius = Be(e.radius)), b;
    }), p = T(() => ({
      objectFit: e.fit,
      objectPosition: e.position
    }));
    Q(
      () => e.src,
      () => {
        n.isError = !1, n.loading = !0;
      }
    );
    const d = () => {
      n.isError = !1, n.loading = !1, t("load");
    }, y = () => {
      n.isError = !0, n.loading = !1, t("error");
    }, v = (b) => {
      t("click", b);
    };
    return fe(q({}, be(n)), { imageClick: v, classes: o, styles: p, stylebox: i, error: y, load: d, show: s, imgRef: a });
  }
}), Yi = ["src", "date-src", "alt"], ji = {
  key: 0,
  class: "nut-img-loading"
}, Ki = {
  key: 1,
  class: "nut-img-error"
};
function Ui(e, t, n, o, l, s) {
  const a = U("Image"), r = U("ImageError");
  return c(), f("div", {
    class: B(e.classes),
    style: A(e.stylebox),
    onClick: t[2] || (t[2] = (...i) => e.imageClick && e.imageClick(...i))
  }, [
    g("img", {
      ref: "imgRef",
      class: "nut-img",
      src: e.lazyLoad ? e.show ? e.src : void 0 : e.src,
      "date-src": e.lazyLoad ? e.show ? void 0 : e.src : void 0,
      alt: e.alt,
      style: A(e.styles),
      onLoad: t[0] || (t[0] = (...i) => e.load && e.load(...i)),
      onError: t[1] || (t[1] = (...i) => e.error && e.error(...i))
    }, null, 44, Yi),
    e.loading ? (c(), f("div", ji, [
      e.slotLoding ? N("", !0) : (c(), G(a, {
        key: 0,
        width: "16px",
        height: "20px",
        name: "image"
      })),
      _(e.$slots, "loading")
    ])) : N("", !0),
    e.isError && !e.loading ? (c(), f("div", Ki, [
      e.slotError ? N("", !0) : (c(), G(r, {
        key: 0,
        width: "16px",
        height: "20px",
        name: "imageError"
      })),
      _(e.$slots, "error")
    ])) : N("", !0)
  ], 6);
}
const Xi = /* @__PURE__ */ ne(Wi, [["render", Ui]]), { create: qi } = x("layout"), ro = qi({});
we(ro);
const io = Symbol("nut-layout"), Bn = "nut-col", uo = /* @__PURE__ */ ye({
  name: "NutCol",
  __name: "col",
  props: {
    span: { default: 24 },
    offset: { default: 0 }
  },
  setup(e) {
    const t = e, n = Ae(io), o = T(() => ({
      [Bn]: !0,
      [Bn + "-gutter"]: n,
      ["nut-col-" + t.span]: !0,
      ["nut-col-offset-" + t.offset]: !0
    })), l = T(() => ({
      paddingLeft: n / 2 + "px",
      paddingRight: n / 2 + "px"
    }));
    return (s, a) => (c(), f("view", {
      class: B(o.value),
      style: A(l.value)
    }, [
      _(s.$slots, "default")
    ], 6));
  }
});
we(uo);
const Zi = "nut-row", co = /* @__PURE__ */ ye({
  name: "NutRow",
  __name: "row",
  props: {
    type: { default: "" },
    gutter: { default: "" },
    justify: { default: "start" },
    align: { default: "flex-start" },
    flexWrap: { default: "nowrap" }
  },
  setup(e) {
    const t = e;
    Oe(io, t.gutter);
    const n = (l, s) => l ? s ? `nut-row-${l}-${s}` : "" : `nut-row-${s}`, o = T(() => [
      Zi,
      n("", t.type),
      n("justify", t.justify),
      n("align", t.align),
      n("flex", t.flexWrap)
    ]);
    return (l, s) => (c(), f("view", {
      class: B(o.value)
    }, [
      _(l.$slots, "default")
    ], 2));
  }
});
we(co);
const Gi = /scroll|auto|overlay/i, fo = window;
function Ji(e) {
  return e.tagName !== "HTML" && e.tagName !== "BODY" && e.nodeType === 1;
}
function Xt(e, t = fo) {
  let n = e;
  for (; n && n !== t && Ji(n); ) {
    const { overflowY: o } = window.getComputedStyle(n);
    if (Gi.test(o))
      return n;
    n = n.parentNode;
  }
  return t;
}
function po(e, t = fo) {
  const n = z();
  return $e(() => {
    e.value && (n.value = Xt(e.value, t));
  }), n;
}
function Qi(e) {
  return typeof window != "undefined" && e === window;
}
const Ye = (e) => {
  const t = pe(e);
  if (Qi(t)) {
    const n = t.innerWidth, o = t.innerHeight;
    return {
      top: 0,
      left: 0,
      right: n,
      bottom: o,
      width: n,
      height: o
    };
  }
  return t && t.getBoundingClientRect ? t.getBoundingClientRect() : {
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    width: 0,
    height: 0
  };
}, { create: xi } = x("sticky"), eu = xi({
  props: {
    position: {
      type: String,
      default: "top"
    },
    top: {
      type: [Number, String],
      default: 0
    },
    bottom: {
      type: [Number, String],
      default: 0
    },
    container: {
      type: Object,
      default: null
    },
    zIndex: {
      type: [Number, String],
      default: 99
    }
  },
  emits: ["change"],
  setup(e, { emit: t }) {
    const n = z(), o = z(), l = me({
      fixed: !1,
      height: 0,
      width: 0,
      transform: 0
    }), s = T(() => e.position === "top" ? Number(e.top) : Number(e.bottom)), a = T(() => l.fixed ? { height: `${l.height}px` } : {}), r = T(() => l.fixed ? {
      [e.position]: `${s.value}px`,
      height: `${l.height}px`,
      width: `${l.width}px`,
      transform: l.transform ? `translate3d(0, ${l.transform}px, 0)` : void 0,
      position: l.fixed ? "fixed" : void 0,
      zIndex: Number(e.zIndex)
    } : {}), i = () => {
      const p = e.container;
      if (!n.value && !p)
        return;
      const d = Ye(n), y = o.value, v = Ye(y), b = Ye(p);
      l.height = d.height, l.width = d.width;
      const w = () => {
        let u = !1;
        if (e.position === "top")
          u = p ? s.value > d.top && b.bottom > 0 : s.value > d.top;
        else {
          const m = document.documentElement.clientHeight;
          u = p ? b.bottom > 0 && m - s.value - v.height > b.top : m - s.value < d.bottom;
        }
        return u;
      }, S = () => {
        if (p)
          if (e.position === "top") {
            const u = b.bottom - s.value - v.height;
            return u < 0 ? u : 0;
          } else {
            const u = document.documentElement.clientHeight, m = b.bottom - (u - s.value);
            return m < 0 ? m : 0;
          }
        return 0;
      };
      l.transform = S(), l.fixed = w();
    };
    return Q(
      () => l.fixed,
      (p) => {
        t("change", p);
      }
    ), $e(() => {
      i(), Xt(n.value).addEventListener("scroll", i, !0);
    }), Ue(() => {
      Xt(n.value).removeEventListener("scroll", i);
    }), { rootRef: n, rootStyle: a, stickyRef: o, stickyStyle: r };
  }
});
function tu(e, t, n, o, l, s) {
  return c(), f("div", {
    ref: "rootRef",
    class: "nut-sticky",
    style: A(e.rootStyle)
  }, [
    g("div", {
      ref: "stickyRef",
      class: "nut-sticky__box",
      style: A(e.stickyStyle)
    }, [
      _(e.$slots, "default")
    ], 4)
  ], 4);
}
const mo = /* @__PURE__ */ ne(eu, [["render", tu]]), ho = /* @__PURE__ */ ye({
  name: "NutDivider",
  __name: "divider",
  props: {
    contentPosition: { default: "center" },
    dashed: { type: Boolean, default: !1 },
    hairline: { type: Boolean, default: !0 },
    direction: { default: "horizontal" }
  },
  setup(e) {
    const t = e, n = st(), o = T(() => {
      const l = "nut-divider";
      return t.direction === "horizontal" ? {
        [l]: !0,
        [`${l}-center`]: n.default,
        [`${l}-left`]: t.contentPosition === "left",
        [`${l}-right`]: t.contentPosition === "right",
        [`${l}-dashed`]: t.dashed,
        [`${l}-hairline`]: t.hairline
      } : {
        [l]: !0,
        [`${l}-vertical`]: t.direction === "vertical"
      };
    });
    return (l, s) => (c(), f("view", {
      class: B(o.value)
    }, [
      l.direction === "horizontal" ? _(l.$slots, "default", { key: 0 }) : N("", !0)
    ], 2));
  }
});
we(ho);
function nu(e, t) {
  const n = [], o = (l) => {
    Array.isArray(l) && l.forEach((s) => {
      var a;
      if (gl(s)) {
        if (t) {
          if (s.type && s.type.name === t) {
            n.push(s);
            return;
          }
        } else
          n.push(s);
        (a = s.component) != null && a.subTree && o(s.component.subTree.children), s.children && o(s.children);
      }
    });
  };
  return o(e), n;
}
function ou(e, t, n) {
  const o = nu(e.subTree.children, n);
  t.sort((l, s) => o.indexOf(l.vnode) - o.indexOf(s.vnode));
}
function lu(e, t) {
  const n = hl([]), o = Xe(), l = (r) => {
    r.proxy && (n.push(Tn(r)), ou(o, n, t));
  }, s = (r) => {
    n.splice(n.indexOf(Tn(r)), 1);
  }, a = Object.assign;
  return (r) => (Oe(
    e,
    a(
      {
        add: l,
        remove: s,
        internalChildren: n
      },
      r
    )
  ), {
    internalChildren: n
  });
}
const { componentName: su } = x("grid"), go = Symbol("grid"), au = {
  // 列数
  columnNum: {
    type: [Number, String],
    default: 4
  },
  // 是否显示边框
  border: {
    type: Boolean,
    default: !0
  },
  // 格子之间间隔距离
  gutter: {
    type: [Number, String],
    default: 0
  },
  // 是否内容居中
  center: {
    type: Boolean,
    default: !0
  },
  // 是否固定正方形
  square: {
    type: Boolean,
    default: !1
  },
  // 内容与文字翻转
  reverse: {
    type: Boolean,
    default: !1
  },
  // 内容排列方向
  direction: {
    type: String
  },
  // 是否开启点击反馈
  clickable: {
    type: Boolean,
    default: !1
  }
}, ru = {
  props: au,
  setup(e, { slots: t }) {
    lu(go, "NutGridItem")({ props: e });
    const n = T(() => {
      const l = su;
      return {
        [l]: !0,
        [`${l}--border`]: e.border && !e.gutter
      };
    }), o = T(() => {
      const l = {};
      return e.gutter && (l.paddingLeft = Be(e.gutter)), l;
    });
    return () => {
      var l;
      return Te(
        "view",
        {
          class: n.value,
          style: o.value
        },
        (l = t.default) == null ? void 0 : l.call(t)
      );
    };
  }
}, { create: iu } = x("grid"), uu = iu(ru);
function cu(e) {
  const t = Ae(e, null);
  if (t) {
    const n = Xe(), { add: o, remove: l, internalChildren: s } = t;
    o(n), Ue(() => l(n));
    const a = T(() => s.indexOf(n));
    return {
      parent: t,
      index: a
    };
  }
  return {
    parent: null,
    index: z(-1)
  };
}
const { create: du, componentName: Mn } = x("grid-item"), fu = du({
  props: {
    text: {
      type: String
    },
    // router
    to: {
      type: [String, Object]
    },
    url: {
      type: String,
      default: ""
    },
    replace: {
      type: Boolean,
      default: !1
    }
  },
  emits: ["click"],
  setup(e, { emit: t }) {
    const n = cu(go);
    if (!n.parent)
      return {};
    const o = n.index, l = n.parent.props, s = T(() => ({
      [Mn]: !0
    })), a = T(() => {
      const d = {
        flexBasis: `${100 / +l.columnNum}%`
      };
      return l.square ? d.paddingTop = `${100 / +l.columnNum}%` : l.gutter && (d.paddingRight = Be(l.gutter), o.value >= +l.columnNum && (d.marginTop = Be(l.gutter))), d;
    }), r = T(() => {
      const d = `${Mn}__content`;
      return {
        [`${d}`]: !0,
        [`${d}--border`]: l.border,
        [`${d}--surround`]: l.border && l.gutter,
        [`${d}--center`]: l.center,
        [`${d}--square`]: l.square,
        [`${d}--reverse`]: l.reverse,
        [`${d}--${l.direction}`]: !!l.direction,
        [`${d}--clickable`]: l.clickable || e.to || e.url
      };
    }), i = ln();
    return {
      rootClass: s,
      rootStyle: a,
      contentClass: r,
      handleClick: (d) => {
        t("click", d), e.to && i ? i[e.replace ? "replace" : "push"](e.to) : e.url && (e.replace ? location.replace(e.url) : location.href = e.url);
      }
    };
  }
}), pu = { class: "nut-grid-item__text" };
function mu(e, t, n, o, l, s) {
  return c(), f("view", {
    class: B(e.rootClass),
    style: A(e.rootStyle),
    onClick: t[0] || (t[0] = (...a) => e.handleClick && e.handleClick(...a))
  }, [
    g("view", {
      class: B(e.contentClass)
    }, [
      _(e.$slots, "default"),
      g("view", pu, [
        e.text ? (c(), f(J, { key: 0 }, [
          ge(E(e.text), 1)
        ], 64)) : _(e.$slots, "text", { key: 1 })
      ])
    ], 2)
  ], 6);
}
const hu = /* @__PURE__ */ ne(fu, [["render", mu]]), { create: gu, componentName: lt } = x("space"), vu = gu({
  props: {
    align: String,
    direction: {
      type: String,
      default: "horizontal"
    },
    justify: String,
    wrap: Boolean,
    gutter: [Number, String, Array],
    fill: Boolean
  },
  setup(e, { slots: t }) {
    const n = (d) => typeof d == "number" ? d + "px" : d, o = (d) => {
      const y = {};
      if (!e.gutter)
        return y;
      const v = `${n(Array.isArray(e.gutter) ? e.gutter[0] : e.gutter)}`, b = `${n(Array.isArray(e.gutter) ? e.gutter[1] : e.gutter)}`;
      return d ? e.wrap ? { marginBottom: b } : {} : (e.direction === "horizontal" && (y.marginRight = v), (e.direction === "vertical" || e.wrap) && (y.marginBottom = b), y);
    }, l = (d = []) => {
      const y = [];
      return d.forEach((v) => {
        Array.isArray(v) ? y.push(...v) : v.type === J ? y.push(...l(v.children)) : y.push(v);
      }), y.filter(
        (v) => {
          var b;
          return !(v && (v.type === vl || v.type === J && ((b = v.children) == null ? void 0 : b.length) === 0 || v.type === yl && v.children.trim() === ""));
        }
      );
    }, { direction: s, wrap: a, fill: r, justify: i, align: p } = e;
    return () => {
      var v;
      const d = l((v = t.default) == null ? void 0 : v.call(t)), y = () => d.map((b, w) => Te(
        "div",
        {
          class: `${lt}-item`,
          style: o(w === d.length - 1)
        },
        b
      ));
      return Te(
        "div",
        {
          class: [
            lt,
            s && `${lt}-${s}`,
            p && `${lt}-align-${p}`,
            i && `${lt}-justify-${i}`,
            a && `${lt}-wrap`,
            r && `${lt}-fill`
          ]
        },
        y()
      );
    };
  }
}), yu = {
  key: 1,
  class: "nut-navbar__text"
}, bu = { class: "nut-navbar__title" }, $u = {
  key: 0,
  class: "nut-navbar__text"
}, vo = /* @__PURE__ */ ye({
  name: "NutNavbar",
  __name: "navbar",
  props: {
    leftShow: { type: Boolean, default: !1 },
    title: { default: "" },
    titleIcon: { type: Boolean, default: !1 },
    leftText: { default: "" },
    desc: { default: "" },
    fixed: { type: Boolean, default: !1 },
    safeAreaInsetTop: { type: Boolean, default: !1 },
    border: { type: Boolean, default: !1 },
    placeholder: { type: Boolean, default: !0 },
    zIndex: { default: 10 }
  },
  emits: [
    "clickBack",
    "clickTitle",
    "clickIcon",
    "clickRight",
    // will be deprecated
    "onClickBack",
    "onClickTitle",
    "onClickIcon",
    "onClickRight"
  ],
  setup(e, { emit: t }) {
    const n = e, o = t, l = z("auto"), s = z(), a = T(() => {
      const b = "nut-navbar";
      return {
        [b]: !0,
        [`${b}--border`]: n.border,
        [`${b}--fixed`]: n.fixed,
        [`${b}--safe-area-inset-top`]: n.safeAreaInsetTop
      };
    }), r = T(() => n.fixed && n.placeholder ? {
      height: l.value
    } : {}), i = () => {
      if (s.value) {
        const b = s.value.getBoundingClientRect();
        l.value = `${b.height}px`;
      }
    };
    $e(() => {
      n.fixed && n.placeholder && Ne(() => {
        i();
      });
    });
    const p = () => {
      o("clickBack"), o("onClickBack");
    }, d = () => {
      o("clickTitle"), o("onClickTitle");
    }, y = () => {
      o("clickIcon"), o("onClickIcon");
    }, v = () => {
      o("clickRight"), o("onClickRight");
    };
    return (b, w) => (c(), f("view", {
      class: "nut-navbar--placeholder",
      style: A(r.value)
    }, [
      g("view", {
        ref_key: "navbarRef",
        ref: s,
        class: B(a.value),
        style: A({ zIndex: b.zIndex })
      }, [
        g("view", {
          class: "nut-navbar__left",
          onClick: p
        }, [
          b.leftShow ? _(b.$slots, "left-show", { key: 0 }, () => [
            te(pe(nn), {
              height: "12px",
              color: "#979797"
            })
          ]) : N("", !0),
          b.leftText ? (c(), f("view", yu, E(b.leftText), 1)) : N("", !0),
          _(b.$slots, "left")
        ]),
        g("view", bu, [
          b.title ? (c(), f("view", {
            key: 0,
            class: "title",
            onClick: d
          }, E(b.title), 1)) : N("", !0),
          b.titleIcon ? (c(), f("view", {
            key: 1,
            class: "icon",
            onClick: y
          }, [
            _(b.$slots, "title-icon", { onClick: y })
          ])) : N("", !0),
          _(b.$slots, "content")
        ]),
        g("view", {
          class: "nut-navbar__right",
          onClick: v
        }, [
          b.desc ? (c(), f("view", $u, E(b.desc), 1)) : N("", !0),
          _(b.$slots, "right")
        ])
      ], 6)
    ], 4));
  }
});
we(vo);
const Se = (e = "") => (t, ...n) => {
  e = e.toLocaleLowerCase();
  const o = Qn.languages();
  let l = t;
  e && e.startsWith("nut") && (l = `${e.slice(3)}.${t}`);
  const s = Ut(o, l) || Ut(o, t);
  return At(s) ? s(...n) : s;
}, { create: wu } = x("fixed-nav"), ku = "NutFixedNav", Cu = wu({
  components: {
    NutOverlay: Nt,
    Left: nn
  },
  props: {
    visible: {
      type: Boolean,
      default: !1
    },
    overlay: {
      type: Boolean,
      default: !0
    },
    navList: {
      default: () => [],
      type: Array
    },
    activeColor: {
      default: "",
      type: String
    },
    activeText: {
      default: "",
      type: String
    },
    unActiveText: {
      default: "",
      type: String
    },
    position: {
      default: () => ({
        top: "auto",
        bottom: "auto"
      }),
      type: Object
    },
    type: {
      default: "right",
      type: String
    }
  },
  emits: ["update:visible", "selected"],
  setup(e, { emit: t }) {
    const n = Se(ku), o = T(() => ({
      ["nut-fixed-nav"]: !0,
      active: e.visible,
      [e.type]: !0
    })), l = z(-1);
    return { classes: o, updateValue: (r = !e.visible) => {
      t("update:visible", r);
    }, selected: (r, i) => {
      t("selected", {
        item: r,
        event: i
      }), l.value = r.id;
    }, translate: n, current: l };
  }
}), Su = { class: "nut-fixed-nav__list" }, Tu = ["onClick"], Nu = ["src"], _u = { class: "span" }, Du = {
  key: 0,
  class: "b"
}, Iu = { class: "text" };
function Bu(e, t, n, o, l, s) {
  const a = U("nut-overlay"), r = U("Left");
  return c(), f("view", {
    class: B(e.classes),
    style: A(e.position)
  }, [
    e.overlay ? (c(), G(a, {
      key: 0,
      visible: e.visible,
      "z-index": 200,
      onClick: t[0] || (t[0] = (i) => e.updateValue(!1))
    }, null, 8, ["visible"])) : N("", !0),
    _(e.$slots, "list", {}, () => [
      g("view", Su, [
        (c(!0), f(J, null, ie(e.navList, (i, p) => (c(), f("view", {
          key: i.id || p,
          class: B(["nut-fixed-nav__list-item", { active: i.id == e.current }]),
          onClick: (d) => e.selected(i, d)
        }, [
          g("img", {
            src: i.icon
          }, null, 8, Nu),
          g("view", _u, E(i.text), 1),
          i.num ? (c(), f("view", Du, E(i.num), 1)) : N("", !0)
        ], 10, Tu))), 128))
      ])
    ]),
    g("div", {
      class: "nut-fixed-nav__btn",
      onClick: t[1] || (t[1] = (i) => e.updateValue())
    }, [
      _(e.$slots, "btn", {}, () => [
        te(r, { color: "#fff" }),
        g("view", Iu, E(e.visible ? e.activeText || e.translate("activeText") : e.unActiveText || e.translate("unActiveText")), 1)
      ])
    ])
  ], 6);
}
const Mu = /* @__PURE__ */ ne(Cu, [["render", Bu]]), yo = Symbol("nut-menu"), { componentName: Lu, create: Pu } = x("menu"), Eu = Pu({
  components: {
    RectUp: Cr,
    RectDown: yr
  },
  props: {
    activeColor: {
      type: String,
      default: ""
    },
    overlay: {
      type: Boolean,
      default: !0
    },
    lockScroll: {
      type: Boolean,
      default: !0
    },
    duration: {
      type: [Number, String],
      default: 0.3
    },
    closeOnClickOverlay: {
      type: Boolean,
      default: !0
    },
    direction: {
      type: String,
      default: "down"
    },
    scrollFixed: {
      type: [Boolean, String, Number],
      default: !1
    },
    titleClass: {
      type: String,
      default: ""
    }
  },
  setup(e) {
    const t = z(), n = z(0), o = z(!1), { children: l, linkChildren: s } = kt(yo), a = T(() => l.some((b) => b.state.showWrapper)), r = T(() => ({
      [Lu]: !0,
      "scroll-fixed": o.value
    })), i = () => {
      if (t.value) {
        const b = Ye(t);
        e.direction === "down" ? n.value = b.bottom : n.value = window.innerHeight - b.top;
      }
    };
    s({ props: e, offset: n });
    const p = (b) => {
      l.forEach((w, S) => {
        S === b ? (i(), w.toggle()) : w.state.showPopup && w.toggle(!1, { immediate: !0 });
      });
    }, d = (b) => Math.max(0, "scrollTop" in b ? b.scrollTop : b.pageYOffset), y = () => {
      const { scrollFixed: b } = e, w = d(window);
      o.value = w > (typeof b == "boolean" ? 30 : Number(b));
    }, v = (b) => {
      let w = "";
      const { titleClass: S } = e;
      return b && (w += "active"), S && (w += ` ${S}`), w;
    };
    return $e(() => {
      const { scrollFixed: b } = e;
      b && window.addEventListener("scroll", y);
    }), Ue(() => {
      const { scrollFixed: b } = e;
      b && window.removeEventListener("scroll", y);
    }), {
      toggleItem: p,
      children: l,
      opened: a,
      classes: r,
      barRef: t,
      getClasses: v
    };
  }
}), Au = ["onClick"], zu = { class: "nut-menu__title-text" }, Vu = { class: "nut-menu__title-icon" };
function Ou(e, t, n, o, l, s) {
  const a = U("RectUp"), r = U("RectDown");
  return c(), f("view", {
    class: B(e.classes)
  }, [
    g("view", {
      ref: "barRef",
      class: B(["nut-menu__bar", { opened: e.opened }])
    }, [
      (c(!0), f(J, null, ie(e.children, (i, p) => (c(), f("view", {
        key: p,
        class: B(["nut-menu__item", { disabled: i.disabled, active: i.state.showPopup }]),
        style: A({ color: i.state.showPopup ? e.activeColor : "" }),
        onClick: (d) => !i.disabled && e.toggleItem(p)
      }, [
        g("view", {
          class: B(["nut-menu__title", e.getClasses(i.state.showPopup)])
        }, [
          g("view", zu, E(i.renderTitle()), 1),
          g("span", Vu, [
            _(e.$slots, "icon", {}, () => [
              e.direction === "up" ? (c(), G(a, { key: 0 })) : (c(), G(r, { key: 1 }))
            ])
          ])
        ], 2)
      ], 14, Au))), 128))
    ], 2),
    _(e.$slots, "default")
  ], 2);
}
const Hu = /* @__PURE__ */ ne(Eu, [["render", Ou]]), { create: Ru } = x("menu-item"), Fu = Ru({
  props: {
    title: String,
    options: {
      type: Array,
      default: []
    },
    disabled: {
      type: Boolean,
      default: !1
    },
    modelValue: null,
    cols: {
      type: Number,
      default: 1
    },
    activeTitleClass: String,
    inactiveTitleClass: String
  },
  components: {
    NutPopup: Ee,
    Check: eo
  },
  emits: ["update:modelValue", "change", "open", "close"],
  setup(e, { emit: t }) {
    const n = me({
      showPopup: !1,
      showWrapper: !1
    }), { parent: o } = Tt(yo), l = T(() => o.props.direction === "down" ? {
      top: o.offset.value + "px"
    } : {
      bottom: o.offset.value + "px"
    }), s = T(() => {
      const y = { height: o.offset.value + "px" };
      return o.props.direction === "down" ? fe(q({}, y), { top: "0px" }) : fe(q({}, y), { bottom: "0px" });
    });
    return {
      style: l,
      placeholderElementStyle: s,
      renderTitle: () => {
        var v;
        if (e.title)
          return e.title;
        const y = (v = e.options) == null ? void 0 : v.find((b) => b.value === e.modelValue);
        return y ? y.text : "";
      },
      state: n,
      parent: o,
      toggle: (y = !n.showPopup) => {
        y !== n.showPopup && (n.showPopup = y, y && (n.showWrapper = !0, t("open")));
      },
      onClick: (y) => {
        n.showPopup = !1, y.value !== e.modelValue && (t("update:modelValue", y.value), t("change", y.value));
      },
      handleClose: () => {
        t("close"), n.showWrapper = !1;
      },
      handleClickOutside: () => {
        n.showPopup = !1, t("close");
      }
    };
  }
}), Wu = { class: "nut-menu-item__content nut-menu-item__overflow" }, Yu = ["onClick"];
function ju(e, t, n, o, l, s) {
  const a = U("Check"), r = U("nut-popup");
  return Ie((c(), f("view", {
    class: "nut-menu-item",
    style: A(e.style)
  }, [
    Ie(g("div", {
      class: "nut-menu-item-placeholder-element",
      style: A(e.placeholderElementStyle),
      onClick: t[0] || (t[0] = (...i) => e.handleClickOutside && e.handleClickOutside(...i))
    }, null, 4), [
      [Me, e.state.showPopup]
    ]),
    te(r, dt(e.$attrs, {
      visible: e.state.showPopup,
      "onUpdate:visible": t[1] || (t[1] = (i) => e.state.showPopup = i),
      style: { position: "absolute" },
      "overlay-style": { position: "absolute" },
      position: e.parent.props.direction === "down" ? "top" : "bottom",
      duration: e.parent.props.duration,
      "destroy-on-close": !1,
      overlay: e.parent.props.overlay,
      "lock-scroll": e.parent.props.lockScroll,
      "teleport-disable": !1,
      "close-on-click-overlay": e.parent.props.closeOnClickOverlay,
      onClosed: e.handleClose
    }), {
      default: oe(() => [
        g("view", Wu, [
          (c(!0), f(J, null, ie(e.options, (i, p) => (c(), f("view", {
            key: p,
            class: B(["nut-menu-item__option", [{ active: i.value === e.modelValue }]]),
            style: A({ "flex-basis": 100 / e.cols + "%" }),
            onClick: (d) => e.onClick(i)
          }, [
            i.value === e.modelValue ? (c(), f("span", {
              key: 0,
              class: B(["nut-menu-item__span", [i.value === e.modelValue ? e.activeTitleClass : e.inactiveTitleClass]])
            }, [
              _(e.$slots, "icon", {}, () => [
                te(a, dt(e.$attrs, {
                  color: e.parent.props.activeColor
                }), null, 16, ["color"])
              ])
            ], 2)) : N("", !0),
            g("view", {
              class: B([i.value === e.modelValue ? e.activeTitleClass : e.inactiveTitleClass]),
              style: A({ color: i.value === e.modelValue ? e.parent.props.activeColor : "" })
            }, E(i.text), 7)
          ], 14, Yu))), 128)),
          _(e.$slots, "default")
        ])
      ]),
      _: 3
    }, 16, ["visible", "position", "duration", "overlay", "lock-scroll", "close-on-click-overlay", "onClosed"])
  ], 4)), [
    [Me, e.state.showWrapper]
  ]);
}
const Ku = /* @__PURE__ */ ne(Fu, [["render", ju]]), bo = Symbol("nut-tabbar"), $o = /* @__PURE__ */ ye({
  name: "NutTabbar",
  __name: "tabbar",
  props: {
    modelValue: { default: 0 },
    bottom: { type: Boolean, default: !1 },
    unactiveColor: { default: "" },
    activeColor: { default: "" },
    safeAreaInsetBottom: { type: Boolean, default: !1 },
    placeholder: { type: Boolean, default: !1 }
  },
  emits: ["tabSwitch", "update:modelValue"],
  setup(e, { emit: t }) {
    const n = e, o = t, l = z(), s = z(null), a = z(n.modelValue), r = T(() => ({
      ["nut-tabbar"]: !0,
      "nut-tabbar-bottom": n.bottom,
      "nut-tabbar-safebottom": n.safeAreaInsetBottom
    })), { children: i, linkChildren: p } = kt(bo);
    return p({ props: n, activeIndex: a, changeIndex: (v, b) => {
      a.value = b, o("update:modelValue", b), o("tabSwitch", i[v], b);
    } }), Q(
      () => n.modelValue,
      (v) => {
        a.value = v;
      }
    ), $e(() => {
      n.bottom && n.placeholder && Ne(() => {
        var b;
        const v = (b = s.value) == null ? void 0 : b.getBoundingClientRect().height;
        v && (l.value = v);
      });
    }), (v, b) => (c(), f("div", {
      class: B({ "nut-tabbar__placeholder": v.bottom && v.placeholder }),
      style: A({ height: l.value + "px" })
    }, [
      g("view", {
        ref_key: "nutTabbar",
        ref: s,
        class: B(r.value)
      }, [
        _(v.$slots, "default")
      ], 2)
    ], 6));
  }
});
we($o);
const { create: Uu } = x("badge"), Xu = Uu({
  props: {
    value: {
      type: [String, Number]
    },
    max: {
      type: Number,
      default: 1e4
    },
    dot: {
      type: Boolean,
      default: !1
    },
    bubble: {
      type: Boolean,
      default: !1
    },
    hidden: {
      type: Boolean,
      default: !1
    },
    top: {
      type: String,
      default: "0"
    },
    right: {
      type: String,
      default: "0"
    },
    zIndex: {
      type: Number,
      default: 9
    },
    color: {
      type: String,
      default: ""
    }
  },
  setup(e) {
    const t = me({}), n = T(() => ({
      top: `${e.top}px`,
      right: `${e.right}px`,
      zIndex: e.zIndex,
      background: e.color
    })), o = T(() => {
      if (e.dot)
        return;
      const l = e.value, s = e.max;
      return typeof l == "number" && typeof s == "number" && s < l ? `${s}+` : l;
    });
    return {
      state: t,
      stl: n,
      content: o
    };
  }
}), qu = { class: "nut-badge" }, Zu = ["textContent"];
function Gu(e, t, n, o, l, s) {
  return c(), f("view", qu, [
    Ie(g("view", {
      class: "nut-badge__icon",
      style: A(e.stl)
    }, [
      _(e.$slots, "icon")
    ], 4), [
      [Me, !e.hidden && !e.dot && e.$slots.icon]
    ]),
    _(e.$slots, "default"),
    Ie(g("view", {
      class: B(["nut-badge__content nut-badge__content--sup", { "nut-badge__content--dot": e.dot, "nut-badge__content--bubble": !e.dot && e.bubble }]),
      style: A(e.stl),
      textContent: E(e.content)
    }, null, 14, Zu), [
      [Me, !e.hidden && (e.content || e.dot)]
    ])
  ]);
}
const wo = /* @__PURE__ */ ne(Xu, [["render", Gu]]), Ju = { class: "nut-tabbar-item_icon-box" }, Qu = {
  key: 0,
  class: "nut-tabbar-item_icon-box_icon"
}, xu = { key: 1 }, ec = { key: 0 }, ko = /* @__PURE__ */ ye({
  name: "NutTabbarItem",
  __name: "tabbar-item",
  props: {
    tabTitle: { default: "" },
    name: {},
    icon: {},
    href: { default: "" },
    to: {}
  },
  setup(e) {
    const t = e, n = ln(), { parent: o, index: l } = Tt(bo), s = T(() => {
      var i;
      return ((i = t.name) != null ? i : l.value) === o.activeIndex.value;
    }), a = T(() => s.value ? o.props.activeColor : o.props.unactiveColor), r = () => {
      var p, d, y;
      const i = (p = t.name) != null ? p : l.value;
      if (o.changeIndex(l.value, i), (d = o.children[l.value]) != null && d.href) {
        window.location.href = o.children[l.value].href;
        return;
      }
      if ((y = o.children[l.value]) != null && y.to) {
        const v = o.children[l.value].to;
        v && n ? n.push(v) : location.replace(v);
      }
    };
    return (i, p) => (c(), f("div", {
      class: B(["nut-tabbar-item", { "nut-tabbar-item__icon--unactive": !s.value }]),
      style: A({
        color: a.value
      }),
      onClick: r
    }, [
      te(wo, bl($l(i.$attrs)), {
        default: oe(() => [
          g("view", Ju, [
            i.$slots.icon ? (c(), f("div", Qu, [
              _(i.$slots, "icon", { active: s.value })
            ])) : N("", !0),
            i.icon && !i.$slots.icon ? (c(), f("view", xu, [
              (c(), G(Ve(pe(ot)(i.icon)), { class: "nut-popover-item-img" }))
            ])) : N("", !0),
            g("view", {
              class: B(["nut-tabbar-item_icon-box_nav-word", { "nut-tabbar-item_icon-box_big-word": !i.icon && !i.$slots.icon }])
            }, [
              _(i.$slots, "default", {}, () => [
                i.tabTitle ? (c(), f("view", ec, E(i.tabTitle), 1)) : N("", !0)
              ])
            ], 2)
          ])
        ]),
        _: 3
      }, 16)
    ], 6));
  }
});
we(ko);
const { create: tc } = x("elevator"), nc = tc({
  props: {
    height: {
      type: [Number, String],
      default: "200px"
    },
    acceptKey: {
      type: [String],
      default: "title"
    },
    indexList: {
      type: Array,
      default: () => []
    },
    isSticky: {
      type: [Boolean],
      default: !1
    },
    spaceHeight: {
      type: [Number],
      default: 23
    },
    titleHeight: {
      type: [Number],
      default: 35
    }
  },
  emits: ["clickItem", "clickIndex", "change"],
  setup(e, { emit: t, expose: n }) {
    const o = z(null), l = me({
      anchorIndex: 0,
      codeIndex: 0,
      listHeight: [],
      listGroup: [],
      touchState: {
        y1: 0,
        y2: 0
      },
      scrollStart: !1,
      currentIndex: 0,
      currentData: {},
      currentKey: "",
      scrollY: 0,
      diff: -1,
      fixedTop: 0
    }), s = T(() => o.value.clientHeight), a = (u, m) => u.getAttribute("data-" + m), r = (u) => {
      Ne(() => {
        !l.listGroup.includes(u) && u != null && l.listGroup.push(u);
      });
    }, i = () => {
      let u = 0;
      l.listHeight.push(u);
      for (let m = 0; m < l.listGroup.length; m++) {
        let h = l.listGroup[m];
        u += Math.floor(h.clientHeight), l.listHeight.push(u);
      }
    }, p = (u) => {
      !u && u !== 0 || (u < 0 && (u = 0), u > l.listHeight.length - 2 && (u = l.listHeight.length - 2), l.codeIndex = u, o.value.scrollTo(0, l.listHeight[u]));
    }, d = (u) => {
      l.scrollStart = !0;
      let m = a(u.target, "index"), h = u.touches[0];
      l.touchState.y1 = h.pageY, l.anchorIndex = +m, l.codeIndex = +m, p(+m);
    }, y = (u) => {
      let m = u.touches[0];
      l.touchState.y2 = m.pageY;
      let h = (l.touchState.y2 - l.touchState.y1) / e.spaceHeight | 0;
      l.codeIndex = l.anchorIndex + h, p(l.codeIndex);
    }, v = () => {
      l.scrollStart = !1;
    }, b = (u, m) => {
      t("clickItem", u, m), l.currentData = m, l.currentKey = u;
    }, w = (u) => {
      t("clickIndex", u);
    }, S = (u) => {
      let h = u.target.scrollTop;
      const $ = l.listHeight;
      l.scrollY = h;
      for (let L = 0; L < $.length - 1; L++) {
        let I = $[L], P = $[L + 1];
        if (l.scrollY >= I && l.scrollY < P) {
          l.currentIndex = L, l.diff = P - l.scrollY;
          return;
        }
      }
      l.currentIndex = $.length - 2;
    };
    return $e(() => {
      o.value && o.value.addEventListener("scroll", S);
    }), n({
      scrollTo: p
    }), Q(
      () => l.listGroup.length,
      () => {
        l.listHeight = [], Ne(i);
      }
    ), Q(
      () => l.diff,
      (u) => {
        const m = l.listHeight;
        let h = u > 0 && u < e.titleHeight ? u - e.titleHeight : 0;
        l.scrollY + s.value === m[m.length - 1] && h !== 0 && (h = 0), l.fixedTop !== h && (l.fixedTop = h);
      }
    ), Q(
      () => l.currentIndex,
      (u) => {
        t("change", u);
      }
    ), fe(q({}, be(l)), {
      clientHeight: s,
      setListGroup: r,
      listview: o,
      touchStart: d,
      touchMove: y,
      touchEnd: v,
      handleClickItem: b,
      handleClickIndex: w
    });
  }
}), oc = { class: "nut-elevator" }, lc = { class: "nut-elevator__list__item__code" }, sc = ["onClick"], ac = ["innerHTML"], rc = { class: "nut-elevator__list__fixed" }, ic = { class: "nut-elevator__list__fixed-title" }, uc = { class: "nut-elevator__bars__inner" }, cc = ["data-index", "onClick"];
function dc(e, t, n, o, l, s) {
  var a, r;
  return c(), f("view", oc, [
    g("view", {
      ref: "listview",
      class: "nut-elevator__list",
      style: A({ height: isNaN(+e.height) ? e.height : `${e.height}px` })
    }, [
      (c(!0), f(J, null, ie(e.indexList, (i) => (c(), f("view", {
        key: i[e.acceptKey],
        ref_for: !0,
        ref: e.setListGroup,
        class: "nut-elevator__list__item"
      }, [
        g("view", lc, E(i[e.acceptKey]), 1),
        (c(!0), f(J, null, ie(i.list, (p) => (c(), f("view", {
          key: p.id,
          class: B(["nut-elevator__list__item__name", {
            "nut-elevator__list__item__name--highcolor": e.currentData.id === p.id && e.currentKey === i[e.acceptKey]
          }]),
          onClick: (d) => e.handleClickItem(i[e.acceptKey], p)
        }, [
          e.$slots.default ? _(e.$slots, "default", {
            key: 1,
            item: p
          }) : (c(), f("span", {
            key: 0,
            innerHTML: p.name
          }, null, 8, ac))
        ], 10, sc))), 128))
      ]))), 128))
    ], 4),
    Ie(g("view", rc, [
      g("view", ic, E((r = (a = e.indexList) == null ? void 0 : a[e.currentIndex]) == null ? void 0 : r[e.acceptKey]), 1)
    ], 512), [
      [Me, e.scrollY > 0 && e.isSticky]
    ]),
    e.indexList.length ? Ie((c(), f("view", {
      key: 0,
      class: "nut-elevator__code--current"
    }, E(e.indexList[e.codeIndex][e.acceptKey]), 513)), [
      [Me, e.scrollStart]
    ]) : N("", !0),
    g("view", {
      class: "nut-elevator__bars",
      onTouchstart: t[0] || (t[0] = (...i) => e.touchStart && e.touchStart(...i)),
      onTouchmove: t[1] || (t[1] = De((...i) => e.touchMove && e.touchMove(...i), ["stop", "prevent"])),
      onTouchend: t[2] || (t[2] = (...i) => e.touchEnd && e.touchEnd(...i))
    }, [
      g("view", uc, [
        (c(!0), f(J, null, ie(e.indexList, (i, p) => (c(), f("view", {
          key: i[e.acceptKey],
          class: B(["nut-elevator__bars__inner__item", { active: i[e.acceptKey] === e.indexList[e.currentIndex][e.acceptKey] }]),
          "data-index": p,
          onClick: (d) => e.handleClickIndex(i[e.acceptKey])
        }, E(i[e.acceptKey]), 11, cc))), 128))
      ])
    ], 32)
  ]);
}
const Co = /* @__PURE__ */ ne(nc, [["render", dc]]), { create: fc } = x("pagination"), pc = "NutPagination", mc = fc({
  props: {
    modelValue: {
      type: Number,
      default: 1
    },
    mode: {
      type: String,
      default: "multi"
    },
    prevText: {
      type: String,
      default: ""
    },
    nextText: {
      type: String,
      default: ""
    },
    pageCount: {
      type: [String, Number],
      default: ""
    },
    totalItems: {
      type: [String, Number],
      default: "0"
    },
    itemsPerPage: {
      type: [String, Number],
      default: "10"
    },
    showPageSize: {
      type: [String, Number],
      default: "5"
    },
    forceEllipses: {
      type: Boolean,
      default: !1
    }
  },
  components: {},
  emits: ["change", "update:modelValue"],
  setup(e, { emit: t }) {
    const n = Se(pc), { modelValue: o, mode: l, showPageSize: s, forceEllipses: a } = be(e), r = T(() => {
      const { pageCount: y, totalItems: v, itemsPerPage: b } = be(e), w = +y.value || Math.ceil(+v.value / +b.value);
      return Math.max(1, w);
    }), i = (y, v) => {
      y > r.value || y < 1 || (y != o.value && t("update:modelValue", y), v && t("change", y));
    }, p = (y, v, b = !1) => ({ number: y, text: v, active: b }), d = T(() => {
      if (l.value == "simple")
        return;
      let y = [];
      const v = r.value, b = +s.value;
      let w = 1, S = v;
      const u = v > b;
      u && (w = Math.max(o.value - Math.floor(b / 2), 1), S = w + +b - 1, S > v && (S = v, w = S - +b + 1));
      for (var m = w; m <= S; m++) {
        const h = p(m, m, o.value == m);
        y.push(h);
      }
      if (u && b > 0 && a.value) {
        if (w > 1) {
          const h = p(w - 1, "...");
          y.unshift(h);
        }
        if (S < v) {
          const h = p(S + 1, "...");
          y.push(h);
        }
      }
      return y;
    });
    return $t(() => {
      i(o.value, !1);
    }), {
      modelValue: o,
      select: i,
      countRef: r,
      mode: l,
      pages: d,
      forceEllipses: a,
      translate: n
    };
  }
}), hc = { class: "nut-pagination" }, gc = {
  key: 0,
  class: "nut-pagination-contain"
}, vc = ["onClick"], yc = {
  key: 1,
  class: "nut-pagination-contain"
}, bc = { class: "nut-pagination-simple" };
function $c(e, t, n, o, l, s) {
  return c(), f("view", hc, [
    g("view", {
      class: B(["nut-pagination-prev", e.mode == "multi" ? "" : "simple-border", e.modelValue == 1 ? "disabled" : ""]),
      onClick: t[0] || (t[0] = (a) => e.select(e.modelValue - 1, !0))
    }, [
      _(e.$slots, "prev-text", {}, () => [
        ge(E(e.prevText || e.translate("prev")), 1)
      ])
    ], 2),
    e.mode == "multi" ? (c(), f("view", gc, [
      (c(!0), f(J, null, ie(e.pages, (a, r) => (c(), f("view", {
        key: r + "pagination",
        class: B(["nut-pagination-item", a.active ? "active" : ""]),
        onClick: (i) => e.select(a.number, !0)
      }, [
        _(e.$slots, "page", { item: a }, () => [
          ge(E(a.text), 1)
        ])
      ], 10, vc))), 128))
    ])) : N("", !0),
    e.mode == "simple" ? (c(), f("view", yc, [
      g("view", bc, E(e.modelValue) + "/" + E(e.countRef), 1)
    ])) : N("", !0),
    g("view", {
      class: B(["nut-pagination-next", e.modelValue >= e.countRef ? "disabled" : ""]),
      onClick: t[1] || (t[1] = (a) => e.select(e.modelValue + 1, !0))
    }, [
      _(e.$slots, "next-text", {}, () => [
        ge(E(e.nextText || e.translate("next")), 1)
      ])
    ], 2)
  ]);
}
const wc = /* @__PURE__ */ ne(mc, [["render", $c]]), Mt = window, kc = typeof window != "undefined";
function Cc() {
  return typeof Mt != "undefined" ? Mt.requestAnimationFrame || Mt.webkitRequestAnimationFrame || function(e) {
    Mt.setTimeout(e, 1e3 / 60);
  } : function(e) {
    setTimeout(e, 1e3 / 60);
  };
}
function Sc(e) {
  kc ? cancelAnimationFrame(e) : clearTimeout(e);
}
const Re = Cc(), Ln = 10;
function Tc(e, t) {
  return e > t && e > Ln ? "horizontal" : t > e && t > Ln ? "vertical" : "";
}
function xe() {
  const e = z(0), t = z(0), n = z(0), o = z(0), l = z(0), s = z(0), a = z(0), r = z(0), i = z(""), p = () => i.value === "vertical", d = () => i.value === "horizontal", y = () => {
    l.value = 0, s.value = 0, a.value = 0, r.value = 0, i.value = "";
  };
  return {
    move: (w) => {
      const S = w.touches[0];
      l.value = S.clientX - e.value, s.value = S.clientY - t.value, n.value = S.clientX, o.value = S.clientY, a.value = Math.abs(l.value), r.value = Math.abs(s.value), i.value || (i.value = Tc(a.value, r.value));
    },
    start: (w) => {
      y(), e.value = w.touches[0].clientX, t.value = w.touches[0].clientY;
    },
    reset: y,
    startX: e,
    startY: t,
    moveX: n,
    moveY: o,
    deltaX: l,
    deltaY: s,
    offsetX: a,
    offsetY: r,
    direction: i,
    isVertical: p,
    isHorizontal: d
  };
}
const Nc = (e, t, n, o) => {
  const l = z(), s = z({ width: 0, height: 0 }), a = () => Ge(void 0, null, function* () {
    var v, b;
    n && n.getEnv() !== n.ENV_TYPE.WEB ? o(l).then(
      (w) => {
        s.value.width = w.width || 0, s.value.height = w.height || 0;
      },
      () => {
      }
    ) : (s.value.width = ((v = l.value) == null ? void 0 : v.clientWidth) || 0, s.value.height = ((b = l.value) == null ? void 0 : b.clientHeight) || 0);
  });
  $e(() => {
    setTimeout(() => {
      a();
    }, 100);
  });
  const r = me({
    offset: 0,
    moving: !1
  }), i = xe();
  let p = "";
  const d = (v, b) => {
    var S;
    let w = v;
    switch (e.direction == "horizontal" ? (p = v > 0 ? "right" : "left", w = Math.abs(w) / s.value.width * 100) : (p = b > 0 ? "bottom" : "top", w = b, w = Math.abs(w) / ((S = s.value) == null ? void 0 : S.height) * 100), w > 85 && (w = 85), p) {
      case "left":
      case "top":
        t.isEnd() && (w = 0, r.moving = !1);
        break;
      case "right":
      case "bottom":
        w = -w, t.isBegin() && (w = 0, r.moving = !1);
        break;
    }
    r.offset = w;
  };
  return { touchMethods: {
    onTouchStart(v) {
      e.swipeable && i.start(v);
    },
    onTouchMove(v) {
      e.swipeable && (i.move(v), r.moving = !0, d(i.deltaX.value, i.deltaY.value), e.direction == "horizontal" && i.isHorizontal() && (v.preventDefault(), v.stopPropagation()), e.direction == "vertical" && i.isVertical() && (v.preventDefault(), v.stopPropagation()));
    },
    onTouchEnd() {
      if (r.moving)
        switch (r.moving = !1, p) {
          case "left":
          case "top":
            r.offset > 35 && t.next();
            break;
          case "right":
          case "bottom":
            r.offset < -35 && t.prev();
            break;
        }
    }
  }, touchState: r, tabsContentRef: l };
}, So = Symbol("nut-tab");
class _c {
  constructor() {
    O(this, "title", "");
    O(this, "titleSlot");
    O(this, "paneKey", "");
    O(this, "disabled", !1);
  }
}
const { create: Dc } = x("tabs"), Ic = Dc({
  components: { NutSticky: mo, JoySmile: ua },
  props: {
    modelValue: {
      type: [String, Number],
      default: 0
    },
    color: {
      type: String,
      default: ""
    },
    direction: {
      type: String,
      default: "horizontal"
    },
    size: {
      type: String,
      default: "normal"
    },
    type: {
      type: String,
      default: "line"
    },
    titleScroll: {
      type: Boolean,
      default: !1
    },
    ellipsis: {
      type: Boolean,
      default: !0
    },
    swipeable: {
      type: Boolean,
      default: !1
    },
    autoHeight: {
      type: Boolean,
      default: !1
    },
    background: {
      type: String,
      default: ""
    },
    animatedTime: {
      type: [Number, String],
      default: 300
    },
    titleGutter: {
      type: [Number, String],
      default: 0
    },
    sticky: {
      type: Boolean,
      default: !1
    },
    top: {
      type: Number,
      default: 0
    },
    align: {
      type: String,
      default: "center"
    }
  },
  emits: ["update:modelValue", "click", "change"],
  setup(e, { emit: t, slots: n }) {
    const o = z(null);
    let l;
    Oe(So, {
      activeKey: T(() => e.modelValue || "0"),
      autoHeight: T(() => e.autoHeight),
      animatedTime: T(() => e.animatedTime)
    });
    const s = z([]), a = (k) => {
      k.forEach((D, V) => {
        var X, le, W, Y, R, ee, K, se, ue;
        let j = D.type;
        if (j = j.name || j, j == "NutTabPane") {
          let de = new _c();
          if ((X = D.props) != null && X.title || (le = D.props) != null && le["pane-key"] || (W = D.props) != null && W.paneKey) {
            let Ce = Kt((Y = D.props) == null ? void 0 : Y["pane-key"]), Le = Ce == "number" || Ce == "string" ? String((R = D.props) == null ? void 0 : R["pane-key"]) : null, H = Kt((ee = D.props) == null ? void 0 : ee.paneKey), Z = H == "number" || H == "string" ? String((K = D.props) == null ? void 0 : K.paneKey) : null;
            de.title = (se = D.props) == null ? void 0 : se.title, de.paneKey = Le || Z || String(V), de.disabled = (ue = D.props) == null ? void 0 : ue.disabled;
          }
          s.value.push(de);
        } else {
          if (D.children == " ")
            return;
          a(D.children);
        }
      });
    }, r = z(e.modelValue || 0), i = (k) => {
      let D = s.value.findIndex((V) => V.paneKey == k);
      s.value.length == 0 || D == -1 || (r.value = D);
    }, p = T(() => e.titleScroll && e.direction === "vertical"), d = z(), y = z([]), v = (k) => {
      const D = d.value, V = y.value;
      if (!D || !V || !V[r.value])
        return;
      const j = V[r.value];
      let X = 0;
      e.direction === "vertical" ? X = j.offsetTop - D.offsetTop + 10 - (D.offsetHeight - j.offsetHeight) / 2 : X = j.offsetLeft - (D.offsetWidth - j.offsetWidth) / 2, b(D, X, k ? 0 : 0.3, e.direction);
    }, b = (k, D, V, j) => {
      let X = 0;
      const le = j === "horizontal" ? k.scrollLeft : k.scrollTop, W = V === 0 ? 1 : Math.round(V * 1e3 / 16);
      function Y() {
        j === "horizontal" ? k.scrollLeft += (D - le) / W : k.scrollTop += (D - le) / W, ++X < W && Re(Y);
      }
      Y();
    }, w = (k = ((D) => (D = n.default) == null ? void 0 : D.call(n))()) => {
      s.value = [], k = k == null ? void 0 : k.filter((V) => typeof V.children != "string"), k && k.length && a(k), i(e.modelValue), Ne(() => {
        v();
      });
    }, S = (k) => {
      l = k.fixed;
    };
    Q(
      () => {
        var k;
        return (k = n.default) == null ? void 0 : k.call(n);
      },
      (k) => {
        w(k);
      }
    );
    const u = () => window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
    Q(
      () => e.modelValue,
      (k) => {
        if (i(k), v(), l) {
          let D = Ye(o.value).top + u(), V = Math.ceil(D - e.top);
          window.scrollTo({
            top: V,
            behavior: "smooth"
          });
        }
      }
    ), $e(w), Ct(w);
    const m = {
      isBegin: () => r.value == 0,
      isEnd: () => r.value == s.value.length - 1,
      next: () => {
        r.value += 1;
        const k = s.value[r.value].disabled;
        if (m.isEnd() && k) {
          m.prev();
          return;
        }
        if (k && r.value < s.value.length - 1) {
          m.next();
          return;
        }
        m.updateValue(s.value[r.value]);
      },
      prev: () => {
        r.value -= 1;
        const k = s.value[r.value].disabled;
        if (m.isBegin() && k) {
          m.next();
          return;
        }
        if (k && r.value > 0) {
          m.prev();
          return;
        }
        m.updateValue(s.value[r.value]);
      },
      updateValue: (k) => {
        t("update:modelValue", k.paneKey), t("change", k);
      },
      tabChange: (k, D) => {
        t("click", k), !(k.disabled || r.value == D) && (r.value = D, m.updateValue(k));
      },
      setTabItemRef: (k, D) => {
        y.value[D] = k;
      }
    }, { tabsContentRef: h, touchState: $, touchMethods: L } = Nc(e, m), I = T(() => {
      let k = r.value * 100;
      $.moving && (k += $.offset);
      let D = {
        transform: e.direction == "horizontal" ? `translate3d(-${k}%, 0, 0)` : `translate3d( 0,-${k}%, 0)`,
        transitionDuration: $.moving ? void 0 : `${e.animatedTime}ms`
      };
      return e.animatedTime == 0 && (D = {}), D;
    }), P = T(() => ({
      background: e.background
    })), M = T(() => ({
      color: e.type == "smile" ? e.color : "",
      background: e.type == "line" ? e.color : ""
    })), C = T(() => {
      if (!e.titleGutter)
        return {};
      const k = Be(e.titleGutter);
      return e.direction === "vertical" ? { paddingTop: k, paddingBottom: k } : { paddingLeft: k, paddingRight: k };
    });
    return q(q({
      navRef: d,
      tabsContentRef: h,
      titles: s,
      contentStyle: I,
      tabsNavStyle: P,
      titleStyle: C,
      tabsActiveStyle: M,
      container: o,
      getScrollY: p,
      onStickyScroll: S
    }, m), L);
  }
}), Bc = ["onClick"], Mc = ["onClick"];
function Lc(e, t, n, o, l, s) {
  const a = U("JoySmile"), r = U("nut-sticky");
  return c(), f("view", {
    ref: "container",
    class: B(["nut-tabs", [e.direction]])
  }, [
    e.sticky ? (c(), G(r, {
      key: 0,
      top: e.top,
      container: e.container,
      onScroll: e.onStickyScroll
    }, {
      default: oe(() => [
        g("view", {
          ref: "navRef",
          class: B(["nut-tabs__titles", {
            "nut-tabs__titles-left": e.align === "left",
            [e.type]: e.type,
            scrollable: e.titleScroll,
            [e.size]: e.size
          }]),
          style: A(e.tabsNavStyle)
        }, [
          e.$slots.titles ? _(e.$slots, "titles", { key: 0 }) : (c(!0), f(J, { key: 1 }, ie(e.titles, (i, p) => (c(), f("view", {
            key: i.paneKey,
            class: B(["nut-tabs__titles-item", {
              "nut-tabs__titles-item-left": e.align === "left",
              active: i.paneKey == e.modelValue,
              disabled: i.disabled
            }]),
            style: A(e.titleStyle),
            onClick: (d) => e.tabChange(i, p)
          }, [
            e.type == "line" ? (c(), f("view", {
              key: 0,
              class: "nut-tabs__titles-item__line",
              style: A(e.tabsActiveStyle)
            }, null, 4)) : N("", !0),
            e.type == "smile" ? (c(), f("view", {
              key: 1,
              class: "nut-tabs__titles-item__smile",
              style: A(e.tabsActiveStyle)
            }, [
              te(a, { color: e.color }, null, 8, ["color"])
            ], 4)) : N("", !0),
            g("view", {
              class: B(["nut-tabs__titles-item__text", { ellipsis: e.ellipsis }])
            }, E(i.title), 3)
          ], 14, Bc))), 128))
        ], 6)
      ]),
      _: 3
    }, 8, ["top", "container", "onScroll"])) : (c(), f("view", {
      key: 1,
      ref: "navRef",
      class: B(["nut-tabs__titles", { "nut-tabs__titles-left": e.align === "left", [e.type]: e.type, scrollable: e.titleScroll, [e.size]: e.size }]),
      style: A(e.tabsNavStyle)
    }, [
      e.$slots.titles ? _(e.$slots, "titles", { key: 0 }) : (c(!0), f(J, { key: 1 }, ie(e.titles, (i, p) => (c(), f("view", {
        key: i.paneKey,
        ref_for: !0,
        ref: (d) => e.setTabItemRef(d, p),
        class: B(["nut-tabs__titles-item", {
          "nut-tabs__titles-item-left": e.align === "left",
          active: i.paneKey == e.modelValue,
          disabled: i.disabled
        }]),
        style: A(e.titleStyle),
        onClick: (d) => e.tabChange(i, p)
      }, [
        e.type == "line" ? (c(), f("view", {
          key: 0,
          class: "nut-tabs__titles-item__line",
          style: A(e.tabsActiveStyle)
        }, null, 4)) : N("", !0),
        e.type == "smile" ? (c(), f("view", {
          key: 1,
          class: "nut-tabs__titles-item__smile",
          style: A(e.tabsActiveStyle)
        }, [
          te(a, { color: e.color }, null, 8, ["color"])
        ], 4)) : N("", !0),
        g("view", {
          class: B(["nut-tabs__titles-item__text", { ellipsis: e.ellipsis }])
        }, E(i.title), 3)
      ], 14, Mc))), 128))
    ], 6)),
    g("view", {
      ref: "tabsContentRef",
      class: "nut-tabs__content",
      style: A(e.contentStyle),
      onTouchstart: t[0] || (t[0] = (...i) => e.onTouchStart && e.onTouchStart(...i)),
      onTouchmove: t[1] || (t[1] = (...i) => e.onTouchMove && e.onTouchMove(...i)),
      onTouchend: t[2] || (t[2] = (...i) => e.onTouchEnd && e.onTouchEnd(...i)),
      onTouchcancel: t[3] || (t[3] = (...i) => e.onTouchEnd && e.onTouchEnd(...i))
    }, [
      _(e.$slots, "default")
    ], 36)
  ], 2);
}
const To = /* @__PURE__ */ ne(Ic, [["render", Lc]]), { create: Pc } = x("tab-pane"), Ec = Pc({
  props: {
    title: {
      type: [String, Number],
      default: ""
    },
    paneKey: {
      type: [String, Number],
      default: ""
    },
    disabled: {
      type: Boolean,
      default: !1
    }
  },
  emits: ["click"],
  setup(e) {
    const t = Ae(So), n = T(() => ({
      display: t.animatedTime.value == 0 && e.paneKey != t.activeKey.value ? "none" : void 0
    }));
    return fe(q({}, t), {
      paneStyle: n
    });
  }
});
function Ac(e, t, n, o, l, s) {
  return c(), f("view", {
    class: B(["nut-tab-pane", { inactive: e.paneKey != e.activeKey && e.autoHeight }]),
    style: A(e.paneStyle)
  }, [
    _(e.$slots, "default")
  ], 6);
}
const No = /* @__PURE__ */ ne(Ec, [["render", Ac]]), zc = {
  key: 0,
  class: "nut-indicator--number"
}, Vc = {
  key: 1,
  class: "nut-indicator--dot"
}, _o = /* @__PURE__ */ ye({
  name: "NutIndicator",
  __name: "indicator",
  props: {
    size: { default: 3 },
    current: { default: 1 },
    block: { type: Boolean, default: !1 },
    align: { default: "center" },
    fillZero: { type: Boolean, default: !0 }
  },
  setup(e) {
    const t = e, n = T(() => {
      const o = "nut-indicator";
      return {
        [o]: !0,
        [`${o}--block`]: t.block,
        [`${o}--align__${t.align}`]: t.block && t.align
      };
    });
    return (o, l) => (c(), f("view", {
      class: B(n.value)
    }, [
      (c(!0), f(J, null, ie(o.size, (s) => (c(), f(J, { key: s }, [
        s === o.current ? (c(), f("view", zc, E(o.fillZero && pe(Je)(s) || s), 1)) : (c(), f("view", Vc))
      ], 64))), 128))
    ], 2));
  }
});
we(_o);
const { create: Oc } = x("side-navbar"), Hc = Oc({
  props: {
    offset: {
      type: [String, Number],
      default: 15
    }
  },
  setup: (e) => {
    const t = z(null), n = me({
      count: 1,
      observer: null
    }), o = (s, a = 1) => {
      var r;
      for (let i = 0; i < s.length; i++) {
        let p = s[i];
        (r = p == null ? void 0 : p.children) != null && r[0] && (p.children[0].style.paddingLeft = +e.offset * a + "px", p.className.includes("nut-side-navbar-item") || o(Array.from(p.children[1].children), ++n.count));
      }
      n.count--;
    }, l = () => {
      let s = t.value.childNodes;
      s != null && s.length && (s = Array.from(s).filter((a) => a.nodeType !== 3).map((a) => a), o(s));
    };
    return $e(() => {
      l(), n.observer = new MutationObserver(function() {
        n.count = 1, l();
      }), n.observer.observe(t.value, {
        attributes: !1,
        childList: !0,
        characterData: !1,
        subtree: !0
      });
    }), fe(q({}, be(n)), {
      list: t
    });
  }
}), Rc = { class: "nut-side-navbar" }, Fc = { class: "nut-side-navbar__content" }, Wc = {
  ref: "list",
  class: "nut-side-navbar__content__list"
};
function Yc(e, t, n, o, l, s) {
  return c(), f("view", Rc, [
    g("view", Fc, [
      g("view", Wc, [
        _(e.$slots, "default")
      ], 512)
    ])
  ]);
}
const jc = /* @__PURE__ */ ne(Hc, [["render", Yc]]), { create: Kc } = x("side-navbar-item"), Uc = Kc({
  props: {
    title: {
      type: String,
      default: ""
    }
  }
}), Xc = { class: "nut-side-navbar-item" }, qc = { class: "nut-side-navbar-item__title" };
function Zc(e, t, n, o, l, s) {
  return c(), f("view", Xc, [
    g("span", qc, E(e.title), 1)
  ]);
}
const Gc = /* @__PURE__ */ ne(Uc, [["render", Zc]]), { create: Jc } = x("sub-side-navbar"), Qc = Jc({
  props: {
    title: {
      type: String,
      default: ""
    },
    open: {
      type: Boolean,
      default: !0
    }
  },
  components: { ArrowDown2: Al, ArrowUp2: Rl },
  emits: ["titleClick"],
  setup: (e, { emit: t }) => {
    const n = me({
      direction: ""
    }), o = T(() => ({
      height: n.direction ? "0px" : "auto"
    })), l = () => {
      t("titleClick"), n.direction = n.direction ? "" : "up";
    };
    return $e(() => {
      n.direction = e.open ? "" : "up";
    }), fe(q({}, be(n)), {
      style: o,
      handleClick: l
    });
  }
}), xc = { class: "nut-sub-side-navbar" }, ed = { class: "nut-sub-side-navbar__title__text" }, td = { class: "nut-sub-side-navbar__title__icon" };
function nd(e, t, n, o, l, s) {
  const a = U("ArrowDown2"), r = U("ArrowUp2");
  return c(), f("view", xc, [
    g("view", {
      class: "nut-sub-side-navbar__title",
      onClick: t[0] || (t[0] = De((...i) => e.handleClick && e.handleClick(...i), ["stop"]))
    }, [
      g("span", ed, E(e.title), 1),
      g("span", td, [
        e.direction ? (c(), G(r, { key: 1 })) : (c(), G(a, { key: 0 }))
      ])
    ]),
    Ie(g("view", {
      class: B(["nut-sub-side-navbar__list", e.direction ? "nutFadeOut" : "nutFadeIn"]),
      style: A(e.style)
    }, [
      _(e.$slots, "default")
    ], 6), [
      [Me, !e.direction]
    ])
  ]);
}
const od = /* @__PURE__ */ ne(Qc, [["render", nd]]), Do = Symbol("nut-form"), Io = Symbol("nut-form-disabled"), Bo = Symbol("nut-form-tip"), Ze = (e) => {
  const { parent: t } = Tt(Io);
  return T(() => {
    var n;
    return e.value || ((n = t == null ? void 0 : t.props) == null ? void 0 : n.disabled) || !1;
  });
}, { componentName: ld, create: sd } = x("range"), ad = sd({
  props: {
    range: {
      type: Boolean,
      default: !1
    },
    disabled: Boolean,
    activeColor: String,
    inactiveColor: String,
    buttonColor: String,
    vertical: {
      type: Boolean,
      default: !1
    },
    marks: {
      type: Object,
      default: {}
    },
    hiddenRange: {
      type: Boolean,
      default: !1
    },
    hiddenTag: {
      type: Boolean,
      default: !1
    },
    min: {
      type: [Number, String],
      default: 0
    },
    max: {
      type: [Number, String],
      default: 100
    },
    step: {
      type: [Number, String],
      default: 1
    },
    modelValue: {
      type: [Number, Array],
      default: 0
    }
  },
  emits: ["change", "dragEnd", "dragStart", "update:modelValue"],
  setup(e, { emit: t }) {
    const n = Ze(Qe(e, "disabled")), o = z(0);
    let l, s;
    const a = z(), r = z(), i = xe(), p = T(() => {
      const { marks: W, max: Y, min: R } = e;
      return Object.keys(W).map(parseFloat).sort((se, ue) => se - ue).filter((se) => se >= +R && se <= +Y);
    }), d = T(() => Number(e.max) - Number(e.min)), y = T(() => {
      const W = ld;
      return {
        [W]: !0,
        [`${W}-disabled`]: n.value,
        [`${W}-vertical`]: e.vertical,
        [`${W}-show-number`]: !e.hiddenRange
      };
    }), v = T(() => {
      const W = "nut-range-container";
      return {
        [W]: !0,
        [`${W}-vertical`]: e.vertical
      };
    }), b = T(() => ({
      background: e.inactiveColor
    })), w = T(() => ({
      borderColor: e.buttonColor
    })), S = (W) => !!e.range && Array.isArray(W), u = () => {
      const { modelValue: W, min: Y } = e;
      return S(W) ? `${(W[1] - W[0]) * 100 / d.value}%` : `${(W - Number(Y)) * 100 / d.value}%`;
    }, m = () => {
      const { modelValue: W, min: Y } = e;
      return S(W) ? `${(W[0] - Number(Y)) * 100 / d.value}%` : "0%";
    }, h = T(() => e.vertical ? {
      height: u(),
      top: m(),
      background: e.activeColor,
      transition: r.value ? "none" : void 0
    } : {
      width: u(),
      left: m(),
      background: e.activeColor,
      transition: r.value ? "none" : void 0
    }), $ = (W) => {
      const Y = "nut-range-mark", { modelValue: R, max: ee, min: K } = e;
      let se = Number(K), ue = Number(ee);
      if (e.range) {
        const [Ce, Le] = R;
        se = Ce, ue = Le;
      } else
        ue = R;
      let de = W <= +ue && W >= se;
      return {
        [`${Y}-text`]: !0,
        [`${Y}-text-active`]: de
      };
    }, L = (W) => {
      const { min: Y, vertical: R } = e;
      let ee = {
        left: `${(W - Number(Y)) / d.value * 100}%`
      };
      return R && (ee = {
        top: `${(W - Number(Y)) / d.value * 100}%`
      }), ee;
    }, I = (W) => {
      const { modelValue: Y, max: R, min: ee } = e;
      let K = Number(ee), se = Number(R);
      if (e.range) {
        const [Ce, Le] = Y;
        K = Ce, se = Le;
      }
      return {
        background: W <= se && W >= K ? e.activeColor : e.inactiveColor
      };
    }, P = (W) => {
      const { min: Y, max: R, step: ee } = e;
      return W = Math.max(+Y, Math.min(W, +R)), Math.round(W / +ee) * +ee;
    }, M = (W, Y) => JSON.stringify(W) === JSON.stringify(Y), C = (W) => W[0] > W[1] ? W.slice(0).reverse() : W, k = (W, Y) => {
      S(W) ? W = C(W).map(P) : W = P(W), M(W, e.modelValue) || t("update:modelValue", W), Y && !M(W, l) && t("change", W);
    }, D = (W) => {
      if (n.value)
        return;
      const { min: Y, modelValue: R } = e, ee = Ye(a);
      let K = W.clientX - ee.left, se = ee.width;
      e.vertical && (K = W.clientY - ee.top, se = ee.height);
      const ue = Number(Y) + K / se * d.value;
      if (S(R)) {
        const [de, Ce] = R, Le = (de + Ce) / 2;
        ue <= Le ? k([ue, Ce], !0) : k([de, ue], !0);
      } else
        k(ue, !0);
    }, V = (W) => {
      n.value || (i.start(W), s = e.modelValue, S(s) ? l = s.map(P) : l = P(s), r.value = "start");
    }, j = (W) => {
      if (n.value)
        return;
      r.value === "start" && t("dragStart"), i.move(W), r.value = "draging";
      const Y = Ye(a);
      let R = i.deltaX.value, ee = Y.width, K = R / ee * d.value;
      e.vertical && (R = i.deltaY.value, ee = Y.height, K = R / ee * d.value), S(l) ? s[o.value] = l[o.value] + K : s = l + K, k(s);
    }, X = () => {
      n.value || (r.value === "draging" && (k(s, !0), t("dragEnd")), r.value = "");
    }, le = (W) => qn(e.modelValue) && typeof W == "number" ? e.modelValue[W] : Number(e.modelValue);
    return fe(q({
      root: a,
      classes: y,
      wrapperStyle: b,
      buttonStyle: w,
      onClick: D,
      onTouchStart: V,
      onTouchMove: j,
      onTouchEnd: X
    }, be(e)), {
      barStyle: h,
      curValue: le,
      buttonIndex: o,
      containerClasses: v,
      markClassName: $,
      marksStyle: L,
      marksList: p,
      tickStyle: I,
      disabled: n
    });
  }
}), rd = {
  key: 0,
  class: "nut-range-min"
}, id = {
  key: 0,
  class: "nut-range-mark"
}, ud = ["tabindex", "aria-valuemin", "aria-valuenow", "aria-valuemax", "onTouchstart"], cd = {
  key: 0,
  class: "number"
}, dd = ["tabindex", "aria-valuemin", "aria-valuenow", "aria-valuemax"], fd = {
  key: 0,
  class: "number"
}, pd = {
  key: 1,
  class: "nut-range-max"
};
function md(e, t, n, o, l, s) {
  return c(), f("view", {
    class: B(e.containerClasses)
  }, [
    e.hiddenRange ? N("", !0) : (c(), f("view", rd, E(+e.min), 1)),
    g("view", {
      ref: "root",
      style: A(e.wrapperStyle),
      class: B(e.classes),
      onClick: t[9] || (t[9] = De((...a) => e.onClick && e.onClick(...a), ["stop"]))
    }, [
      e.marksList.length > 0 ? (c(), f("view", id, [
        (c(!0), f(J, null, ie(e.marksList, (a) => (c(), f("span", {
          key: a,
          class: B(e.markClassName(a)),
          style: A(e.marksStyle(a))
        }, [
          ge(E(a) + " ", 1),
          g("span", {
            class: "nut-range-tick",
            style: A(e.tickStyle(a))
          }, null, 4)
        ], 6))), 128))
      ])) : N("", !0),
      g("view", {
        class: "nut-range-bar",
        style: A(e.barStyle)
      }, [
        e.range ? (c(), f(J, { key: 0 }, ie([0, 1], (a) => g("view", {
          key: a,
          role: "slider",
          class: B({
            "nut-range-button-wrapper-left": a == 0,
            "nut-range-button-wrapper-right": a == 1
          }),
          tabindex: e.disabled ? -1 : 0,
          "aria-valuemin": +e.min,
          "aria-valuenow": e.curValue(a),
          "aria-valuemax": +e.max,
          "aria-orientation": "horizontal",
          onTouchstart: De(
            (r) => {
              typeof a == "number" && (e.buttonIndex = a), e.onTouchStart(r);
            },
            ["stop", "prevent"]
          ),
          onTouchmove: t[0] || (t[0] = De((...r) => e.onTouchMove && e.onTouchMove(...r), ["stop", "prevent"])),
          onTouchend: t[1] || (t[1] = De((...r) => e.onTouchEnd && e.onTouchEnd(...r), ["stop", "prevent"])),
          onTouchcancel: t[2] || (t[2] = De((...r) => e.onTouchEnd && e.onTouchEnd(...r), ["stop", "prevent"])),
          onClick: t[3] || (t[3] = (r) => r.stopPropagation())
        }, [
          e.$slots.button ? _(e.$slots, "button", { key: 0 }) : (c(), f("view", {
            key: 1,
            class: "nut-range-button",
            style: A(e.buttonStyle)
          }, [
            e.hiddenTag ? N("", !0) : (c(), f("view", cd, E(e.curValue(a)), 1))
          ], 4))
        ], 42, ud)), 64)) : (c(), f("view", {
          key: 1,
          role: "slider",
          class: "nut-range-button-wrapper",
          tabindex: e.disabled ? -1 : 0,
          "aria-valuemin": +e.min,
          "aria-valuenow": e.curValue(),
          "aria-valuemax": +e.max,
          "aria-orientation": "horizontal",
          onTouchstart: t[4] || (t[4] = De(
            (a) => {
              e.onTouchStart(a);
            },
            ["stop", "prevent"]
          )),
          onTouchmove: t[5] || (t[5] = De((...a) => e.onTouchMove && e.onTouchMove(...a), ["stop", "prevent"])),
          onTouchend: t[6] || (t[6] = De((...a) => e.onTouchEnd && e.onTouchEnd(...a), ["stop", "prevent"])),
          onTouchcancel: t[7] || (t[7] = De((...a) => e.onTouchEnd && e.onTouchEnd(...a), ["stop", "prevent"])),
          onClick: t[8] || (t[8] = (a) => a.stopPropagation())
        }, [
          e.$slots.button ? _(e.$slots, "button", { key: 0 }) : (c(), f("view", {
            key: 1,
            class: "nut-range-button",
            style: A(e.buttonStyle)
          }, [
            e.hiddenTag ? N("", !0) : (c(), f("view", fd, E(e.curValue()), 1))
          ], 4))
        ], 40, dd))
      ], 4)
    ], 6),
    e.hiddenRange ? N("", !0) : (c(), f("view", pd, E(+e.max), 1))
  ], 2);
}
const Mo = /* @__PURE__ */ ne(ad, [["render", md]]), { create: hd } = x("searchbar"), gd = "NutSearchbar", vd = hd({
  props: {
    modelValue: {
      type: [String, Number],
      default: ""
    },
    inputType: {
      type: String,
      default: "text"
    },
    label: {
      type: String,
      default: ""
    },
    shape: {
      type: String,
      default: "round"
    },
    maxLength: {
      type: [String, Number],
      default: "9999"
    },
    placeholder: {
      type: String,
      default: ""
    },
    clearable: {
      type: Boolean,
      default: !0
    },
    clearIcon: {
      type: Object,
      default: () => tn
    },
    background: {
      type: String,
      default: ""
    },
    inputBackground: {
      type: String,
      default: ""
    },
    focusStyle: {
      type: Object,
      default: () => ({})
    },
    autofocus: {
      type: Boolean,
      default: !1
    },
    disabled: {
      type: Boolean,
      default: !1
    },
    readonly: {
      type: Boolean,
      default: !1
    },
    inputAlign: {
      type: String,
      default: "left"
    },
    safeAreaInsetBottom: {
      type: Boolean,
      default: !1
    }
  },
  emits: [
    "change",
    "update:modelValue",
    "blur",
    "focus",
    "clear",
    "search",
    "clickInput",
    "clickLeftIcon",
    "clickRightIcon"
  ],
  setup(e, { emit: t }) {
    const n = Ze(Qe(e, "disabled")), o = Se(gd), l = me({
      active: !1
    }), s = T(() => ({
      background: e.background
    })), a = T(() => ({
      background: e.inputBackground
    })), r = (h) => {
      let L = h.target.value;
      e.maxLength && L.length > Number(e.maxLength) && (L = L.slice(0, Number(e.maxLength))), t("update:modelValue", L, h), t("change", L, h);
    }, i = z({}), p = (h) => {
      let L = h.target.value;
      l.active = !0, i.value = e.focusStyle, t("focus", L, h);
    }, d = (h) => {
      setTimeout(() => {
        l.active = !1;
      }, 0);
      let L = h.target.value;
      e.maxLength && L.length > Number(e.maxLength) && (L = L.slice(0, Number(e.maxLength))), i.value = {}, t("blur", L, h);
    }, y = (h) => {
      t("update:modelValue", "", h), t("change", "", h), t("clear", "");
    }, v = () => {
      t("search", e.modelValue);
    }, b = (h) => {
      t("clickInput", h);
    }, w = (h) => {
      t("clickLeftIcon", e.modelValue, h);
    }, S = (h) => {
      t("clickRightIcon", e.modelValue, h);
    }, u = T(() => ({
      textAlign: e.inputAlign
    })), m = z(null);
    return $e(() => {
      e.autofocus && m.value.focus();
    }), fe(q({
      renderIcon: ot,
      inputsearch: m
    }, be(l)), {
      valueChange: r,
      valueFocus: p,
      valueBlur: d,
      handleClear: y,
      handleSubmit: v,
      searchbarStyle: s,
      inputSearchbarStyle: a,
      focusCss: i,
      translate: o,
      clickInput: b,
      leftIconClick: w,
      rightIconClick: S,
      styleSearchbar: u,
      disabled: n
    });
  }
}), yd = {
  key: 0,
  class: "nut-searchbar__search-label"
}, bd = {
  key: 1,
  class: "nut-searchbar__search-icon nut-searchbar__left-search-icon"
}, $d = ["type", "maxlength", "placeholder", "value", "disabled", "readonly"], wd = {
  key: 1,
  class: "nut-searchbar__search-icon nut-searchbar__iptright-search-icon"
}, kd = {
  key: 2,
  class: "nut-searchbar__search-icon nut-searchbar__right-search-icon"
};
function Cd(e, t, n, o, l, s) {
  return c(), f("view", {
    class: B(["nut-searchbar", { "safe-area-inset-bottom": e.safeAreaInsetBottom }]),
    style: A(e.searchbarStyle)
  }, [
    e.label ? (c(), f("span", yd, E(e.label), 1)) : N("", !0),
    e.$slots.leftout ? (c(), f("view", bd, [
      _(e.$slots, "leftout")
    ])) : N("", !0),
    g("view", {
      class: B(["nut-searchbar__search-input", e.shape]),
      style: A(q(q({}, e.inputSearchbarStyle), e.focusCss))
    }, [
      e.$slots.leftin ? (c(), f("view", {
        key: 0,
        class: "nut-searchbar__search-icon nut-searchbar__iptleft-search-icon",
        onClick: t[0] || (t[0] = (...a) => e.leftIconClick && e.leftIconClick(...a))
      }, [
        _(e.$slots, "leftin")
      ])) : N("", !0),
      g("view", {
        class: B(["nut-searchbar__input-inner", e.$slots.rightin && "nut-searchbar__input-inner-absolute"])
      }, [
        g("form", {
          class: "nut-searchbar__input-form",
          action: "#",
          onSubmit: t[5] || (t[5] = De((...a) => e.handleSubmit && e.handleSubmit(...a), ["prevent"]))
        }, [
          g("input", {
            ref: "inputsearch",
            class: B(["nut-searchbar__input-bar", e.clearable && "nut-searchbar__input-bar_clear"]),
            type: e.inputType,
            maxlength: e.maxLength,
            placeholder: e.placeholder || e.translate("placeholder"),
            value: e.modelValue,
            disabled: e.disabled,
            readonly: e.readonly,
            style: A(e.styleSearchbar),
            onClick: t[1] || (t[1] = (...a) => e.clickInput && e.clickInput(...a)),
            onInput: t[2] || (t[2] = (...a) => e.valueChange && e.valueChange(...a)),
            onFocus: t[3] || (t[3] = (...a) => e.valueFocus && e.valueFocus(...a)),
            onBlur: t[4] || (t[4] = (...a) => e.valueBlur && e.valueBlur(...a))
          }, null, 46, $d)
        ], 32)
      ], 2),
      g("view", {
        class: B(["nut-searchbar__input-inner-icon", e.$slots.rightin && "nut-searchbar__input-inner-icon-absolute"])
      }, [
        e.clearable ? Ie((c(), f("view", {
          key: 0,
          class: "nut-searchbar__search-icon nut-searchbar__input-clear",
          onClick: t[6] || (t[6] = (...a) => e.handleClear && e.handleClear(...a))
        }, [
          e.$slots["clear-icon"] ? _(e.$slots, "clear-icon", { key: 0 }) : (c(), G(Ve(e.renderIcon(e.clearIcon)), { key: 1 }))
        ], 512)), [
          [Me, String(e.modelValue).length > 0]
        ]) : N("", !0),
        e.$slots.rightin ? (c(), f("view", wd, [
          _(e.$slots, "rightin")
        ])) : N("", !0)
      ], 2)
    ], 6),
    e.$slots.rightout ? (c(), f("view", kd, [
      _(e.$slots, "rightout")
    ])) : N("", !0)
  ], 6);
}
const Sd = /* @__PURE__ */ ne(vd, [["render", Cd]]), Pt = (e, t, n) => e.map((o) => {
  const { value: l = "value", text: s = "text", children: a = "children" } = n, v = o, { [l]: r, [s]: i, [a]: p } = v, d = Yt(v, [It(l), It(s), It(a)]), y = fe(q({
    loading: !1
  }, d), {
    level: t ? (t && t.level || 0) + 1 : 0,
    value: r,
    text: i,
    children: p,
    _parent: t
  });
  return y.children && y.children.length && (y.children = Pt(y.children, y, n)), y;
}), Lo = (e, t) => {
  let n = 0, o;
  for (; (o = e[n++]) && t(o) !== !0; )
    o.children && o.children.length && Lo(o.children, t);
}, Td = {
  topId: null,
  idKey: "id",
  pidKey: "pid",
  sortKey: ""
}, Nd = (e, t) => {
  const n = q(q({}, Td), t || {}), { topId: o, idKey: l, pidKey: s, sortKey: a } = n;
  let r = [], i = {};
  return e.forEach((p) => {
    p = q({}, p);
    const { [l]: d, [s]: y } = p, v = i[y] = i[y] || [];
    !r.length && y === o && (r = v), v.push(p), p.children = i[d] || (i[d] = []);
  }), a && Object.keys(i).forEach((p) => {
    i[p].length > 1 && i[p].sort((d, y) => d[a] - y[a]);
  }), i = null, r;
};
class Pn {
  constructor(t, n) {
    O(this, "nodes");
    O(this, "config");
    this.config = q({
      value: "value",
      text: "text",
      children: "children"
    }, n || {}), this.nodes = Pt(t, null, this.config);
  }
  updateChildren(t, n) {
    n ? n.children = Pt(t, n, this.config) : this.nodes = Pt(t, null, this.config);
  }
  // for test
  getNodeByValue(t) {
    let n;
    return Lo(this.nodes, (o) => {
      if (o.value === t)
        return n = o, !0;
    }), n;
  }
  getPathNodesByValue(t) {
    if (!t.length)
      return [];
    const n = [];
    let o = this.nodes;
    for (; o && o.length; ) {
      const l = o.find((s) => s.value === t[s.level]);
      if (!l)
        break;
      n.push(l), o = l.children;
    }
    return n;
  }
  isLeaf(t, n) {
    const { leaf: o, children: l } = t, s = Array.isArray(l) && !!l.length;
    return o || !s && !n;
  }
  hasChildren(t, n) {
    if (this.isLeaf(t, n))
      return !1;
    const { children: l } = t;
    return Array.isArray(l) && !!l.length;
  }
}
const { create: _d } = x("cascader-item"), Dd = _d({
  components: {
    Loading: at,
    Checklist: ps,
    NutTabs: To,
    NutTabPane: No
  },
  props: {
    visible: Boolean,
    modelValue: Array,
    options: {
      type: Array,
      default: () => []
    },
    lazy: Boolean,
    lazyLoad: Function,
    valueKey: {
      type: String,
      default: "value"
    },
    textKey: {
      type: String,
      default: "text"
    },
    childrenKey: {
      type: String,
      default: "children"
    },
    convertConfig: Object
  },
  emits: ["update:modelValue", "change", "pathChange"],
  setup(e, { emit: t }) {
    const n = Se(), o = T(() => ({
      lazy: e.lazy,
      lazyLoad: e.lazyLoad,
      valueKey: e.valueKey,
      textKey: e.textKey,
      childrenKey: e.childrenKey,
      convertConfig: e.convertConfig
    })), l = z(0), s = z(!1), a = z(e.modelValue), r = z(new Pn([], {})), i = z([]), p = T(() => o.value.lazy && !!o.value.lazyLoad), d = /* @__PURE__ */ new Map();
    let y;
    const v = () => Ge(this, null, function* () {
      d.clear(), i.value = [], l.value = 0, s.value = !1, y = null;
      let { options: h } = e;
      o.value.convertConfig && (h = Nd(h, o.value.convertConfig)), r.value = new Pn(h, {
        value: o.value.valueKey,
        text: o.value.textKey,
        children: o.value.childrenKey
      }), p.value && !r.value.nodes.length && (yield w({
        root: !0,
        loading: !0,
        text: "",
        value: ""
      })), i.value = [{ nodes: r.value.nodes, selectedNode: null }], b();
    }), b = () => Ge(this, null, function* () {
      const h = a.value;
      if (h === void 0 || !r.value.nodes.length)
        return;
      if (h.length === 0) {
        l.value = 0, i.value = [{ nodes: r.value.nodes, selectedNode: null }];
        return;
      }
      let $ = h;
      if (p.value && Array.isArray(h) && h.length) {
        $ = [];
        let L = r.value.nodes.find((I) => I.value === h[0]);
        if (L) {
          $ = [L.value], s.value = !0;
          const I = yield h.slice(1).reduce((P, M) => Ge(this, null, function* () {
            var D;
            const C = yield P;
            yield w(C);
            const k = (D = C == null ? void 0 : C.children) == null ? void 0 : D.find((V) => V.value === M);
            return k && $.push(M), Promise.resolve(k);
          }), Promise.resolve(L));
          yield w(I), s.value = !1;
        }
      }
      $.length && h === e.modelValue && r.value.getPathNodesByValue($).map((I, P) => {
        l.value = P, u.handleNode(I, !0);
      });
    }), w = (h) => Ge(this, null, function* () {
      if (!h)
        return;
      if (!o.value.lazyLoad) {
        h.leaf = !0;
        return;
      }
      if (r.value.isLeaf(h, p.value) || r.value.hasChildren(h, p.value))
        return;
      h.loading = !0;
      const $ = h.root ? null : h;
      let L = d.get(h);
      L || (L = new Promise((P) => {
        var M, C;
        (C = (M = o.value).lazyLoad) == null || C.call(M, h, P);
      }), d.set(h, L));
      const I = yield L;
      Array.isArray(I) && I.length > 0 ? r.value.updateChildren(I, $) : h.leaf = !0, h.loading = !1, d.delete(h);
    }), S = (h) => {
      const $ = h.map((L) => L.value);
      a.value = $, t("change", $, h), t("update:modelValue", $, h);
    }, u = {
      // 选中一个节点，静默模式不触发事件
      handleNode(h, $) {
        return Ge(this, null, function* () {
          const { disabled: L, loading: I } = h;
          if (!(!$ && L || !i.value[l.value])) {
            if (r.value.isLeaf(h, p.value)) {
              if (h.leaf = !0, i.value[l.value].selectedNode = h, i.value = i.value.slice(0, h.level + 1), !$) {
                const P = i.value.map((M) => M.selectedNode);
                S(P), t("pathChange", P);
              }
              return;
            }
            if (r.value.hasChildren(h, p.value)) {
              const P = h.level + 1;
              if (i.value[l.value].selectedNode = h, i.value = i.value.slice(0, P), i.value.push({
                nodes: h.children || [],
                selectedNode: null
              }), l.value = P, !$) {
                const M = i.value.map((C) => C.selectedNode);
                t("pathChange", M);
              }
              return;
            }
            y = h, !I && (yield w(h), y === h && (i.value[l.value].selectedNode = h, u.handleNode(h, $)));
          }
        });
      },
      handleTabClick(h) {
        y = null, l.value = Number(h.paneKey);
      },
      formatTabTitle(h) {
        return h.selectedNode ? h.selectedNode.text : n("select");
      },
      isSelected(h, $) {
        var L;
        return ((L = h == null ? void 0 : h.selectedNode) == null ? void 0 : L.value) === $.value;
      }
    };
    return Q(
      [o, () => e.options],
      () => {
        v();
      },
      {
        deep: !0,
        immediate: !0
      }
    ), Q(
      () => e.modelValue,
      (h) => {
        h !== a.value && (a.value = h, b());
      }
    ), Q(
      () => e.visible,
      (h) => {
        h && Array.isArray(a.value) && a.value.length > 0 && b();
      }
    ), q({ panes: i, initLoading: s, tabsCursor: l }, u);
  }
}), Id = {
  role: "menu",
  class: "nut-cascader-pane"
}, Bd = ["aria-checked", "aria-disabled", "onClick"], Md = { class: "nut-cascader-item__title" }, Ld = /* @__PURE__ */ g("view", { class: "nut-cascader-pane" }, null, -1);
function Pd(e, t, n, o, l, s) {
  const a = U("Loading"), r = U("Checklist"), i = U("nut-tab-pane"), p = U("nut-tabs");
  return c(), G(p, {
    modelValue: e.tabsCursor,
    "onUpdate:modelValue": t[0] || (t[0] = (d) => e.tabsCursor = d),
    class: "nut-cascader",
    "title-scroll": "",
    onClick: e.handleTabClick
  }, {
    default: oe(() => [
      !e.initLoading && e.panes.length ? (c(!0), f(J, { key: 0 }, ie(e.panes, (d, y) => (c(), G(i, {
        key: y,
        title: e.formatTabTitle(d)
      }, {
        default: oe(() => [
          g("view", Id, [
            (c(!0), f(J, null, ie(d.nodes, (v) => (c(), f("view", {
              key: v.value,
              class: B(["nut-cascader-item", { active: e.isSelected(d, v), disabled: v.disabled }]),
              "aria-checked": e.isSelected(d, v),
              "aria-disabled": v.disabled || void 0,
              role: "menuitemradio",
              onClick: (b) => e.handleNode(v, !1)
            }, [
              g("view", Md, E(v.text), 1),
              v.loading ? (c(), G(a, {
                key: 0,
                class: "nut-cascader-item__icon-loading",
                name: "loading"
              })) : (c(), G(r, {
                key: 1,
                class: "nut-cascader-item__icon-check",
                name: "checklist"
              }))
            ], 10, Bd))), 128))
          ])
        ]),
        _: 2
      }, 1032, ["title"]))), 128)) : (c(), G(i, {
        key: 1,
        title: "Loading..."
      }, {
        default: oe(() => [
          Ld
        ]),
        _: 1
      }))
    ]),
    _: 1
  }, 8, ["modelValue", "onClick"]);
}
const Ed = /* @__PURE__ */ ne(Dd, [["render", Pd]]), { create: Ad } = x("cascader"), zd = Ad({
  components: {
    NutCascaderItem: Ed,
    NutPopup: Ee
  },
  props: fe(q({}, _t), {
    modelValue: Array,
    visible: Boolean,
    title: String,
    options: {
      type: Array,
      default: () => []
    },
    lazy: Boolean,
    lazyLoad: Function,
    valueKey: {
      type: String,
      default: "value"
    },
    textKey: {
      type: String,
      default: "text"
    },
    childrenKey: {
      type: String,
      default: "children"
    },
    poppable: {
      type: Boolean,
      default: !0
    },
    convertConfig: Object
  }),
  emits: ["update:modelValue", "change", "pathChange", "update:visible"],
  setup(e, { emit: t }) {
    const n = z(e.modelValue), o = T({
      get() {
        return e.visible;
      },
      set(a) {
        t("update:visible", a);
      }
    }), l = (a, r) => {
      n.value = a, o.value = !1, t("change", a, r), t("update:modelValue", a);
    }, s = (a) => {
      t("pathChange", a);
    };
    return Q(
      () => e.modelValue,
      (a) => {
        a !== n.value && (n.value = a);
      }
    ), {
      onChange: l,
      onPathChange: s,
      innerValue: n,
      innerVisible: o
    };
  }
}), Vd = ["innerHTML"];
function Od(e, t, n, o, l, s) {
  const a = U("nut-cascader-item"), r = U("nut-popup");
  return e.poppable ? (c(), G(r, {
    key: 0,
    visible: e.innerVisible,
    "onUpdate:visible": t[0] || (t[0] = (i) => e.innerVisible = i),
    position: "bottom",
    "pop-class": "nut-cascader__popup",
    round: "",
    closeable: e.closeable,
    "destroy-on-close": !1,
    "close-icon-position": e.closeIconPosition,
    "z-index": e.zIndex
  }, {
    default: oe(() => [
      e.title ? (c(), f("view", {
        key: 0,
        class: "nut-cascader__bar",
        innerHTML: e.title
      }, null, 8, Vd)) : N("", !0),
      te(a, {
        "model-value": e.innerValue,
        options: e.options,
        lazy: e.lazy,
        "lazy-load": e.lazyLoad,
        "value-key": e.valueKey,
        "text-key": e.textKey,
        "children-key": e.childrenKey,
        "convert-config": e.convertConfig,
        visible: e.innerVisible,
        onChange: e.onChange,
        onPathChange: e.onPathChange
      }, null, 8, ["model-value", "options", "lazy", "lazy-load", "value-key", "text-key", "children-key", "convert-config", "visible", "onChange", "onPathChange"])
    ]),
    _: 1
  }, 8, ["visible", "closeable", "close-icon-position", "z-index"])) : (c(), G(a, {
    key: 1,
    "model-value": e.innerValue,
    options: e.options,
    lazy: e.lazy,
    "lazy-load": e.lazyLoad,
    "value-key": e.valueKey,
    "text-key": e.textKey,
    "children-key": e.childrenKey,
    "convert-config": e.convertConfig,
    visible: e.innerVisible,
    onChange: e.onChange,
    onPathChange: e.onPathChange
  }, null, 8, ["model-value", "options", "lazy", "lazy-load", "value-key", "text-key", "children-key", "convert-config", "visible", "onChange", "onPathChange"]));
}
const Hd = /* @__PURE__ */ ne(zd, [["render", Od]]), ce = {
  /**
   * 是否为闫年
   * @return {Boolse} true|false
   */
  isLeapYear: function(e) {
    return e % 4 == 0 && e % 100 != 0 || e % 400 == 0;
  },
  /**
   * 返回星期数
   * @return {String}
   */
  getWhatDay: function(e, t, n) {
    const l = (/* @__PURE__ */ new Date(e + "/" + t + "/" + n)).getDay();
    return ["星期日", "星期一", "星期二", "星期三", "星期四", "星期五", "星期六"][l];
  },
  /**
   * 返回星期数
   * @return {Number}
   */
  getMonthPreDay: function(e, t) {
    let o = (/* @__PURE__ */ new Date(e + "/" + t + "/01")).getDay();
    return o == 0 && (o = 7), o;
  },
  /**
   * 返回月份天数
   * @return {Number}
   */
  getMonthDays: function(e, t) {
    return /^0/.test(t) && (t = t.split("")[1]), [0, 31, this.isLeapYear(Number(e)) ? 29 : 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31][t];
  },
  /**
   * 补齐数字位数
   * @return {string}
   */
  getNumTwoBit: function(e) {
    return e = Number(e), (e > 9 ? "" : "0") + e;
  },
  /**
   * 日期对象转成字符串
   * @return {string}
   */
  date2Str: function(e, t) {
    t = t || "-";
    const n = e.getFullYear(), o = this.getNumTwoBit(e.getMonth() + 1), l = this.getNumTwoBit(e.getDate());
    return [n, o, l].join(t);
  },
  /**
   * 返回日期格式字符串
   * @param {Number} 0返回今天的日期、1返回明天的日期，2返回后天得日期，依次类推
   * @return {string} '2014-12-31'
   */
  getDay: function(e) {
    e = e || 0;
    let t = /* @__PURE__ */ new Date();
    const n = e * (1e3 * 60 * 60 * 24);
    return t = new Date(t.getTime() + n), this.date2Str(t);
  },
  /**
   * 时间比较
   * @return {Boolean}
   */
  compareDate: function(e, t) {
    const n = new Date(e.replace("-", "/").replace("-", "/")), o = new Date(t.replace("-", "/").replace("-", "/"));
    return !(n >= o);
  },
  /**
   * 时间是否相等
   * @return {Boolean}
   */
  isEqual: function(e, t) {
    const n = new Date(e).getTime(), o = new Date(t).getTime();
    return n == o;
  },
  getMonthWeek: function(e, t, n, o = 0) {
    const l = new Date(Number(e), parseInt(t) - 1, Number(n));
    let s = l.getDay();
    const a = l.getDate();
    let r = 6 - s;
    return o !== 0 && (s = s == 0 ? 7 : s, r = 7 - s), Math.ceil((a + r) / 7);
  },
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  getYearWeek: function(e, t, n, o = 0) {
    const l = new Date(Number(e), parseInt(t) - 1, Number(n)), s = new Date(Number(e), 0, 1), a = Math.round((l.valueOf() - s.valueOf()) / 864e5);
    return Math.ceil((a + (s.getDay() + 1 - 1)) / 7);
  },
  getWeekDate: function(e, t, n, o = 0) {
    const l = new Date(Number(e), parseInt(t) - 1, Number(n)), s = l.getTime();
    let a = l.getDay();
    if (o === 0) {
      const i = s - a * 864e5, p = s + (6 - a) * 864e5, d = this.date2Str(new Date(i)), y = this.date2Str(new Date(p));
      return [d, y];
    } else {
      a = a == 0 ? 7 : a;
      const r = 24 * 60 * 60 * 1e3, i = s - (a - 1) * r, p = s + (7 - a) * r, d = this.date2Str(new Date(i)), y = this.date2Str(new Date(p));
      return [d, y];
    }
  },
  formatResultDate: function(e) {
    const t = [...e.split("-")];
    return t[2] = ce.getNumTwoBit(Number(t[2])), t[3] = `${t[0]}-${t[1]}-${t[2]}`, t[4] = ce.getWhatDay(+t[0], +t[1], +t[2]), t;
  }
}, { create: Rd } = x("calendar-item"), Fd = "NutCalendarItem", Wd = Rd({
  props: {
    type: {
      type: String,
      default: "one"
    },
    isAutoBackFill: {
      type: Boolean,
      default: !1
    },
    toDateAnimation: {
      type: Boolean,
      default: !0
    },
    poppable: {
      type: Boolean,
      default: !0
    },
    showTitle: {
      type: Boolean,
      default: !0
    },
    showSubTitle: {
      type: Boolean,
      default: !0
    },
    showToday: {
      type: Boolean,
      default: !0
    },
    title: {
      type: String,
      default: ""
    },
    confirmText: {
      type: String,
      default: ""
    },
    startText: {
      type: String,
      default: ""
    },
    endText: {
      type: String,
      default: ""
    },
    defaultValue: {
      type: [String, Array],
      default: ""
    },
    startDate: {
      type: String,
      default: ce.getDay(0)
    },
    endDate: {
      type: String,
      default: ce.getDay(365)
    },
    firstDayOfWeek: {
      type: Number,
      default: 0
    },
    disabledDate: Function
  },
  emits: ["choose", "update", "close", "select"],
  setup(e, { emit: t, slots: n, expose: o }) {
    const l = Se(Fd), s = l("weekdays").map((H, Z) => ({
      day: H,
      weekend: Z === 0 || Z === 6
    })), a = z([...s.slice(e.firstDayOfWeek, 7), ...s.slice(0, e.firstDayOfWeek)]), r = z(null), i = z(null), p = z(null), d = z(null), y = z(0), v = T(() => u.monthsData.slice(u.defaultRange[0], u.defaultRange[1])), b = T(() => n.btn), w = T(() => n["top-info"]), S = T(() => n["bottom-info"]), u = me({
      yearMonthTitle: "",
      defaultRange: [],
      currDate: "",
      propStartDate: "",
      propEndDate: "",
      unLoadPrev: !1,
      touchParams: {
        startY: 0,
        endY: 0,
        startTime: 0,
        endTime: 0,
        lastY: 0,
        lastTime: 0
      },
      transformY: 0,
      translateY: 0,
      scrollDistance: 0,
      defaultData: [],
      chooseData: [],
      monthsData: [],
      dayPrefix: "nut-calendar__day",
      startData: "",
      endData: "",
      isRange: e.type === "range",
      timer: 0,
      currentIndex: 0,
      avgHeight: 0,
      monthsNum: 0
    }), m = (H) => H.split("-"), h = (H) => ce.isEqual(u.currDate[0], H), $ = (H) => ce.isEqual(u.currDate[1], H), L = (H) => {
      var Z, ae;
      return ((Z = u.currDate) == null ? void 0 : Z.length) > 0 ? (ae = u.currDate) == null ? void 0 : ae.some((re) => ce.isEqual(re, H)) : !1;
    }, I = (H, Z) => Z.curData[0] + "-" + Z.curData[1] + "-" + ce.getNumTwoBit(+H.day), P = (H, Z, ae) => {
      const re = [];
      typeof ae == "number" && ((ae + 1 + e.firstDayOfWeek) % 7 === 0 || (ae + e.firstDayOfWeek) % 7 === 0) && re.push("weekend");
      const he = I(H, Z), { type: Pe } = e;
      return H.type == "curr" ? ce.isEqual(u.currDate, he) || (Pe == "range" || Pe == "week") && (h(he) || $(he)) || Pe == "multiple" && L(he) ? re.push(`${u.dayPrefix}--active`) : u.propStartDate && ce.compareDate(he, u.propStartDate) || u.propEndDate && ce.compareDate(u.propEndDate, he) || e.disabledDate && e.disabledDate(he) ? re.push(`${u.dayPrefix}--disabled`) : (Pe == "range" || Pe == "week") && Array.isArray(u.currDate) && Object.values(u.currDate).length == 2 && ce.compareDate(u.currDate[0], he) && ce.compareDate(he, u.currDate[1]) && re.push(`${u.dayPrefix}--choose`) : re.push(`${u.dayPrefix}--disabled`), re;
    }, M = () => {
      const { type: H } = e;
      if (H == "range" && u.chooseData.length == 2 || H != "range") {
        let Z = u.chooseData.slice(0);
        if (H == "week") {
          if (u.chooseData.length !== 2)
            return;
          Z = {
            weekDate: [k(u.chooseData[0]), k(u.chooseData[1])]
          };
        }
        t("choose", Z), e.poppable && t("update");
      }
    }, C = (H, Z, ae = !1) => {
      var re, he;
      if (!P(H, Z).includes(`${u.dayPrefix}--disabled`)) {
        const { type: Pe } = e;
        let [Fe, je] = Z.curData, ke = [...Z.curData];
        if (ke[2] = ce.getNumTwoBit(Number(H.day)), ke[3] = `${ke[0]}-${ke[1]}-${ke[2]}`, ke[4] = ce.getWhatDay(+ke[0], +ke[1], +ke[2]), Pe == "multiple")
          if (((re = u.currDate) == null ? void 0 : re.length) > 0) {
            let _e;
            (he = u.currDate) == null || he.forEach((We, He) => {
              We == ke[3] && (_e = He);
            }), ae ? u.chooseData.push([...ke]) : _e !== void 0 ? (u.currDate.splice(_e, 1), u.chooseData.splice(_e, 1)) : (u.currDate.push(ke[3]), u.chooseData.push([...ke]));
          } else
            u.currDate = [ke[3]], u.chooseData = [[...ke]];
        else if (Pe == "range") {
          let _e = Object.values(u.currDate).length;
          _e == 2 || _e == 0 ? u.currDate = [ke[3]] : ce.compareDate(u.currDate[0], ke[3]) ? Array.isArray(u.currDate) && u.currDate.push(ke[3]) : Array.isArray(u.currDate) && u.currDate.unshift(ke[3]), u.chooseData.length == 2 || !u.chooseData.length ? u.chooseData = [[...ke]] : ce.compareDate(u.chooseData[0][3], ke[3]) ? u.chooseData = [...u.chooseData, [...ke]] : u.chooseData = [[...ke], ...u.chooseData];
        } else if (Pe == "week") {
          let _e = ce.getWeekDate(Fe, je, H.day, e.firstDayOfWeek);
          u.propStartDate && ce.compareDate(_e[0], u.propStartDate) && _e.splice(0, 1, u.propStartDate), u.propEndDate && ce.compareDate(u.propEndDate, _e[1]) && _e.splice(1, 1, u.propEndDate), u.currDate = _e, u.chooseData = [ce.formatResultDate(_e[0]), ce.formatResultDate(_e[1])];
        } else
          u.currDate = ke[3], u.chooseData = [...ke];
        if (!ae) {
          let _e = u.chooseData;
          Pe == "week" && (_e = {
            weekDate: [
              k(u.chooseData[0]),
              k(u.chooseData[1])
            ]
          }), t("select", _e), (e.isAutoBackFill || !e.poppable) && M();
        }
      }
    }, k = (H) => {
      let [Z, ae, re] = H;
      return {
        date: H,
        monthWeekNum: ce.getMonthWeek(Z, ae, re, e.firstDayOfWeek),
        yearWeekNum: ce.getYearWeek(Z, ae, re, e.firstDayOfWeek)
      };
    }, D = (H) => {
      const Z = H == "prev" ? u.monthsData[0] : u.monthsData[u.monthsData.length - 1];
      let ae = parseInt(Z.curData[0]), re = parseInt(Z.curData[1].toString().replace(/^0/, ""));
      switch (H) {
        case "prev":
          re == 1 && (ae -= 1), re = re == 1 ? 12 : --re;
          break;
        case "next":
          re == 12 && (ae += 1), re = re == 12 ? 1 : ++re;
          break;
      }
      return [ae + "", ce.getNumTwoBit(re), ce.getMonthDays(String(ae), String(re)) + ""];
    }, V = (H, Z, ae) => {
      let { year: re, month: he } = ae;
      return Z == "prev" && H >= 7 && (H -= 7), Array.from(Array(H), (Pe, Fe) => ({
        day: String(Fe + 1),
        type: Z,
        year: re,
        month: he
      }));
    }, j = (H, Z, ae, re) => {
      H = H - e.firstDayOfWeek;
      let { year: he, month: Pe } = ae;
      return Z == "prev" && H >= 7 && (H -= 7), Array.from(Array(re), (je, ke) => ({
        day: String(ke + 1),
        type: Z,
        year: he,
        month: Pe
      })).slice(re - H);
    }, X = (H, Z) => {
      const ae = ce.getMonthPreDay(+H[0], +H[1]);
      let re = Number(H[1]) - 1, he = Number(H[0]);
      re <= 0 && (re = 12, he += 1);
      const Pe = ce.getMonthDays(String(H[0]), String(H[1])), Fe = ce.getMonthDays(he + "", re + ""), je = {
        year: H[0],
        month: H[1]
      }, ke = {
        curData: H,
        title: l("monthTitle", je.year, je.month),
        monthData: [
          ...j(
            ae,
            "prev",
            { month: String(re), year: String(he) },
            Fe
          ),
          ...V(Pe, "curr", je)
        ],
        cssHeight: 0,
        cssScrollHeight: 0
      };
      ke.cssHeight = 39 + (ke.monthData.length > 35 ? 384 : 320);
      let _e = 0;
      u.monthsData.length > 0 && (_e = u.monthsData[u.monthsData.length - 1].cssScrollHeight + u.monthsData[u.monthsData.length - 1].cssHeight), ke.cssScrollHeight = _e, Z == "next" ? (!u.endData || !ce.compareDate(
        `${u.endData[0]}-${u.endData[1]}-${ce.getMonthDays(u.endData[0], u.endData[1])}`,
        `${H[0]}-${H[1]}-${H[2]}`
      )) && u.monthsData.push(ke) : !u.startData || !ce.compareDate(
        `${H[0]}-${H[1]}-${H[2]}`,
        `${u.startData[0]}-${u.startData[1]}-01`
      ) ? u.monthsData.unshift(ke) : u.unLoadPrev = !0;
    }, le = () => {
      let H = e.startDate ? e.startDate : ce.getDay(0), Z = e.endDate ? e.endDate : ce.getDay(365);
      u.propStartDate = H, u.propEndDate = Z, u.startData = m(H), u.endData = m(Z), (e.defaultValue || Array.isArray(e.defaultValue) && e.defaultValue.length > 0) && (u.currDate = e.type !== "one" ? [...e.defaultValue] : e.defaultValue);
      const ae = {
        year: Number(u.startData[0]),
        month: Number(u.startData[1])
      }, re = {
        year: Number(u.endData[0]),
        month: Number(u.endData[1])
      };
      let he = re.month - ae.month;
      re.year - ae.year > 0 && (he = he + 12 * (re.year - ae.year)), he <= 0 && (he = 1), X(u.startData, "next");
      let Pe = 1;
      do
        X(D("next"), "next");
      while (Pe++ < he);
      if (u.monthsNum = he, e.type == "range" && Array.isArray(u.currDate))
        u.currDate.length > 0 && (H && ce.compareDate(u.currDate[0], H) && u.currDate.splice(0, 1, H), Z && ce.compareDate(Z, u.currDate[1]) && u.currDate.splice(1, 1, Z), u.defaultData = [...m(u.currDate[0]), ...m(u.currDate[1])]);
      else if (e.type == "multiple" && Array.isArray(u.currDate)) {
        if (u.currDate.length > 0) {
          let We = [], He = {};
          u.currDate.forEach((Ke) => {
            H && !ce.compareDate(Ke, H) && Z && !ce.compareDate(Z, Ke) && (Object.hasOwnProperty.call(He, Ke) || (We.push(Ke), He[Ke] = Ke));
          }), u.currDate = [...We], u.defaultData = [...m(We[0])];
        }
      } else if (e.type == "week" && Array.isArray(u.currDate)) {
        if (u.currDate.length > 0) {
          let [We, He, Ke] = m(u.currDate[0]), Ft = ce.getWeekDate(We, He, Ke, e.firstDayOfWeek);
          u.currDate = Ft, H && ce.compareDate(u.currDate[0], H) && u.currDate.splice(0, 1, H), Z && ce.compareDate(Z, u.currDate[1]) && u.currDate.splice(1, 1, Z), u.defaultData = [...m(u.currDate[0]), ...m(u.currDate[1])];
        }
      } else
        u.currDate && (H && ce.compareDate(u.currDate, H) ? u.currDate = H : Z && !ce.compareDate(u.currDate, Z) && (u.currDate = Z), u.defaultData = [...m(u.currDate)]);
      let Fe = 0, je = 0;
      u.defaultData.length > 0 && u.monthsData.forEach((We, He) => {
        We.title == l("monthTitle", u.defaultData[0], u.defaultData[1]) && (Fe = He), (e.type == "range" || e.type == "week") && We.title == l("monthTitle", u.defaultData[3], u.defaultData[4]) && (je = He);
      }), R(he, Fe), u.currentIndex = Fe, u.yearMonthTitle = u.monthsData[u.currentIndex].title, u.defaultData.length > 0 && (u.isRange ? (C({ day: u.defaultData[2], type: "curr" }, u.monthsData[u.currentIndex], !0), C({ day: u.defaultData[5], type: "curr" }, u.monthsData[je], !0)) : e.type == "week" ? C({ day: u.defaultData[2], type: "curr" }, u.monthsData[u.currentIndex], !0) : e.type == "multiple" ? [...u.currDate].forEach((We) => {
        let He = m(We), Ke = u.currentIndex;
        u.monthsData.forEach((Ft, cl) => {
          Ft.title == l("monthTitle", He[0], He[1]) && (Ke = cl);
        }), C({ day: He[2], type: "curr" }, u.monthsData[Ke], !0);
      }) : C({ day: u.defaultData[2], type: "curr" }, u.monthsData[u.currentIndex], !0));
      let ke = u.monthsData[u.monthsData.length - 1], _e = ke.cssHeight + ke.cssScrollHeight;
      Re(() => {
        r != null && r.value && (i != null && i.value) && (d != null && d.value) && (y.value = r.value.clientHeight, i.value.style.height = `${_e}px`, r.value.scrollTop = u.monthsData[u.currentIndex].cssScrollHeight);
      }), u.avgHeight = Math.floor(_e / (he + 1));
    };
    o({
      scrollToDate: (H) => {
        ce.compareDate(H, u.propStartDate) ? H = u.propStartDate : ce.compareDate(H, u.propEndDate) || (H = u.propEndDate);
        let Z = m(H);
        u.monthsData.forEach((ae, re) => {
          if (ae.title == l("monthTitle", Z[0], Z[1]) && r.value) {
            let he = u.monthsData[re].cssScrollHeight - r.value.scrollTop;
            if (e.toDateAnimation) {
              let Pe = 0, Fe = setInterval(() => {
                if (Pe++, r.value) {
                  let je = he / 10;
                  r.value.scrollTop = r.value.scrollTop + je;
                }
                Pe >= 10 && (clearInterval(Fe), r.value && (r.value.scrollTop = u.monthsData[re].cssScrollHeight));
              }, 40);
            } else
              r.value.scrollTop = u.monthsData[re].cssScrollHeight;
          }
        });
      },
      initPosition: () => {
        r != null && r.value && (r.value.scrollTop = u.monthsData[u.currentIndex].cssScrollHeight);
      }
    });
    const R = (H, Z) => {
      H >= 3 ? Z > 0 && Z < H ? u.defaultRange = [Z - 1, Z + 3] : Z == 0 ? u.defaultRange = [Z, Z + 4] : Z == H && (u.defaultRange = [Z - 2, Z + 2]) : u.defaultRange = [0, H + 2];
      let ae = u.monthsData[u.defaultRange[0]].cssScrollHeight;
      u.translateY = ae;
    }, ee = (H, Z) => (e.type == "range" || e.type == "week") && H.type == "curr" && P(H, Z).includes("nut-calendar__day--active"), K = (H, Z) => ee(H, Z) && h(I(H, Z)), se = (H, Z) => u.currDate.length >= 2 && $(I(H, Z)) ? ee(H, Z) : !1, ue = () => {
      if (u.currDate.length >= 2)
        return ce.isEqual(u.currDate[0], u.currDate[1]);
    }, de = (H) => {
      const Z = `${H.year}-${H.month}-${Number(H.day) < 10 ? "0" + H.day : H.day}`;
      return ce.isEqual(Z, ce.date2Str(/* @__PURE__ */ new Date()));
    }, Ce = (H) => {
      if (u.monthsData.length <= 1)
        return;
      const Z = H.target.scrollTop;
      let ae = Math.floor(Z / u.avgHeight);
      if (ae == 0)
        Z >= u.monthsData[ae + 1].cssScrollHeight && (ae += 1);
      else if (ae > 0 && ae < u.monthsNum - 1)
        Z >= u.monthsData[ae + 1].cssScrollHeight && (ae += 1), Z < u.monthsData[ae].cssScrollHeight && (ae -= 1);
      else {
        const re = Math.round(Z + y.value);
        re < u.monthsData[ae].cssScrollHeight + u.monthsData[ae].cssHeight && Z > u.monthsData[ae - 1].cssScrollHeight && (ae -= 1), ae + 1 <= u.monthsNum && re >= u.monthsData[ae + 1].cssScrollHeight + u.monthsData[ae + 1].cssHeight && (ae += 1), ae >= 1 && Z < u.monthsData[ae - 1].cssScrollHeight && (ae -= 1);
      }
      u.currentIndex !== ae && (u.currentIndex = ae, R(u.monthsNum, ae)), u.yearMonthTitle = u.monthsData[ae].title;
    }, Le = () => {
      u.chooseData.splice(0), u.monthsData.splice(0), le();
    };
    return $e(() => {
      le();
    }), Q(
      () => e.defaultValue,
      (H) => {
        H && e.poppable && Le();
      }
    ), fe(q(q({
      weeks: a,
      compConthsData: v,
      showTopBtn: b,
      topInfo: w,
      bottomInfo: S,
      rangeTip: ue,
      mothsViewScroll: Ce,
      getClass: P,
      isStartTip: K,
      isEndTip: se,
      chooseDay: C,
      isCurrDay: de,
      confirm: M,
      months: r
    }, be(u)), be(e)), {
      translate: l,
      monthsPanel: i,
      weeksPanel: p,
      viewArea: d
    });
  }
}), Yd = { class: "nut-calendar__header" }, jd = {
  key: 0,
  class: "nut-calendar__header-title"
}, Kd = {
  key: 1,
  class: "nut-calendar__header-slot"
}, Ud = {
  key: 2,
  class: "nut-calendar__header-subtitle"
}, Xd = {
  ref: "weeksPanel",
  class: "nut-calendar__weekdays"
}, qd = {
  ref: "monthsPanel",
  class: "nut-calendar__panel"
}, Zd = { class: "nut-calendar__month-title" }, Gd = { class: "nut-calendar__days" }, Jd = ["onClick"], Qd = { class: "nut-calendar__day-value" }, xd = {
  key: 0,
  class: "nut-calendar__day-tips nut-calendar__day-tips--top"
}, ef = {
  key: 1,
  class: "nut-calendar__day-tips nut-calendar__day-tips--bottom"
}, tf = {
  key: 2,
  class: "nut-calendar__day-tips--curr"
}, nf = {
  key: 4,
  class: "nut-calendar__day-tip"
}, of = {
  key: 0,
  class: "nut-calendar__footer"
};
function lf(e, t, n, o, l, s) {
  return c(), f("view", {
    class: B(["nut-calendar", {
      "nut-calendar--nopop": !e.poppable,
      "nut-calendar--nofooter": e.isAutoBackFill
    }])
  }, [
    g("view", Yd, [
      e.showTitle ? (c(), f("view", jd, E(e.title || e.translate("title")), 1)) : N("", !0),
      e.showTopBtn ? (c(), f("view", Kd, [
        _(e.$slots, "btn")
      ])) : N("", !0),
      e.showSubTitle ? (c(), f("view", Ud, E(e.yearMonthTitle), 1)) : N("", !0),
      g("view", Xd, [
        (c(!0), f(J, null, ie(e.weeks, (a, r) => (c(), f("view", {
          key: r,
          class: B(["nut-calendar__weekday", { weekend: a.weekend }])
        }, E(a.day), 3))), 128))
      ], 512)
    ]),
    g("view", {
      ref: "months",
      class: "nut-calendar__content",
      onScroll: t[0] || (t[0] = (...a) => e.mothsViewScroll && e.mothsViewScroll(...a))
    }, [
      g("view", qd, [
        g("view", {
          ref: "viewArea",
          class: "nut-calendar__body",
          style: A({ transform: `translateY(${e.translateY}px)` })
        }, [
          (c(!0), f(J, null, ie(e.compConthsData, (a, r) => (c(), f("view", {
            key: r,
            class: "nut-calendar__month"
          }, [
            g("view", Zd, E(a.title), 1),
            g("view", Gd, [
              g("view", {
                class: B(["nut-calendar__days-item", e.type === "range" ? "nut-calendar__days-item--range" : ""])
              }, [
                (c(!0), f(J, null, ie(a.monthData, (i, p) => (c(), f("view", {
                  key: p,
                  class: B(["nut-calendar__day", e.getClass(i, a, p)]),
                  onClick: (d) => e.chooseDay(i, a)
                }, [
                  g("view", Qd, [
                    _(e.$slots, "day", {
                      date: i.type == "curr" ? i : ""
                    }, () => [
                      ge(E(i.type == "curr" ? i.day : ""), 1)
                    ])
                  ]),
                  e.topInfo ? (c(), f("view", xd, [
                    _(e.$slots, "top-info", {
                      date: i.type == "curr" ? i : ""
                    })
                  ])) : N("", !0),
                  e.bottomInfo ? (c(), f("view", ef, [
                    _(e.$slots, "bottom-info", {
                      date: i.type == "curr" ? i : ""
                    })
                  ])) : N("", !0),
                  !e.bottomInfo && e.showToday && e.isCurrDay(i) ? (c(), f("view", tf, E(e.translate("today")), 1)) : N("", !0),
                  e.isStartTip(i, a) ? (c(), f("view", {
                    key: 3,
                    class: B(["nut-calendar__day-tip", { "nut-calendar__day-tips--top": e.rangeTip() }])
                  }, E(e.startText || e.translate("start")), 3)) : N("", !0),
                  e.isEndTip(i, a) ? (c(), f("view", nf, E(e.endText || e.translate("end")), 1)) : N("", !0)
                ], 10, Jd))), 128))
              ], 2)
            ])
          ]))), 128))
        ], 4)
      ], 512)
    ], 544),
    e.poppable && !e.isAutoBackFill ? (c(), f("view", of, [
      _(e.$slots, "footer-info", { date: e.chooseData }, () => [
        g("view", {
          class: "nut-calendar__confirm",
          onClick: t[1] || (t[1] = (...a) => e.confirm && e.confirm(...a))
        }, E(e.confirmText || e.translate("confirm")), 1)
      ])
    ])) : N("", !0)
  ], 2);
}
const sf = /* @__PURE__ */ ne(Wd, [["render", lf]]), { create: af } = x("calendar"), rf = af({
  components: {
    NutCalendarItem: sf,
    NutPopup: Ee
  },
  props: {
    type: {
      type: String,
      default: "one"
    },
    isAutoBackFill: {
      type: Boolean,
      default: !1
    },
    toDateAnimation: {
      type: Boolean,
      default: !0
    },
    poppable: {
      type: Boolean,
      default: !0
    },
    showTitle: {
      type: Boolean,
      default: !0
    },
    showSubTitle: {
      type: Boolean,
      default: !0
    },
    visible: {
      type: Boolean,
      default: !1
    },
    showToday: {
      type: Boolean,
      default: !0
    },
    title: {
      type: String,
      default: ""
    },
    confirmText: {
      type: String,
      default: ""
    },
    startText: {
      type: String,
      default: ""
    },
    endText: {
      type: String,
      default: ""
    },
    defaultValue: {
      type: [String, Array]
    },
    startDate: {
      type: String,
      default: ce.getDay(0)
    },
    endDate: {
      type: String,
      default: ce.getDay(365)
    },
    firstDayOfWeek: {
      type: Number,
      default: 0,
      validator: (e) => e >= 0 && e <= 6
    },
    lockScroll: {
      type: Boolean,
      default: !0
    },
    disabledDate: Function
  },
  emits: ["choose", "close", "update:visible", "select"],
  setup(e, { emit: t, slots: n, expose: o }) {
    const l = T({
      get() {
        return e.visible;
      },
      set($) {
        t("update:visible", $);
      }
    }), s = T(() => n.btn), a = T(() => n["top-info"]), r = T(() => n.day), i = T(() => n["bottom-info"]), p = T(() => n["footer-info"]), d = z(null);
    o({
      scrollToDate: ($) => {
        var L;
        (L = d.value) == null || L.scrollToDate($);
      },
      initPosition: () => {
        var $;
        ($ = d.value) == null || $.initPosition();
      }
    });
    const b = () => {
      t("update:visible", !1);
    }, w = () => {
      t("close"), t("update:visible", !1);
    };
    return {
      visible: l,
      closePopup: () => {
        w();
      },
      opened: () => {
        var $;
        ($ = d.value) == null || $.initPosition();
      },
      update: b,
      close: w,
      select: ($) => {
        t("select", $);
      },
      choose: ($) => {
        w(), t("choose", $);
      },
      calendarRef: d,
      showTopBtn: s,
      topInfo: a,
      dayInfo: r,
      bottomInfo: i,
      footerInfo: p
    };
  }
});
function uf(e, t, n, o, l, s) {
  const a = U("nut-calendar-item"), r = U("nut-popup");
  return e.poppable ? (c(), G(r, dt({
    key: 0,
    visible: e.visible,
    "onUpdate:visible": t[0] || (t[0] = (i) => e.visible = i),
    position: "bottom",
    round: "",
    closeable: ""
  }, e.$attrs, {
    style: { height: "85vh" },
    "lock-scroll": e.lockScroll,
    onOpened: e.opened
  }), {
    default: oe(() => [
      te(a, {
        ref: "calendarRef",
        type: e.type,
        "is-auto-back-fill": e.isAutoBackFill,
        poppable: e.poppable,
        title: e.title,
        "default-value": e.defaultValue,
        "start-date": e.startDate,
        "end-date": e.endDate,
        "confirm-text": e.confirmText,
        "start-text": e.startText,
        "end-text": e.endText,
        "show-today": e.showToday,
        "show-title": e.showTitle,
        "show-sub-title": e.showSubTitle,
        "to-date-animation": e.toDateAnimation,
        "first-day-of-week": e.firstDayOfWeek,
        "disabled-date": e.disabledDate,
        onUpdate: e.update,
        onClose: e.close,
        onChoose: e.choose,
        onSelect: e.select
      }, wt({ _: 2 }, [
        e.showTopBtn ? {
          name: "btn",
          fn: oe(() => [
            _(e.$slots, "btn")
          ]),
          key: "0"
        } : void 0,
        e.dayInfo ? {
          name: "day",
          fn: oe((i) => [
            _(e.$slots, "day", {
              date: i.date
            })
          ]),
          key: "1"
        } : void 0,
        e.topInfo ? {
          name: "top-info",
          fn: oe((i) => [
            _(e.$slots, "top-info", {
              date: i.date
            })
          ]),
          key: "2"
        } : void 0,
        e.bottomInfo ? {
          name: "bottom-info",
          fn: oe((i) => [
            _(e.$slots, "bottom-info", {
              date: i.date
            })
          ]),
          key: "3"
        } : void 0,
        e.footerInfo ? {
          name: "footer-info",
          fn: oe((i) => [
            _(e.$slots, "footer-info", {
              date: i.date
            })
          ]),
          key: "4"
        } : void 0
      ]), 1032, ["type", "is-auto-back-fill", "poppable", "title", "default-value", "start-date", "end-date", "confirm-text", "start-text", "end-text", "show-today", "show-title", "show-sub-title", "to-date-animation", "first-day-of-week", "disabled-date", "onUpdate", "onClose", "onChoose", "onSelect"])
    ]),
    _: 3
  }, 16, ["visible", "lock-scroll", "onOpened"])) : (c(), G(a, {
    key: 1,
    ref: "calendarRef",
    type: e.type,
    "is-auto-back-fill": e.isAutoBackFill,
    poppable: e.poppable,
    title: e.title,
    "confirm-text": e.confirmText,
    "start-text": e.startText,
    "end-text": e.endText,
    "default-value": e.defaultValue,
    "start-date": e.startDate,
    "end-date": e.endDate,
    "show-title": e.showTitle,
    "show-sub-title": e.showSubTitle,
    "to-date-animation": e.toDateAnimation,
    "show-today": e.showToday,
    "first-day-of-week": e.firstDayOfWeek,
    "disabled-date": e.disabledDate,
    onUpdate: e.update,
    onClose: e.close,
    onChoose: e.choose,
    onSelect: e.select
  }, wt({ _: 2 }, [
    e.showTopBtn ? {
      name: "btn",
      fn: oe(() => [
        _(e.$slots, "btn")
      ]),
      key: "0"
    } : void 0,
    e.dayInfo ? {
      name: "day",
      fn: oe((i) => [
        _(e.$slots, "day", {
          date: i.date
        })
      ]),
      key: "1"
    } : void 0,
    e.topInfo ? {
      name: "top-info",
      fn: oe((i) => [
        _(e.$slots, "top-info", {
          date: i.date
        })
      ]),
      key: "2"
    } : void 0,
    e.bottomInfo ? {
      name: "bottom-info",
      fn: oe((i) => [
        _(e.$slots, "bottom-info", {
          date: i.date
        })
      ]),
      key: "3"
    } : void 0
  ]), 1032, ["type", "is-auto-back-fill", "poppable", "title", "confirm-text", "start-text", "end-text", "default-value", "start-date", "end-date", "show-title", "show-sub-title", "to-date-animation", "show-today", "first-day-of-week", "disabled-date", "onUpdate", "onClose", "onChoose", "onSelect"]));
}
const cf = /* @__PURE__ */ ne(rf, [["render", uf]]), df = () => Te(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    width: "18",
    height: "18",
    viewBox: "0 0 18 18"
  },
  [
    Te("path", {
      d: "M6.605 9.49a.771.771 0 0 1 0-.98l3.6-4.372a.771.771 0 0 1 1.19.981L8.2 9l3.197 3.881a.771.771 0 1 1-1.191.98l-3.6-4.37Z"
    })
  ]
), ff = () => Te(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    width: "18",
    height: "18",
    viewBox: "0 0 18 18"
  },
  [
    Te("path", {
      d: "M11.396 9.49a.771.771 0 0 0 0-.98l-3.6-4.372a.771.771 0 0 0-1.191.981L9.8 9l-3.196 3.881a.771.771 0 0 0 1.19.98l3.6-4.37Z"
    })
  ]
), pf = () => Te(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    width: "18",
    height: "18",
    viewBox: "0 0 18 18"
  },
  [
    Te("path", {
      d: "M13.853 4.026a.771.771 0 0 1 .12 1.085L10.864 9l3.11 3.889a.771.771 0 1 1-1.204.963L9.272 9.482a.771.771 0 0 1 0-.964l3.497-4.371a.771.771 0 0 1 1.084-.12Zm-5.245 0a.771.771 0 0 1 .12 1.085L5.617 9l3.111 3.889a.771.771 0 0 1-1.205.963L4.026 9.482a.771.771 0 0 1 0-.964l3.497-4.371a.771.771 0 0 1 1.085-.12Z"
    })
  ]
), mf = () => Te(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    width: "18",
    height: "18",
    viewBox: "0 0 18 18"
  },
  [
    Te("path", {
      d: "M4.147 13.974a.771.771 0 0 1-.12-1.085L7.136 9 4.028 5.11a.771.771 0 1 1 1.204-.963l3.497 4.371a.771.771 0 0 1 0 .964l-3.497 4.371a.771.771 0 0 1-1.084.12Zm5.245 0a.771.771 0 0 1-.12-1.085L12.383 9 9.272 5.11a.771.771 0 1 1 1.205-.963l3.497 4.371a.771.771 0 0 1 0 .964l-3.497 4.371a.771.771 0 0 1-1.085.12Z"
    })
  ]
), nt = (e) => e ? {
  year: e.getFullYear(),
  month: e.getMonth() + 1,
  date: e.getDate()
} : null, qt = (e) => e ? new Date(e.year, e.month - 1, e.date) : null, En = (e) => Array.isArray(e) ? e.map((t) => nt(t)) : e ? [nt(e)] : [], hf = (e) => Array.isArray(e) ? e.map((t) => qt(t)) : e ? [qt(e)] : [], gf = (e, t, n) => {
  let o = t - 1, l = e;
  o <= 0 && (o = 12, l -= 1);
  let s = ce.getMonthPreDay(e, t);
  s -= n, s >= 7 && (s -= 7);
  const a = ce.getMonthDays(`${l}`, `${o}`);
  return Array.from(Array(a), (i, p) => ({
    type: "prev",
    year: l,
    month: o,
    date: p + 1
  })).slice(a - s);
}, vf = (e, t) => {
  const n = ce.getMonthDays(`${e}`, `${t}`);
  return Array.from(Array(n), (o, l) => ({
    type: "current",
    year: e,
    month: t,
    date: l + 1
  }));
}, yf = (e, t) => {
  const n = new Date(e.year, e.month - 1, e.date), o = (n.getDay() + 7 - t) % 7;
  return [
    nt(new Date(n.getTime() - 24 * 60 * 60 * 1e3 * o)),
    nt(new Date(n.getTime() + 24 * 60 * 60 * 1e3 * (6 - o)))
  ];
}, bf = (e, t) => {
  const n = e.year, o = e.month, l = [...gf(n, o, t), ...vf(n, o)], s = l.length, a = e.month === 12 ? e.year + 1 : e.year, r = e.month === 12 ? 1 : e.month + 1;
  for (let i = 1; i <= 42 - s; i++)
    l.push({
      type: "next",
      year: a,
      month: r,
      date: i
    });
  return l;
}, tt = (e, t) => {
  if (e && t)
    return e.year === t.year ? e.month === t.month ? e.date - t.date : e.month - t.month : e.year - t.year;
}, rt = (e, t) => tt(e, t) === 0, $f = { class: "nut-calendarcard" }, wf = { class: "nut-calendarcard-header" }, kf = { class: "nut-calendarcard-header-left" }, Cf = { class: "nut-calendarcard-header-title" }, Sf = { class: "nut-calendarcard-header-right" }, Tf = { class: "nut-calendarcard-content" }, Nf = { class: "nut-calendarcard-days" }, _f = { class: "nut-calendarcard-days" }, Df = ["onClick"], If = { class: "nut-calendarcard-day-top" }, Bf = { class: "nut-calendarcard-day-inner" }, Mf = { class: "nut-calendarcard-day-bottom" }, An = "NutCalendarCard", Po = /* @__PURE__ */ ye({
  name: An,
  __name: "calendar-card",
  props: {
    type: { default: "single" },
    firstDayOfWeek: { default: 0 },
    modelValue: { default: null },
    startDate: { default: null },
    endDate: { default: null },
    disableDay: { type: Function, default: () => !1 }
  },
  emits: ["update:modelValue", "change", "dayClick", "pageChange"],
  setup(e, { expose: t, emit: n }) {
    const o = e, l = n, s = Se(An), r = z((() => {
      let P = new Date(Date.now());
      const M = o.modelValue;
      return Array.isArray(M) ? M.length && (P = M[0]) : M && (P = M), {
        year: P.getFullYear(),
        month: P.getMonth() + 1
      };
    })()), i = z([]), p = T(() => {
      const P = s("weekdays").map((M, C) => ({
        name: M,
        key: C
      }));
      return [...P.slice(o.firstDayOfWeek, 7), ...P.slice(0, o.firstDayOfWeek)];
    }), d = z(o.modelValue ? En(o.modelValue) : []);
    $t(() => {
      const P = o.modelValue ? En(o.modelValue) : [];
      d.value = P;
    });
    const y = (P) => {
      if (d.value = P, o.type === "single") {
        const M = qt(P[0]);
        l("update:modelValue", M), l("change", M);
      } else if (o.type === "multiple" || o.type === "range" || o.type === "week") {
        const M = hf(P);
        l("update:modelValue", M), l("change", M);
      }
    };
    $t(() => {
      const P = bf(r.value, o.firstDayOfWeek);
      i.value = P, l("pageChange", r.value);
    });
    const v = (P) => !!(o.disableDay && o.disableDay(P) || o.startDate && Number(tt(P, nt(o.startDate))) < 0 || o.endDate && Number(tt(P, nt(o.endDate))) > 0), b = (P) => {
      if (o.type === "single" || o.type === "multiple") {
        for (const M in d.value)
          if (rt(P, d.value[M]))
            return !0;
      } else if (o.type === "range" && d.value.length === 1 && rt(d.value[0], P))
        return !0;
      return !1;
    }, w = (P) => (o.type === "range" || o.type === "week") && d.value.length === 2 && rt(P, d.value[0]), S = (P) => (o.type === "range" || o.type === "week") && d.value.length === 2 && rt(P, d.value[1]), u = (P) => {
      if ((o.type === "range" || o.type === "week") && d.value.length === 2) {
        const M = tt(d.value[0], P), C = tt(P, d.value[1]);
        if (M && M < 0 && C && C < 0)
          return !0;
      }
      return !1;
    }, m = (P) => {
      const M = new Date(P.year, P.month - 1, P.date).getDay();
      return M === 0 || M === 6;
    }, h = (P) => {
      if (v(P))
        return ["disabled"];
      const M = [];
      return P.type === "current" && (b(P) && M.push("active"), w(P) && M.push("start"), S(P) && M.push("end"), u(P) && M.push("mid"), m(P) && M.push("weekend")), M;
    }, $ = (P, M) => {
      if (o.startDate) {
        const C = tt(
          {
            year: P,
            month: M,
            date: 31
          },
          nt(o.startDate)
        );
        if (C && C < 0)
          return;
      }
      if (o.endDate) {
        const C = tt(
          {
            year: P,
            month: M,
            date: 1
          },
          nt(o.endDate)
        );
        if (C && C > 0)
          return;
      }
      r.value = {
        year: P,
        month: M
      };
    }, L = (P = 1) => {
      const M = r.value.year * 12 + r.value.month;
      let C = (M + P) % 12;
      C === 0 && (C = 12);
      const k = Math.floor((M + P - C) / 12);
      $(k, C);
    }, I = (P) => {
      if (!(P.type === "prev" || P.type === "next" || v(P)))
        switch (l("dayClick", P), o.type) {
          case "single": {
            d.value[0] && rt(d.value[0], P) ? y([]) : y([P]);
            break;
          }
          case "multiple": {
            const M = d.value.find((C) => rt(C, P));
            y(M ? d.value.filter((C) => C !== M) : [...d.value, P]);
            break;
          }
          case "range": {
            const M = d.value.length;
            if (M === 0 || M === 2)
              y([P]);
            else if (M === 1) {
              const C = tt(d.value[0], P);
              C == null ? y([]) : C < 0 ? y([d.value[0], P]) : y([P, d.value[0]]);
            } else
              console.warn("[NutUI] Calendar range error");
            break;
          }
          case "week": {
            if (d.value.length === 2 || d.value.length === 0) {
              const [M, C] = yf(P, o.firstDayOfWeek);
              y([M, C]);
            } else
              console.warn("[NutUI] Calendar week error");
            break;
          }
          default:
            console.warn("[NutUI] Calendar type error");
        }
    };
    return t({
      jump: L,
      jumpTo: $
    }), (P, M) => Ie((c(), f("div", $f, [
      g("div", wf, [
        g("div", kf, [
          g("div", {
            class: "double-left",
            onClick: M[0] || (M[0] = (C) => L(-12))
          }, [
            te(pe(pf))
          ]),
          g("div", {
            class: "left",
            onClick: M[1] || (M[1] = (C) => L(-1))
          }, [
            te(pe(df))
          ])
        ]),
        g("div", Cf, E(pe(s)("monthTitle", r.value.year, r.value.month)), 1),
        g("div", Sf, [
          g("div", {
            class: "right",
            onClick: M[2] || (M[2] = (C) => L(1))
          }, [
            te(pe(ff))
          ]),
          g("div", {
            class: "double-right",
            onClick: M[3] || (M[3] = (C) => L(12))
          }, [
            te(pe(mf))
          ])
        ])
      ]),
      g("div", Tf, [
        g("div", Nf, [
          (c(!0), f(J, null, ie(p.value, (C) => (c(), f("div", {
            key: C.name,
            class: B(["nut-calendarcard-day header", C.key === 0 || C.key === 6 ? "weekend" : ""])
          }, E(C.name), 3))), 128))
        ]),
        g("div", _f, [
          (c(!0), f(J, null, ie(i.value, (C) => (c(), f("div", {
            key: `${C.year}-${C.month}-${C.date}`,
            class: B(["nut-calendarcard-day", [C.type, ...h(C)]]),
            onClick: (k) => I(C)
          }, [
            g("div", If, [
              _(P.$slots, "top", { day: C })
            ]),
            g("div", Bf, [
              _(P.$slots, "default", { day: C }, () => [
                ge(E(C.date), 1)
              ])
            ]),
            g("div", Mf, [
              _(P.$slots, "bottom", { day: C })
            ])
          ], 10, Df))), 128))
        ])
      ])
    ], 512)), [
      [Me, i.value.length > 0]
    ]);
  }
});
we(Po);
const Eo = Symbol("nut-checkbox"), { create: Lf, componentName: et } = x("checkbox"), Pf = Lf({
  props: {
    modelValue: {
      type: Boolean,
      default: !1
    },
    disabled: {
      type: Boolean,
      default: !1
    },
    textPosition: {
      type: String,
      default: "right"
    },
    iconSize: {
      type: [String, Number],
      default: ""
    },
    label: {
      type: String,
      default: ""
    },
    indeterminate: {
      type: Boolean,
      default: !1
    },
    shape: {
      type: String,
      default: "round"
      // button
    }
  },
  emits: ["change", "update:modelValue"],
  setup(e, { emit: t, slots: n }) {
    const o = Ze(Qe(e, "disabled")), l = Ae(Eo, null), s = me({
      partialSelect: e.indeterminate
    }), a = T(() => !!l), r = T(() => a.value ? l.value.value.includes(e.label) : e.modelValue), i = T(() => a.value && l.disabled.value ? l.disabled.value : o.value), p = T(() => !!e.modelValue), d = T(() => i.value ? "nut-checkbox__icon--disable" : s.partialSelect ? "nut-checkbox__icon--indeterminate" : r.value ? "nut-checkbox__icon" : "nut-checkbox__icon--unchecked");
    let y = "";
    const v = (m, h) => {
      y = "click", t("update:modelValue", m), t("change", m, h);
    };
    Q(
      () => e.modelValue,
      (m) => {
        y == "click" ? y = "" : t("change", m);
      }
    );
    const b = () => {
      const { iconSize: m } = e, h = {
        CheckNormal: n.icon ? n.icon : xn,
        Checked: n.checkedIcon ? n.checkedIcon : to,
        CheckDisabled: n.indeterminate ? n.indeterminate : Gl
      }, $ = s.partialSelect ? h.CheckDisabled : r.value ? h.Checked : h.CheckNormal, L = Be(m);
      return Te($, {
        width: L,
        height: L,
        size: L,
        class: d.value
      });
    }, w = () => {
      var m;
      return Te(
        "view",
        {
          class: `${et}__label ${i.value ? `${et}__label--disabled` : ""}`
        },
        (m = n.default) == null ? void 0 : m.call(n)
      );
    }, S = () => {
      var m;
      return Te(
        "view",
        {
          class: `${et}__button ${r.value && `${et}__button--active`} ${i.value ? `${et}__button--disabled` : ""}`
        },
        (m = n.default) == null ? void 0 : m.call(n)
      );
    }, u = () => {
      var m, h;
      if (!i.value) {
        if (p.value && s.partialSelect) {
          s.partialSelect = !1, v(p.value, (m = n.default) == null ? void 0 : m.call(n)[0].children);
          return;
        }
        if (v(!p.value, (h = n.default) == null ? void 0 : h.call(n)[0].children), a.value) {
          const $ = l.value.value, L = l.max.value, { label: I } = e, P = $.indexOf(I);
          P > -1 ? $.splice(P, 1) : P <= -1 && ($.length < L || !L) && $.push(I), l.updateValue($);
        }
      }
    };
    return $e(() => {
      a.value && l.link(Xe());
    }), Qt(() => {
      a.value && l.unlink(Xe());
    }), Q(
      () => e.indeterminate,
      (m) => {
        s.partialSelect = m;
      }
    ), () => Te(
      "view",
      {
        class: `${et} ${et}--${e.shape} ${e.textPosition === "left" ? `${et}--reverse` : ""}`,
        onClick: u
      },
      [e.shape == "button" ? S() : [b(), w()]]
    );
  }
}), { create: Ef, componentName: Af } = x("checkbox-group"), zf = Ef({
  props: {
    modelValue: {
      type: Array,
      default: () => []
    },
    disabled: {
      type: Boolean,
      default: !1
    },
    max: {
      type: Number,
      default: 0
    }
  },
  emits: ["change", "update:modelValue"],
  setup(e, { slots: t, emit: n, expose: o }) {
    const l = me({
      children: []
    }), s = (d) => {
      d.proxy && l.children.push(d.proxy);
    }, a = (d) => {
      d.proxy && (l.children = l.children.filter((y) => y !== d.proxy));
    }, r = (d) => {
      n("update:modelValue", d), n("change", d);
    }, i = (d) => {
      const y = [];
      d && l.children.forEach((v) => {
        v != null && v.disabled || y.push(v == null ? void 0 : v.label);
      }), n("update:modelValue", y);
    }, p = () => {
      const d = l.children.filter((y) => y != null && y.disabled ? !1 : !e.modelValue.includes(y.label)).map((y) => y.label);
      n("update:modelValue", d);
    };
    return Oe(Eo, {
      value: T(() => e.modelValue),
      disabled: T(() => e.disabled),
      max: T(() => e.max),
      updateValue: r,
      link: s,
      unlink: a
    }), Q(
      () => e.modelValue,
      (d) => {
        n("change", d);
      }
    ), o({ toggleAll: i, toggleReverse: p }), () => {
      var d;
      return Te(
        "view",
        {
          class: Af
        },
        (d = t.default) == null ? void 0 : d.call(t)
      );
    };
  }
}), Vf = {
  text: "text",
  value: "value",
  children: "children",
  className: "className"
}, Of = (e, t) => {
  const n = me({
    formattedColumns: e.columns
  }), o = T(() => q(q({}, Vf), e.fieldNames)), l = z([]), s = T(() => {
    const u = o.value;
    return d.value.map((m, h) => {
      const $ = m.findIndex((L) => L[u.value] === l.value[h]);
      return $ === -1 ? 0 : $;
    });
  }), a = z([]), r = (u) => {
    u && a.value.length < d.value.length && a.value.push(u);
  }, i = T(() => {
    const u = o.value;
    return d.value.map((m, h) => m.find(($) => $[u.value] === l.value[h]) || m[0]);
  }), p = T(() => {
    const u = n.formattedColumns[0], m = o.value;
    if (u) {
      if (Array.isArray(u))
        return "multiple";
      if (m.children in u)
        return "cascade";
    }
    return "single";
  }), d = T(() => {
    let u = [];
    switch (p.value) {
      case "multiple":
        u = n.formattedColumns;
        break;
      case "cascade":
        u = y(n.formattedColumns, l.value ? l.value : []);
        break;
      default:
        u = [n.formattedColumns];
        break;
    }
    return u;
  }), y = (u, m) => {
    const h = [], $ = o.value;
    let L = {
      text: "",
      value: "",
      [$.children]: u
    }, I = 0;
    for (; L && L[$.children]; ) {
      const P = L[$.children], M = m[I];
      let C = P.findIndex((k) => k[$.value] === M);
      C === -1 && (C = 0), L = L[$.children][C], I++, h.push(P);
    }
    return h;
  }, v = () => {
    t("cancel", {
      selectedValue: l.value,
      selectedOptions: i.value
    });
  }, b = (u, m) => {
    var $;
    const h = o.value;
    if (m && Object.keys(m).length) {
      if (l.value = l.value ? l.value : [], p.value === "cascade") {
        l.value[u] = ($ = m[h.value]) != null ? $ : "";
        let L = u, I = m;
        for (; I && I[h.children] && I[h.children][0]; )
          l.value[L + 1] = I[h.children][0][h.value], L++, I = I[h.children][0];
        I && I[h.children] && I[h.children].length === 0 && (l.value = l.value.slice(0, L + 1));
      } else
        l.value[u] = Object.prototype.hasOwnProperty.call(m, h.value) ? m[h.value] : "";
      t("change", {
        columnIndex: u,
        selectedValue: l.value,
        selectedOptions: i.value
      });
    }
  }, w = () => {
    const u = o.value;
    l.value && !l.value.length && d.value.forEach((m) => {
      l.value.push(m[0][u.value]);
    }), t("confirm", {
      selectedValue: l.value,
      selectedOptions: i.value
    });
  }, S = (u, m) => JSON.stringify(u) === JSON.stringify(m);
  return Q(
    () => e.modelValue,
    (u) => {
      S(u, l.value) || (l.value = u);
    },
    { deep: !0, immediate: !0 }
  ), Q(
    l,
    (u) => {
      S(u, e.modelValue) || t("update:modelValue", u);
    },
    { deep: !0 }
  ), Q(
    () => e.columns,
    (u) => {
      n.formattedColumns = u;
    }
  ), fe(q({}, be(n)), {
    columnsType: p,
    columnsList: d,
    columnFieldNames: o,
    cancel: v,
    changeHandler: b,
    confirm: w,
    defaultValues: l,
    defaultIndexes: s,
    pickerColumn: a,
    swipeRef: r,
    selectedOptions: i,
    isSameValue: S
  });
}, { create: Hf } = x("picker-column"), Rf = Hf({
  props: {
    // 当前选中项
    value: [String, Number],
    columnsType: String,
    column: {
      type: Array,
      default: () => []
    },
    // 是否开启3D效果
    threeDimensional: {
      type: Boolean,
      default: !0
    },
    swipeDuration: {
      type: [Number, String],
      default: 1e3
    },
    visibleOptionNum: {
      type: [Number, String],
      default: 7
    },
    optionHeight: {
      type: [Number, String],
      default: 36
    },
    fieldNames: {
      type: Object,
      default: () => ({})
    },
    // 特殊环境判断
    taro: {
      type: Boolean,
      default: !1
    }
  },
  emits: ["click", "change"],
  setup(e, { emit: t }) {
    const n = xe(), o = me({
      touchParams: {
        startY: 0,
        endY: 0,
        startTime: 0,
        endTime: 0,
        lastY: 0,
        lastTime: 0
      },
      currIndex: 1,
      transformY: 0,
      scrollDistance: 0,
      rotation: 20
    }), l = z(null), s = z(!1), a = z(0), r = z(0), i = 200, p = 300, d = 15, y = T(() => ({
      transition: `transform ${r.value}ms cubic-bezier(0.17, 0.89, 0.45, 1)`,
      transform: `rotate3d(1, 0, 0, ${a.value})`,
      top: `calc(50% - ${+e.optionHeight / 2}px)`
    })), v = T(() => {
      const { optionHeight: k } = e;
      return {
        transition: `transform ${r.value}ms cubic-bezier(0.17, 0.89, 0.45, 1)`,
        transform: `translate3d(0, ${o.scrollDistance}px, 0)`,
        top: `calc(50% - ${+k / 2}px)`,
        height: `${k}px`
      };
    }), b = (k) => `transform: rotate3d(1, 0, 0, ${-o.rotation * k}deg) translate3d(0px, 0px, 104px)`, w = T(() => ({
      backgroundSize: `100% ${(+e.visibleOptionNum - 1) * +e.optionHeight / 2}px`
    })), S = (k) => {
      if (n.start(k), s.value && !e.taro) {
        const D = l.value, { transform: V } = window.getComputedStyle(D);
        if (e.threeDimensional) {
          const j = Math.floor(parseInt(a.value) / 360), X = +V.split(", ")[5], le = +V.split(", ")[6] < 0 ? 180 : 0, W = j * 360 + Math.acos(X) / Math.PI * 180 + le;
          o.scrollDistance = -Math.abs((W / o.rotation - 1) * +e.optionHeight);
        } else
          o.scrollDistance = +V.slice(7, V.length - 1).split(", ")[5];
      }
      ft(k, !0), o.touchParams.startY = n.deltaY.value, o.touchParams.startTime = Date.now(), o.transformY = o.scrollDistance;
    }, u = (k) => {
      n.move(k), n.isVertical() && (s.value = !0, ft(k, !0)), o.touchParams.lastY = n.deltaY.value;
      let D = o.touchParams.lastY - o.touchParams.startY;
      I(D);
    }, m = () => {
      o.touchParams.lastY = n.deltaY.value, o.touchParams.lastTime = Date.now();
      let k = o.touchParams.lastY - o.touchParams.startY, D = o.touchParams.lastTime - o.touchParams.startTime;
      if (D <= p && Math.abs(k) > d) {
        const V = h(k, D);
        I(V, "end", +e.swipeDuration);
        return;
      } else
        I(k, "end");
      setTimeout(() => {
        n.reset(), s.value = !1;
      }, 0);
    }, h = (k, D) => (k = Math.abs(k / D) / 3e-3 * (k < 0 ? -1 : 1), k), $ = (k) => k >= o.currIndex + 8 || k <= o.currIndex - 8, L = (k = 0, D, V = i, j) => {
      D === "end" ? r.value = V : r.value = 0, a.value = j, o.scrollDistance = k;
    }, I = (k, D, V) => {
      const { optionHeight: j } = e;
      let X = k + o.transformY;
      if (D === "end") {
        X > 0 && (X = 0), X < -(e.column.length - 1) * +j && (X = -(e.column.length - 1) * +j);
        let le = Math.round(X / +j) * +j, W = `${(Math.abs(Math.round(le / +j)) + 1) * o.rotation}deg`;
        L(le, D, V, W), o.currIndex = Math.abs(Math.round(le / +j)) + 1;
      } else {
        let le = 0, W = (-X / +j + 1) * o.rotation;
        const Y = (e.column.length + 1) * o.rotation, R = 0;
        le = ze(W, R, Y), R < le && le < Y && (L(X, null, void 0, le + "deg"), o.currIndex = Math.abs(Math.round(X / +j)) + 1);
      }
    }, P = () => {
      t("change", e.column[o.currIndex - 1]);
    }, M = (k) => {
      const { column: D } = e;
      let V = D.findIndex((X) => X[e.fieldNames.value] === e.value);
      o.currIndex = V === -1 ? 1 : V + 1;
      let j = V === -1 ? 0 : V * +e.optionHeight;
      k && P(), I(-j);
    }, C = () => {
      s.value = !1, r.value = 0, P();
    };
    return Q(
      () => e.column,
      () => {
        e.column && e.column.length > 0 && (o.transformY = 0, M(!1));
      },
      {
        deep: !0
      }
    ), Q(
      () => e.value,
      () => {
        o.transformY = 0, M(!1);
      },
      {
        deep: !0
      }
    ), $e(() => {
      M(!0);
    }), fe(q(q({}, be(o)), be(e)), {
      setRollerStyle: b,
      isHidden: $,
      roller: l,
      onTouchStart: S,
      onTouchMove: u,
      onTouchEnd: m,
      touchRollerStyle: y,
      touchTileStyle: v,
      setMove: I,
      stopMomentum: C,
      pxCheck: Be,
      maskStyles: w
    });
  }
});
function Ff(e, t, n, o, l, s) {
  return c(), f("view", {
    class: "nut-picker__list",
    onTouchstart: t[1] || (t[1] = (...a) => e.onTouchStart && e.onTouchStart(...a)),
    onTouchmove: t[2] || (t[2] = (...a) => e.onTouchMove && e.onTouchMove(...a)),
    onTouchend: t[3] || (t[3] = (...a) => e.onTouchEnd && e.onTouchEnd(...a))
  }, [
    g("view", {
      ref: "roller",
      class: "nut-picker-roller",
      style: A(e.threeDimensional ? e.touchRollerStyle : e.touchTileStyle),
      onTransitionend: t[0] || (t[0] = (...a) => e.stopMomentum && e.stopMomentum(...a))
    }, [
      (c(!0), f(J, null, ie(e.column, (a, r) => {
        var i;
        return c(), f(J, {
          key: (i = a[e.fieldNames.value]) != null ? i : r
        }, [
          a && a[e.fieldNames.text] && e.threeDimensional ? (c(), f("view", {
            key: 0,
            class: B(["nut-picker-roller-item", {
              "nut-picker-roller-item-hidden": e.isHidden(r + 1),
              [a[e.fieldNames.className]]: a[e.fieldNames.className]
            }]),
            style: A(e.setRollerStyle(r + 1))
          }, E(a[e.fieldNames.text]), 7)) : N("", !0),
          a && a[e.fieldNames.text] && !e.threeDimensional ? (c(), f("view", {
            key: 1,
            class: B(["nut-picker-roller-item-tile", {
              [a[e.fieldNames.className]]: a[e.fieldNames.className]
            }]),
            style: A({ height: e.pxCheck(e.optionHeight), lineHeight: e.pxCheck(e.optionHeight) })
          }, E(a[e.fieldNames.text]), 7)) : N("", !0)
        ], 64);
      }), 128))
    ], 36),
    g("view", {
      class: "nut-picker-roller-mask",
      style: A(e.maskStyles)
    }, null, 4)
  ], 32);
}
const Wf = /* @__PURE__ */ ne(Rf, [["render", Ff]]), Yf = {
  modelValue: {
    type: Array,
    default: () => []
  },
  title: {
    type: String,
    default: ""
  },
  cancelText: {
    type: String,
    default: ""
  },
  okText: {
    type: String,
    default: ""
  },
  columns: {
    type: Array,
    default: () => []
  },
  threeDimensional: {
    type: Boolean,
    default: !1
  },
  swipeDuration: {
    type: [Number, String],
    default: 1e3
  },
  showToolbar: {
    type: Boolean,
    default: !0
  },
  visibleOptionNum: {
    type: [Number, String],
    default: 7
  },
  optionHeight: {
    type: [Number, String],
    default: 36
  },
  fieldNames: {
    type: Object,
    default: () => ({})
  }
}, { create: jf } = x("picker"), Kf = "NutPicker", Uf = jf({
  components: {
    NutPickerColumn: Wf
  },
  props: Yf,
  emits: ["cancel", "change", "confirm", "update:modelValue"],
  setup(e, { emit: t }) {
    const n = Se(Kf), { changeHandler: o, confirm: l, defaultValues: s, columnsList: a, columnsType: r, columnFieldNames: i, cancel: p } = Of(
      e,
      t
    ), d = z([]), y = (w) => {
      w && d.value.length < a.value.length && d.value.push(w);
    }, v = T(() => {
      const w = {};
      return w.height = `${+e.visibleOptionNum * +e.optionHeight}px`, w["--lineHeight"] = `${+e.optionHeight}px`, w;
    });
    return {
      columnsType: r,
      columnsList: a,
      columnFieldNames: i,
      cancel: p,
      changeHandler: o,
      confirmHandler: () => {
        d.value.length > 0 && d.value.forEach((w) => {
          w.stopMomentum();
        }), l();
      },
      defaultValues: s,
      translate: n,
      pickerColumn: d,
      swipeRef: y,
      columnStyle: v
    };
  }
}), Xf = { class: "nut-picker" }, qf = {
  key: 0,
  class: "nut-picker__bar"
}, Zf = { class: "nut-picker__title" };
function Gf(e, t, n, o, l, s) {
  const a = U("nut-picker-column");
  return c(), f("div", Xf, [
    e.showToolbar ? (c(), f("view", qf, [
      g("view", {
        class: "nut-picker__left",
        onClick: t[0] || (t[0] = (...r) => e.cancel && e.cancel(...r))
      }, E(e.cancelText || e.translate("cancel")), 1),
      g("view", Zf, E(e.title), 1),
      g("view", {
        class: "nut-picker__right",
        onClick: t[1] || (t[1] = (...r) => e.confirmHandler && e.confirmHandler(...r))
      }, E(e.okText || e.translate("confirm")), 1)
    ])) : N("", !0),
    _(e.$slots, "top"),
    g("view", {
      class: "nut-picker__column",
      style: A(e.columnStyle)
    }, [
      (c(!0), f(J, null, ie(e.columnsList, (r, i) => (c(), f("view", {
        key: i,
        class: "nut-picker__columnitem"
      }, [
        te(a, {
          ref_for: !0,
          ref: e.swipeRef,
          column: r,
          "columns-type": e.columnsType,
          "field-names": e.columnFieldNames,
          value: e.defaultValues && e.defaultValues[i],
          "three-dimensional": e.threeDimensional,
          "swipe-duration": e.swipeDuration,
          "visible-option-num": e.visibleOptionNum,
          "option-height": e.optionHeight,
          onChange: (p) => {
            e.changeHandler(i, p);
          }
        }, null, 8, ["column", "columns-type", "field-names", "value", "three-dimensional", "swipe-duration", "visible-option-num", "option-height", "onChange"])
      ]))), 128))
    ], 4),
    _(e.$slots, "default")
  ]);
}
const Ao = /* @__PURE__ */ ne(Uf, [["render", Gf]]), { create: Jf } = x("date-picker"), zn = (/* @__PURE__ */ new Date()).getFullYear();
function jt(e) {
  return Sl(e) && !isNaN(e.getTime());
}
const Qf = {
  day: "日",
  year: "年",
  month: "月",
  hour: "时",
  minute: "分",
  seconds: "秒"
}, xf = Jf({
  components: {
    NutPicker: Ao
  },
  props: {
    modelValue: null,
    title: {
      type: String,
      default: ""
    },
    okText: {
      type: String,
      default: ""
    },
    cancelText: {
      type: String,
      default: ""
    },
    type: {
      type: String,
      default: "date"
    },
    isShowChinese: {
      type: Boolean,
      default: !1
    },
    minuteStep: {
      type: Number,
      default: 1
    },
    minDate: {
      type: Date,
      default: () => new Date(zn - 10, 0, 1),
      validator: jt
    },
    maxDate: {
      type: Date,
      default: () => new Date(zn + 10, 11, 31),
      validator: jt
    },
    formatter: {
      type: Function,
      default: null
    },
    // 是否开启3D效果
    threeDimensional: {
      type: Boolean,
      default: !0
    },
    // 惯性滚动 时长
    swipeDuration: {
      type: [Number, String],
      default: 1e3
    },
    filter: Function,
    showToolbar: {
      type: Boolean,
      default: !0
    },
    visibleOptionNum: {
      type: [Number, String],
      default: 7
    },
    optionHeight: {
      type: [Number, String],
      default: 36
    }
  },
  emits: ["click", "cancel", "change", "confirm", "update:modelValue"],
  setup(e, { emit: t }) {
    const n = me({
      currentDate: /* @__PURE__ */ new Date(),
      title: e.title,
      selectedValue: []
    }), o = (u) => {
      jt(u) || (u = e.minDate);
      let m = Math.max(u.getTime(), e.minDate.getTime());
      return m = Math.min(m, e.maxDate.getTime()), new Date(m);
    };
    function l(u, m) {
      return 32 - new Date(u, m - 1, 32).getDate();
    }
    const s = (u, m) => {
      const h = u == "min" ? e.minDate : e.maxDate, $ = h.getFullYear();
      let L = 1, I = 1, P = 0, M = 0;
      u === "max" && (L = 12, I = l(m.getFullYear(), m.getMonth() + 1), P = 23, M = 59);
      let C = M;
      return m.getFullYear() === $ && (L = h.getMonth() + 1, m.getMonth() + 1 === L && (I = h.getDate(), m.getDate() === I && (P = h.getHours(), m.getHours() === P && (M = h.getMinutes(), m.getMinutes() === M && (C = h.getSeconds()))))), {
        [`${u}Year`]: $,
        [`${u}Month`]: L,
        [`${u}Date`]: I,
        [`${u}Hour`]: P,
        [`${u}Minute`]: M,
        [`${u}Seconds`]: C
      };
    }, a = T(() => {
      const { maxYear: u, maxDate: m, maxMonth: h, maxHour: $, maxMinute: L, maxSeconds: I } = s("max", n.currentDate), { minYear: P, minDate: M, minMonth: C, minHour: k, minMinute: D, minSeconds: V } = s("min", n.currentDate);
      return w([
        {
          type: "year",
          range: [P, u]
        },
        {
          type: "month",
          range: [C, h]
        },
        {
          type: "day",
          range: [M, m]
        },
        {
          type: "hour",
          range: [k, $]
        },
        {
          type: "minute",
          range: [D, L]
        },
        {
          type: "seconds",
          range: [V, I]
        }
      ]);
    }), r = T(() => a.value.map((m, h) => d(m.range[0], m.range[1], y(m.type), m.type, h))), i = ({
      columnIndex: u,
      selectedValue: m,
      selectedOptions: h
    }) => {
      let $ = [];
      m.forEach((C) => {
        $.push(C);
      }), e.type == "month-day" && $.length < 3 && $.unshift(new Date(n.currentDate || e.minDate || e.maxDate).getFullYear()), e.type == "year-month" && $.length < 3 && $.push(new Date(n.currentDate || e.minDate || e.maxDate).getDate());
      const L = Number($[0]), I = Number($[1]) - 1, P = Math.min(Number($[2]), l(Number($[0]), Number($[1])));
      let M = null;
      if (e.type === "date" || e.type === "month-day" || e.type === "year-month")
        M = new Date(L, I, P);
      else if (e.type === "datetime")
        M = new Date(L, I, P, Number($[3]), Number($[4]));
      else if (e.type === "datehour")
        M = new Date(L, I, P, Number($[3]));
      else if (e.type === "hour-minute" || e.type === "time") {
        M = new Date(n.currentDate);
        const C = M.getFullYear(), k = M.getMonth(), D = M.getDate();
        M = new Date(C, k, D, Number($[0]), Number($[1]), Number($[2] || 0));
      }
      n.currentDate = o(M), t("change", { columnIndex: u, selectedValue: m, selectedOptions: h });
    }, p = (u, m) => {
      const { formatter: h, isShowChinese: $ } = e;
      let L = null;
      if (h)
        L = h(u, { text: Je(m, 2), value: Je(m, 2) });
      else {
        const I = Je(m, 2), P = $ ? Qf[u] : "";
        L = { text: I + P, value: I };
      }
      return L;
    }, d = (u, m, h, $, L) => {
      const I = [];
      let P = 0;
      for (; u <= m; )
        I.push(p($, u)), $ === "minute" ? u += e.minuteStep : u++, u <= Number(h) && P++;
      return n.selectedValue[L] = I[P].value, e.filter ? e.filter($, I) : I;
    }, y = (u) => u === "year" ? n.currentDate.getFullYear() : u === "month" ? n.currentDate.getMonth() + 1 : u === "day" ? n.currentDate.getDate() : u === "hour" ? n.currentDate.getHours() : u === "minute" ? n.currentDate.getMinutes() : u === "seconds" ? n.currentDate.getSeconds() : 0, v = (u) => {
      t("cancel", u);
    }, b = (u) => {
      t("confirm", u);
    }, w = (u) => {
      switch (e.type) {
        case "date":
          u = u.slice(0, 3);
          break;
        case "datetime":
          u = u.slice(0, 5);
          break;
        case "time":
          u = u.slice(3, 6);
          break;
        case "year-month":
          u = u.slice(0, 2);
          break;
        case "month-day":
          u = u.slice(1, 3);
          break;
        case "datehour":
          u = u.slice(0, 4);
          break;
        case "hour-minute":
          u = u.slice(3, 5);
          break;
      }
      return u;
    }, S = (u) => {
      const m = [
        u.getFullYear(),
        u.getMonth() + 1,
        u.getDate(),
        u.getHours(),
        u.getMinutes(),
        u.getSeconds()
      ];
      return w(m.map((h) => String(h)));
    };
    return Un(() => {
      n.currentDate = o(e.modelValue);
    }), Q(
      () => e.modelValue,
      (u) => {
        const m = o(u);
        JSON.stringify(m) === JSON.stringify(n.currentDate) || (n.currentDate = m, n.selectedValue = S(m));
      }
    ), Q(
      () => n.currentDate,
      (u) => {
        JSON.stringify(u) === JSON.stringify(e.modelValue) || t("update:modelValue", u);
      }
    ), Q(
      () => e.title,
      (u) => {
        n.title = u;
      }
    ), fe(q({}, be(n)), {
      changeHandler: i,
      closeHandler: v,
      confirm: b,
      columns: r
    });
  }
});
function ep(e, t, n, o, l, s) {
  const a = U("nut-picker");
  return c(), G(a, {
    modelValue: e.selectedValue,
    "onUpdate:modelValue": t[0] || (t[0] = (r) => e.selectedValue = r),
    "ok-text": e.okText,
    "cancel-text": e.cancelText,
    columns: e.columns,
    title: e.title,
    "three-dimensional": e.threeDimensional,
    "swipe-duration": e.swipeDuration,
    "show-toolbar": e.showToolbar,
    "visible-option-num": e.visibleOptionNum,
    "option-height": e.optionHeight,
    onCancel: e.closeHandler,
    onChange: e.changeHandler,
    onConfirm: e.confirm
  }, {
    top: oe(() => [
      _(e.$slots, "top")
    ]),
    default: oe(() => [
      _(e.$slots, "default")
    ]),
    _: 3
  }, 8, ["modelValue", "ok-text", "cancel-text", "columns", "title", "three-dimensional", "swipe-duration", "show-toolbar", "visible-option-num", "option-height", "onCancel", "onChange", "onConfirm"]);
}
const tp = /* @__PURE__ */ ne(xf, [["render", ep]]), np = ["min", "max", "disabled", "readonly", "value"], Vt = /* @__PURE__ */ ye({
  name: "NutInputNumber",
  inheritAttrs: !1,
  __name: "input-number",
  props: {
    modelValue: { default: 0 },
    inputWidth: { default: "" },
    buttonSize: { default: "" },
    min: { default: 1 },
    max: { default: 9999 },
    step: { default: 1 },
    decimalPlaces: { default: 0 },
    disabled: { type: Boolean, default: !1 },
    readonly: { type: Boolean, default: !1 }
  },
  emits: ["update:modelValue", "change", "blur", "focus", "reduce", "add", "overlimit"],
  setup(e, { emit: t }) {
    const n = e, o = t, l = Ze(Qe(n, "disabled")), s = T(() => {
      const u = "nut-input-number";
      return {
        [u]: !0,
        [`${u}--disabled`]: l.value
      };
    }), a = (u) => Number(u).toFixed(Number(n.decimalPlaces)), r = (u) => {
      const m = u.target;
      o("update:modelValue", m.value, u), o("change", m.value, u);
    }, i = (u, m) => {
      let h = a(u);
      o("update:modelValue", h, m), Number(n.modelValue) !== Number(h) && o("change", h, m);
    }, p = (u = Number(n.modelValue)) => u < Number(n.max) && !l.value, d = (u = Number(n.modelValue)) => u > Number(n.min) && !l.value, y = (u) => {
      if (l.value)
        return;
      o("reduce", u);
      let m = Number(n.modelValue) - Number(n.step);
      d() && m >= Number(n.min) ? i(m, u) : (i(Number(n.min), u), o("overlimit", u, "reduce"));
    }, v = (u) => {
      if (l.value)
        return;
      o("add", u);
      let m = Number(n.modelValue) + Number(n.step);
      p() && m <= Number(n.max) ? i(m, u) : (i(Number(n.max), u), o("overlimit", u, "add"));
    }, b = (u) => {
      l.value || n.readonly || o("focus", u);
    }, w = (u) => {
      if (l.value || n.readonly)
        return;
      const m = u.target;
      let h = Number(m.value);
      h < Number(n.min) ? h = Number(n.min) : h > Number(n.max) && (h = Number(n.max)), i(h, u), o("blur", u);
    }, S = (u) => {
      let m = Number(u);
      return m < Number(n.min) ? m = Number(n.min) : m > Number(n.max) && (m = Number(n.max)), m;
    };
    return Q(
      () => [n.max, n.min],
      () => {
        Number(n.min) > Number(n.max) && console.warn("[NutUI] <InputNumber>", "props.max < props.min");
        const u = S(n.modelValue);
        u !== Number(n.modelValue) && i(u, {});
      }
    ), (u, m) => (c(), f("view", {
      class: B(s.value)
    }, [
      g("view", {
        class: B(["nut-input-number__icon nut-input-number__left", { "nut-input-number__icon--disabled": !d() }]),
        onClick: y
      }, [
        _(u.$slots, "left-icon", {}, () => [
          te(pe(Xa), {
            width: pe(Be)(u.buttonSize),
            height: pe(Be)(u.buttonSize)
          }, null, 8, ["width", "height"])
        ])
      ], 2),
      g("input", dt({ type: "number" }, u.$attrs, {
        min: u.min,
        max: u.max,
        style: { width: pe(Be)(u.inputWidth), height: pe(Be)(u.buttonSize) },
        disabled: pe(l),
        readonly: u.readonly,
        value: u.modelValue,
        onInput: r,
        onBlur: w,
        onFocus: b
      }), null, 16, np),
      g("view", {
        class: B(["nut-input-number__icon nut-input-number__right", { "nut-input-number__icon--disabled": !p() }]),
        onClick: v
      }, [
        _(u.$slots, "right-icon", {}, () => [
          te(pe(pr), {
            width: pe(Be)(u.buttonSize),
            height: pe(Be)(u.buttonSize)
          }, null, 8, ["width", "height"])
        ])
      ], 2)
    ], 2));
  }
});
we(Vt);
function Vn(e, t, n) {
  const o = e.indexOf(t);
  return o === -1 ? e : t === "-" && o !== 0 ? e.slice(0, o) : e.slice(0, o + 1) + e.slice(o).replace(n, "");
}
function op(e, t = !0, n = !0) {
  t ? e = Vn(e, ".", /\./g) : e = e.split(".")[0], n ? e = Vn(e, "-", /-/g) : e = e.replace(/-/, "");
  const o = t ? /[^-0-9.]/g : /[^-0-9]/g;
  return e.replace(o, "");
}
function lp(e) {
  return e === "number" ? {
    type: "text",
    inputmode: "decimal"
  } : e === "digit" ? {
    type: "tel",
    inputmode: "numeric"
  } : { type: e };
}
const { componentName: sp, create: ap } = x("input"), rp = ap({
  props: {
    type: {
      type: String,
      default: "text"
    },
    modelValue: {
      type: [String, Number],
      default: ""
    },
    placeholder: {
      type: String,
      default: ""
    },
    inputAlign: {
      type: String,
      default: "left"
    },
    required: {
      type: Boolean,
      default: !1
    },
    disabled: {
      type: Boolean,
      default: !1
    },
    readonly: {
      type: Boolean,
      default: !1
    },
    maxLength: {
      type: [String, Number],
      default: ""
    },
    clearable: {
      type: Boolean,
      default: !1
    },
    clearSize: {
      type: [String, Number],
      default: "14"
    },
    border: {
      type: Boolean,
      default: !0
    },
    formatTrigger: {
      type: String,
      default: "onChange"
    },
    formatter: {
      type: Function,
      default: null
    },
    showWordLimit: {
      type: Boolean,
      default: !1
    },
    autofocus: {
      type: Boolean,
      default: !1
    },
    confirmType: {
      type: String,
      default: "done"
    },
    error: {
      type: Boolean,
      default: !1
    },
    showClearIcon: {
      type: Boolean,
      default: !1
    },
    class: {
      type: String,
      default: ""
    }
  },
  components: { MaskClose: Wa },
  emits: ["update:modelValue", "blur", "focus", "clear", "keypress", "click", "clickInput", "confirm"],
  expose: ["focus", "blur", "select"],
  setup(e, { emit: t }) {
    const n = Ze(Qe(e, "disabled")), o = z(!1), l = z(), s = () => {
      var C;
      return String((C = e.modelValue) != null ? C : "");
    }, a = (C) => Te("input", q({}, lp(C))), r = me({
      focused: !1,
      validateFailed: !1,
      // 校验失败
      validateMessage: ""
      // 校验信息
    }), i = T(() => {
      const C = sp;
      return {
        [C]: !0,
        [`${C}--disabled`]: n.value,
        [`${C}--required`]: e.required,
        [`${C}--error`]: e.error,
        [`${C}--border`]: e.border,
        [e.class]: !!e.class
      };
    }), p = T(() => ({
      textAlign: e.inputAlign
    })), d = (C) => {
      if (!C.target.composing) {
        let D = C.target.value;
        e.maxLength && D.length > Number(e.maxLength) && (D = D.slice(0, Number(e.maxLength))), y(D);
      }
    }, y = (C, k = "onChange") => {
      var D;
      if (["number", "digit"].includes(e.type)) {
        const V = e.type === "number";
        C = op(C, V, V);
      }
      e.formatter && k === e.formatTrigger && (C = e.formatter(C)), ((D = l == null ? void 0 : l.value) == null ? void 0 : D.value) !== C && (l.value.value = C), C !== e.modelValue && t("update:modelValue", C);
    }, v = (C) => {
      n.value || e.readonly || (o.value = !0, t("focus", C));
    }, b = (C) => {
      if (n.value || e.readonly)
        return;
      setTimeout(() => {
        o.value = !1;
      }, 200);
      let D = C.target.value;
      e.maxLength && D.length > Number(e.maxLength) && (D = D.slice(0, Number(e.maxLength))), y(s(), "onBlur"), t("blur", C);
    }, w = (C) => {
      C.stopPropagation(), !n.value && (t("update:modelValue", "", C), t("clear", "", C));
    }, S = () => {
      r.validateFailed && (r.validateFailed = !1, r.validateMessage = "");
    }, u = (C) => {
      n.value || t("clickInput", C);
    }, m = (C) => {
      t("click", C);
    }, h = ({ target: C }) => {
      C.composing = !0;
    }, $ = ({ target: C }) => {
      C.composing && (C.composing = !1, C.dispatchEvent(new Event("input")));
    };
    return Q(
      () => e.modelValue,
      () => {
        y(s()), S();
      }
    ), $e(() => {
      y(s(), e.formatTrigger);
    }), {
      renderInput: a,
      inputRef: l,
      active: o,
      classes: i,
      styles: p,
      disabled: n,
      onInput: d,
      onFocus: v,
      onBlur: b,
      clear: w,
      startComposing: h,
      endComposing: $,
      onClick: m,
      onClickInput: u,
      focus: () => {
        var C;
        (C = l.value) == null || C.focus();
      },
      blur: () => {
        var C;
        (C = l.value) == null || C.blur();
      },
      select: () => {
        var C;
        (C = l.value) == null || C.select();
      },
      onKeyup: (C) => {
        C.key === "Enter" && t("confirm", C);
      },
      getModelValue: s
    };
  }
}), ip = { class: "nut-input-value" }, up = { class: "nut-input-inner" }, cp = {
  key: 0,
  class: "nut-input-left-box"
}, dp = { class: "nut-input-box" }, fp = {
  key: 0,
  class: "nut-input-word-limit"
}, pp = { class: "nut-input-word-num" }, mp = { class: "nut-input-right-box" };
function hp(e, t, n, o, l, s) {
  const a = U("MaskClose");
  return c(), f("view", {
    class: B(e.classes),
    onClick: t[1] || (t[1] = (...r) => e.onClick && e.onClick(...r))
  }, [
    g("view", ip, [
      g("view", up, [
        e.$slots.left ? (c(), f("view", cp, [
          _(e.$slots, "left")
        ])) : N("", !0),
        g("view", dp, [
          (c(), G(Ve(e.renderInput(e.type)), {
            ref: "inputRef",
            class: "input-text",
            style: A(e.styles),
            maxlength: e.maxLength,
            placeholder: e.placeholder,
            disabled: e.disabled,
            readonly: e.readonly,
            value: e.modelValue,
            "format-trigger": e.formatTrigger,
            autofocus: e.autofocus,
            enterkeyhint: e.confirmType,
            onInput: e.onInput,
            onFocus: e.onFocus,
            onBlur: e.onBlur,
            onClick: e.onClickInput,
            onChange: e.endComposing,
            onCompositionend: e.endComposing,
            onCompositionstart: e.startComposing,
            onKeyup: e.onKeyup
          }, null, 40, ["style", "maxlength", "placeholder", "disabled", "readonly", "value", "format-trigger", "autofocus", "enterkeyhint", "onInput", "onFocus", "onBlur", "onClick", "onChange", "onCompositionend", "onCompositionstart", "onKeyup"])),
          e.showWordLimit && e.maxLength ? (c(), f("view", fp, [
            g("span", pp, E(e.getModelValue() ? e.getModelValue().length : 0), 1),
            ge("/" + E(e.maxLength), 1)
          ])) : N("", !0)
        ]),
        e.clearable && !e.readonly ? Ie((c(), f("view", {
          key: 1,
          class: "nut-input-clear-box",
          onClick: t[0] || (t[0] = (...r) => e.clear && e.clear(...r))
        }, [
          _(e.$slots, "clear", {}, () => [
            te(a, dt({ class: "nut-input-clear" }, e.$attrs, {
              size: e.clearSize,
              width: e.clearSize,
              height: e.clearSize
            }), null, 16, ["size", "width", "height"])
          ])
        ], 512)), [
          [Me, (e.active || e.showClearIcon) && e.getModelValue().length > 0]
        ]) : N("", !0),
        g("view", mp, [
          _(e.$slots, "right")
        ])
      ])
    ])
  ], 2);
}
const zo = /* @__PURE__ */ ne(rp, [["render", hp]]), Vo = Symbol("nut-radio"), un = /* @__PURE__ */ ye({
  name: "NutRadio",
  __name: "radio",
  props: {
    disabled: { type: Boolean, default: !1 },
    shape: { default: "round" },
    label: { type: [String, Number, Boolean], default: "" },
    iconSize: { default: "" },
    size: { default: "normal" }
  },
  setup(e) {
    const t = e, n = Ze(Qe(t, "disabled")), o = Ae(Vo, null), l = T(() => o.label.value === t.label), s = T(() => n.value ? "nut-radio__icon--disable" : l.value ? "nut-radio__icon" : "nut-radio__icon--unchecked"), a = T(() => Be(t.iconSize)), r = T(() => ({
      "nut-radio__label": !0,
      "nut-radio__label--disabled": n.value
    })), i = T(() => ({
      "nut-radio__button": !0,
      "nut-radio__button--active": l.value,
      [`nut-radio__button--${t.size}`]: !0,
      "nut-radio__button--disabled": t.disabled
    })), p = () => {
      l.value || n.value || o.updateValue(t.label);
    }, d = T(() => o.position.value === "left"), y = T(() => ({
      "nut-radio": !0,
      [`nut-radio--${t.shape}`]: !0,
      "nut-radio--reverse": d.value
    }));
    return (v, b) => (c(), f("div", {
      class: B(y.value),
      onClick: p
    }, [
      v.shape === "button" ? (c(), f("div", {
        key: 0,
        class: B(i.value)
      }, [
        _(v.$slots, "default")
      ], 2)) : (c(), f(J, { key: 1 }, [
        l.value ? _(v.$slots, "checkedIcon", { key: 0 }, () => [
          te(pe(Kl), {
            width: a.value,
            height: a.value,
            class: B(s.value)
          }, null, 8, ["width", "height", "class"])
        ]) : _(v.$slots, "icon", { key: 1 }, () => [
          te(pe(xn), {
            width: a.value,
            height: a.value,
            class: B(s.value)
          }, null, 8, ["width", "height", "class"])
        ]),
        g("div", {
          class: B(r.value)
        }, [
          _(v.$slots, "default")
        ], 2)
      ], 64))
    ], 2));
  }
});
we(un);
const cn = /* @__PURE__ */ ye({
  name: "NutRadioGroup",
  __name: "radio-group",
  props: {
    modelValue: { type: [String, Number, Boolean], default: "" },
    direction: { default: "vertical" },
    textPosition: { default: "right" }
  },
  emits: ["change", "update:modelValue"],
  setup(e, { emit: t }) {
    const n = e, o = t, l = (s) => {
      o("update:modelValue", s);
    };
    return Oe(Vo, {
      label: Nn(T(() => n.modelValue)),
      position: Nn(T(() => n.textPosition)),
      updateValue: l
    }), Q(
      () => n.modelValue,
      (s) => {
        o("change", s);
      }
    ), (s, a) => (c(), f("div", {
      class: B(["nut-radio-group", `nut-radio-group--${s.direction}`])
    }, [
      _(s.$slots, "default")
    ], 2));
  }
});
we(cn);
const gp = ["id"], vp = { class: "nut-rate-item__icon--full" }, yp = {
  key: 0,
  class: "nut-rate-item__icon--half"
}, bp = {
  key: 1,
  class: "nut-rate-item__icon--half"
}, dn = /* @__PURE__ */ ye({
  name: "NutRate",
  __name: "rate",
  props: {
    count: { default: 5 },
    modelValue: { default: 0 },
    customIcon: { default: () => Xr },
    size: {},
    activeColor: { default: "" },
    voidColor: { default: "" },
    readonly: { type: Boolean, default: !1 },
    disabled: { type: Boolean, default: !1 },
    allowHalf: { type: Boolean, default: !1 },
    touchable: { type: Boolean, default: !0 },
    spacing: {}
  },
  emits: ["update:modelValue", "change"],
  setup(e, { emit: t }) {
    const n = e, o = t, l = Math.random().toString(36).slice(-8), s = Ze(Qe(n, "disabled")), a = z([]), r = (b) => {
      o("update:modelValue", b), o("change", b);
    }, i = (b, w) => {
      if (s.value || n.readonly)
        return;
      let S = 0;
      w === 1 && n.modelValue === w ? S = 0 : (S = w, n.allowHalf && b == 2 && (S -= 0.5)), r(S);
    }, p = (b, w, S) => {
      let u = 0;
      for (let m = w.value.length - 1; m >= 0; m--) {
        const h = w.value[m];
        if (b > h.offsetLeft) {
          S ? u = m + (b > h.offsetLeft + h.clientWidth / 2 ? 1 : 0.5) : u = m + 1;
          break;
        }
      }
      return u;
    }, d = xe(), y = (b) => {
      !n.touchable || n.readonly || d.start(b);
    }, v = (b) => {
      n.touchable && (d.move(b), d.isHorizontal() && a.value && (b.preventDefault(), r(p(d.moveX.value, a, n.allowHalf))));
    };
    return (b, w) => (c(), f("view", {
      class: "nut-rate",
      onTouchstart: y,
      onTouchmove: v
    }, [
      (c(!0), f(J, null, ie(Number(b.count), (S) => (c(), f("view", {
        id: "rateRefs-" + pe(l) + S,
        key: S,
        ref_for: !0,
        ref_key: "rateRefs",
        ref: a,
        class: "nut-rate-item",
        style: A(S < Number(b.count) ? { marginRight: pe(Be)(b.spacing) } : {})
      }, [
        g("view", vp, [
          (c(), G(Ve(
            pe(ot)(b.customIcon, {
              width: b.size,
              height: b.size,
              size: b.size,
              color: S <= Number(b.modelValue) ? b.activeColor : b.voidColor
            })
          ), {
            class: B(["nut-rate-item__icon", { "nut-rate-item__icon--disabled": pe(s) || S > Number(b.modelValue) }]),
            onClick: (u) => i(1, S)
          }, null, 8, ["class", "onClick"]))
        ]),
        b.allowHalf && Number(b.modelValue) + 1 > S ? (c(), f("view", yp, [
          (c(), G(Ve(
            pe(ot)(b.customIcon, {
              width: b.size,
              height: b.size,
              size: b.size,
              color: S <= Number(b.modelValue) + 1 ? b.activeColor : b.voidColor
            })
          ), {
            class: "nut-rate-item__icon",
            onClick: (u) => i(2, S)
          }, null, 8, ["onClick"]))
        ])) : b.allowHalf && Number(b.modelValue) + 1 < S ? (c(), f("view", bp, [
          (c(), G(Ve(pe(ot)(b.customIcon, { width: b.size, height: b.size, size: b.size, color: b.voidColor })), {
            class: "nut-rate-item__icon nut-rate-item__icon--disabled",
            onClick: (u) => i(2, S)
          }, null, 8, ["onClick"]))
        ])) : N("", !0)
      ], 12, gp))), 128))
    ], 32));
  }
});
we(dn);
const { create: $p } = x("short-password"), wp = "NutShortPassword", kp = $p({
  components: {
    NutPopup: Ee,
    Tips: so
  },
  props: {
    title: {
      type: String,
      default: ""
    },
    desc: {
      type: String,
      default: ""
    },
    tips: {
      type: String,
      default: ""
    },
    visible: {
      type: Boolean,
      default: !1
    },
    modelValue: {
      type: String,
      default: ""
    },
    errorMsg: {
      type: String,
      default: ""
    },
    closeOnClickOverlay: {
      type: Boolean,
      default: !0
    },
    length: {
      type: [String, Number],
      // 4～6
      default: 6
    },
    lockScroll: {
      type: Boolean,
      default: !0
    }
  },
  emits: ["update:modelValue", "update:visible", "complete", "tips", "close", "focus"],
  setup(e, { emit: t }) {
    const n = Se(wp), o = z(e.modelValue), l = T(() => i(Number(e.length))), s = z(e.visible), a = (d) => {
      d.stopPropagation(), t("focus");
    };
    Q(
      () => e.visible,
      (d) => {
        s.value = d;
      }
    ), Q(
      () => e.modelValue,
      (d) => {
        o.value = d, String(d).length === l.value && t("complete", d);
      }
    );
    const r = () => {
      t("update:visible", !1), t("close");
    }, i = (d) => Math.min(Math.max(4, d), 6);
    return {
      comLen: l,
      realInput: o,
      onTouchStart: a,
      range: i,
      close: r,
      onTips: () => {
        t("tips");
      },
      show: s,
      translate: n
    };
  }
}), Cp = { class: "nut-short-password-title" }, Sp = { class: "nut-short-password-subtitle" }, Tp = { class: "nut-short-password-wrapper" }, Np = {
  key: 0,
  class: "nut-short-password__item-icon"
}, _p = { class: "nut-short-password__message" }, Dp = { class: "nut-short-password--error" }, Ip = {
  key: 0,
  class: "nut-short-password--forget"
};
function Bp(e, t, n, o, l, s) {
  const a = U("tips"), r = U("nut-popup");
  return c(), f("view", null, [
    te(r, {
      visible: e.show,
      "onUpdate:visible": t[2] || (t[2] = (i) => e.show = i),
      style: {
        padding: "30px 24px 20px 24px",
        borderRadius: "12px",
        textAlign: "center",
        top: "45%"
      },
      closeable: !0,
      "close-on-click-overlay": e.closeOnClickOverlay,
      "teleport-disable": !1,
      "lock-scroll": e.lockScroll,
      onClickCloseIcon: e.close,
      onClickOverlay: e.close
    }, {
      default: oe(() => [
        g("view", Cp, E(e.title || e.translate("title")), 1),
        g("view", Sp, E(e.desc || e.translate("desc")), 1),
        g("div", Tp, [
          g("view", {
            class: "nut-short-password__list",
            onTouchstart: t[0] || (t[0] = (...i) => e.onTouchStart && e.onTouchStart(...i))
          }, [
            (c(!0), f(J, null, ie(new Array(e.comLen), (i, p) => (c(), f("view", {
              key: p,
              class: "nut-short-password__item"
            }, [
              String(e.realInput).length > p ? (c(), f("view", Np)) : N("", !0)
            ]))), 128))
          ], 32)
        ]),
        g("view", _p, [
          g("view", Dp, E(e.errorMsg), 1),
          e.tips || e.translate("tips") ? (c(), f("view", Ip, [
            te(a, {
              class: "icon",
              width: "11px",
              height: "11px"
            }),
            g("view", {
              onClick: t[1] || (t[1] = (...i) => e.onTips && e.onTips(...i))
            }, E(e.tips || e.translate("tips")), 1)
          ])) : N("", !0)
        ])
      ]),
      _: 1
    }, 8, ["visible", "close-on-click-overlay", "lock-scroll", "onClickCloseIcon", "onClickOverlay"])
  ]);
}
const Mp = /* @__PURE__ */ ne(kp, [["render", Bp]]), Lp = ["rows", "disabled", "readonly", "value", "maxlength", "placeholder", "autofocus"], Pp = {
  key: 0,
  class: "nut-textarea__limit"
}, On = "NutTextarea", Oo = /* @__PURE__ */ ye({
  name: On,
  __name: "textarea",
  props: {
    modelValue: { default: "" },
    textAlign: {},
    limitShow: { type: Boolean, default: !1 },
    maxLength: { default: "" },
    rows: { default: "2" },
    placeholder: { default: "" },
    readonly: { type: Boolean, default: !1 },
    disabled: { type: Boolean, default: !1 },
    autosize: { type: [Boolean, Object], default: !1 },
    autofocus: { type: Boolean, default: !1 }
  },
  emits: ["update:modelValue", "change", "blur", "focus"],
  setup(e, { emit: t }) {
    const n = e, o = t, l = Ze(Qe(n, "disabled")), s = Se(On), a = z(null), r = T(() => {
      const m = "nut-textarea";
      return {
        [m]: !0,
        [`${m}--disabled`]: l.value
      };
    }), i = T(() => ({
      textAlign: n.textAlign
    })), p = (m) => {
      const h = a.value;
      h && h.style && (h.style.height = typeof m == "number" ? `${m}px` : m);
    }, d = () => {
      if (p("auto"), a.value) {
        let m = a.value.scrollHeight;
        if (typeof n.autosize == "object") {
          const { maxHeight: h, minHeight: $ } = n.autosize;
          h !== void 0 && (m = Math.min(m, h)), $ !== void 0 && (m = Math.max(m, $));
        }
        m && p(m);
      }
    };
    $e(() => {
      n.modelValue && y(String(n.modelValue)), n.autosize && Ne(d);
    }), Q(
      () => n.modelValue,
      () => {
        n.autosize && Ne(d);
      }
    );
    const y = (m, h) => {
      n.maxLength && m.length > Number(n.maxLength) && (m = m.substring(0, Number(n.maxLength))), o("update:modelValue", m, h), o("change", m, h);
    }, v = (m) => {
      const h = m.target;
      if (!h.composing) {
        let $ = h.value;
        n.maxLength && $.length > Number(n.maxLength) && ($ = $.slice(0, Number(n.maxLength))), y(h.value, m);
      }
    }, b = (m) => {
      l.value || n.readonly || o("focus", m);
    }, w = (m) => {
      if (l.value || n.readonly)
        return;
      const $ = m.target.value;
      y($, m), o("blur", { value: $, event: m });
    }, S = ({ target: m }) => {
      const h = m;
      h.composing = !0;
    }, u = ({ target: m }) => {
      const h = m;
      h.composing && (h.composing = !1, h.dispatchEvent(new Event("input")));
    };
    return (m, h) => (c(), f("view", {
      class: B(r.value)
    }, [
      g("textarea", {
        ref_key: "textareaRef",
        ref: a,
        class: "nut-textarea__textarea",
        style: A(i.value),
        rows: m.rows,
        disabled: pe(l),
        readonly: m.readonly,
        value: m.modelValue,
        maxlength: m.maxLength,
        placeholder: m.placeholder || pe(s)("placeholder"),
        autofocus: m.autofocus,
        onInput: v,
        onBlur: w,
        onFocus: b,
        onChange: u,
        onCompositionend: u,
        onCompositionstart: S
      }, null, 44, Lp),
      m.limitShow ? (c(), f("view", Pp, E(m.modelValue ? m.modelValue.length : 0) + "/" + E(m.maxLength), 1)) : N("", !0)
    ], 2));
  }
});
we(Oo);
class Ep {
  constructor() {
    O(this, "url", "");
    O(this, "name", "file");
    O(this, "fileType", "image");
    O(this, "formData");
    O(this, "sourceFile");
    O(this, "method", "post");
    O(this, "xhrState", 200);
    O(this, "timeout", 30 * 1e3);
    O(this, "headers", {});
    O(this, "withCredentials", !1);
    O(this, "onStart");
    O(this, "taroFilePath");
    O(this, "onProgress");
    O(this, "onSuccess");
    O(this, "onFailure");
    O(this, "beforeXhrUpload");
  }
}
let Ap = class {
  constructor(t) {
    O(this, "options");
    this.options = t;
  }
  upload() {
    var o;
    const t = this.options, n = new XMLHttpRequest();
    if (n.timeout = t.timeout, n.upload) {
      n.upload.addEventListener(
        "progress",
        (l) => {
          var s;
          (s = t.onProgress) == null || s.call(t, l, t);
        },
        !1
      ), n.onreadystatechange = () => {
        var l, s;
        n.readyState === 4 && (n.status == t.xhrState ? (l = t.onSuccess) == null || l.call(t, n.responseText, t) : (s = t.onFailure) == null || s.call(t, n.responseText, t));
      }, n.withCredentials = t.withCredentials, n.open(t.method, t.url, !0);
      for (const [l, s] of Object.entries(t.headers))
        n.setRequestHeader(l, s);
      (o = t.onStart) == null || o.call(t, t), t.beforeXhrUpload ? t.beforeXhrUpload(n, t) : n.send(t.formData);
    } else
      console.warn("浏览器不支持 XMLHttpRequest");
  }
};
class zp {
  constructor() {
    O(this, "status", "ready");
    O(this, "message", "");
    O(this, "uid", (/* @__PURE__ */ new Date()).getTime().toString());
    O(this, "name");
    O(this, "url");
    O(this, "type");
    O(this, "path");
    O(this, "percentage", 0);
    O(this, "formData", {});
  }
}
const Vp = { class: "nut-progress" }, fn = /* @__PURE__ */ ye({
  name: "NutProgress",
  __name: "progress",
  props: {
    percentage: { default: 0 },
    size: { default: "base" },
    status: { default: "text" },
    strokeWidth: {},
    textInside: { type: Boolean, default: !1 },
    showText: { type: Boolean, default: !0 },
    strokeColor: {},
    textColor: {},
    textBackground: {},
    isShowPercentage: { type: Boolean, default: !0 }
  },
  setup(e) {
    const t = e, n = T(() => {
      if (t.strokeWidth)
        return t.strokeWidth + "px";
    }), o = T(() => Number(t.percentage) >= 100 ? 100 : Number(t.percentage)), l = T(() => ({
      width: o.value + "%",
      background: t.strokeColor || ""
    })), s = T(() => ({
      color: t.textColor || ""
    }));
    return (a, r) => (c(), f("div", Vp, [
      g("div", {
        class: B(["nut-progress-outer", [a.showText && !a.textInside ? "nut-progress-outer-part" : "", a.size ? "nut-progress-" + a.size : ""]]),
        style: A({ height: n.value })
      }, [
        g("div", {
          class: B(["nut-progress-inner", a.status === "active" ? "nut-active" : ""]),
          style: A(l.value)
        }, null, 6),
        a.showText && a.textInside && !a.$slots.default ? (c(), f("div", {
          key: 0,
          class: "nut-progress-text nut-progress-insidetext",
          style: A({
            lineHeight: n.value,
            left: `${o.value}%`,
            transform: `translate(-${+o.value}%,-50%)`,
            background: a.textBackground || a.strokeColor
          })
        }, [
          g("span", {
            style: A(s.value)
          }, E(o.value) + E(a.isShowPercentage ? "%" : ""), 5)
        ], 4)) : N("", !0),
        a.showText && a.textInside && a.$slots.default ? (c(), f("div", {
          key: 1,
          class: "nut-progress-slot",
          style: A({
            position: "absolute",
            top: "50%",
            left: `${o.value}%`,
            transform: `translate(-${+o.value}%,-50%)`
          })
        }, [
          _(a.$slots, "default")
        ], 4)) : N("", !0)
      ], 6),
      a.showText && !a.textInside ? (c(), f("div", {
        key: 0,
        class: "nut-progress-text",
        style: A({ lineHeight: n.value })
      }, [
        a.status === "text" || a.status === "active" ? (c(), f("span", {
          key: 0,
          style: A(s.value)
        }, E(o.value) + E(a.isShowPercentage ? "%" : ""), 5)) : a.status === "icon" ? _(a.$slots, "icon-name", { key: 1 }, () => [
          te(pe(to), {
            width: "15px",
            height: "15px",
            color: "#439422"
          })
        ]) : N("", !0)
      ], 4)) : N("", !0)
    ]));
  }
});
we(fn);
const { create: Op } = x("uploader"), Hp = "NutUploader", Rp = Op({
  components: {
    NutProgress: fn,
    Photograph: ir,
    Failure: lo,
    Loading: at,
    Del: no,
    Link: ya
  },
  props: {
    name: { type: String, default: "file" },
    url: { type: String, default: "" },
    // defaultFileList: { type: Array, default: () => new Array<FileItem>() },
    timeout: { type: [Number, String], default: 1e3 * 30 },
    fileList: { type: Array, default: () => [] },
    isPreview: { type: Boolean, default: !0 },
    // picture、list
    listType: { type: String, default: "picture" },
    isDeletable: { type: Boolean, default: !0 },
    method: { type: String, default: "post" },
    capture: { type: Boolean, default: !1 },
    maximize: { type: [Number, String], default: Number.MAX_VALUE },
    maximum: { type: [Number, String], default: 1 },
    clearInput: { type: Boolean, default: !0 },
    accept: { type: String, default: "*" },
    headers: { type: Object, default: {} },
    data: { type: Object, default: {} },
    xhrState: { type: [Number, String], default: 200 },
    withCredentials: { type: Boolean, default: !1 },
    multiple: { type: Boolean, default: !1 },
    disabled: { type: Boolean, default: !1 },
    autoUpload: { type: Boolean, default: !0 },
    beforeUpload: {
      type: Function,
      default: null
    },
    beforeXhrUpload: {
      type: Function,
      default: null
    },
    beforeDelete: {
      type: Function,
      default: () => !0
    },
    onChange: { type: Function }
  },
  emits: [
    "start",
    "progress",
    "oversize",
    "success",
    "failure",
    "change",
    "delete",
    "update:fileList",
    "fileItemClick"
  ],
  setup(e, { emit: t }) {
    const n = Ze(Qe(e, "disabled")), o = Se(Hp), l = z(e.fileList), s = z([]);
    Q(
      () => e.fileList,
      () => {
        l.value = e.fileList;
      }
    );
    const a = () => {
      let h = {
        class: "nut-uploader__input",
        type: "file",
        accept: e.accept,
        multiple: e.multiple,
        name: e.name,
        disabled: n.value
      };
      return e.capture && (h.capture = "camera", h.accept || (h.accept = "image/*")), Te("input", h);
    }, r = (h) => {
      h.value = "";
    }, i = (h) => {
      t("fileItemClick", { fileItem: h });
    }, p = (h, $) => {
      const L = new Ep();
      L.url = e.url, L.formData = h.formData, L.timeout = e.timeout * 1, L.method = e.method, L.xhrState = e.xhrState, L.headers = e.headers, L.withCredentials = e.withCredentials, L.beforeXhrUpload = e.beforeXhrUpload;
      try {
        L.sourceFile = h.formData.get(e.name);
      } catch (P) {
        console.warn("[NutUI] <Uploader> formData.get(name)", P);
      }
      L.onStart = (P) => {
        h.status = "ready", h.message = o("readyUpload"), d($), t("start", P);
      }, L.onProgress = (P, M) => {
        h.status = "uploading", h.message = o("uploading"), h.percentage = (P.loaded / P.total * 100).toFixed(0), t("progress", { event: P, option: M, percentage: h.percentage });
      }, L.onSuccess = (P, M) => {
        h.status = "success", h.message = o("success"), t("success", {
          responseText: P,
          option: M,
          fileItem: h
        }), t("update:fileList", l.value);
      }, L.onFailure = (P, M) => {
        h.status = "error", h.message = o("error"), t("failure", {
          responseText: P,
          option: M,
          fileItem: h
        });
      };
      let I = new Ap(L);
      e.autoUpload ? I.upload() : s.value.push(
        new Promise((P) => {
          P(I);
        })
      );
    }, d = (h = -1) => {
      h > -1 ? s.value.splice(h, 1) : (s.value = [], l.value = [], t("update:fileList", l.value));
    }, y = () => {
      Promise.all(s.value).then((h) => {
        h.forEach(($) => $.upload());
      });
    }, v = (h) => {
      h.forEach(($, L) => {
        const I = new FormData();
        for (const [M, C] of Object.entries(e.data))
          I.append(M, C);
        I.append(e.name, $);
        const P = me(new zp());
        if (P.name = $.name, P.status = "ready", P.type = $.type, P.formData = I, P.message = o("waitingUpload"), p(P, L), e.isPreview && $.type.includes("image")) {
          const M = new FileReader();
          M.onload = (C) => {
            P.url = C.target.result, l.value.push(P);
          }, M.readAsDataURL($);
        } else
          l.value.push(P);
      });
    }, b = (h) => {
      const $ = e.maximum * 1, L = e.maximize * 1, I = new Array();
      h = h.filter((M) => M.size > L ? (I.push(M), !1) : !0), I.length && t("oversize", I);
      let P = h.length + l.value.length;
      return P > $ && h.splice(h.length - (P - $)), h;
    }, w = (h, $) => {
      l.value.splice($, 1), t("delete", {
        file: h,
        fileList: l.value,
        index: $
      });
    }, S = (h, $) => {
      n.value || (d($), en(e.beforeDelete, {
        args: [h, l.value],
        done: () => w(h, $)
      }));
    }, u = (h) => {
      if (e.disabled || n.value)
        return;
      const $ = h.target;
      let { files: L } = $;
      e.beforeUpload ? e.beforeUpload(L).then((I) => m(I)) : m(L), t("change", {
        fileList: l.value,
        event: h
      }), e.clearInput && r($);
    }, m = (h) => {
      const $ = b(new Array().slice.call(h));
      v($);
    };
    return {
      onChange: u,
      onDelete: S,
      fileList: l,
      fileItemClick: i,
      clearUploadQueue: d,
      submit: y,
      renderInput: a
    };
  }
}), Fp = { class: "nut-uploader" }, Wp = {
  key: 0,
  class: "nut-uploader__slot"
}, Yp = {
  key: 0,
  class: "nut-uploader__preview-img"
}, jp = {
  key: 0,
  class: "nut-uploader__preview__progress"
}, Kp = { class: "nut-uploader__preview__progress__msg" }, Up = ["onClick"], Xp = ["src", "onClick"], qp = {
  key: 3,
  class: "nut-uploader__preview-img__file"
}, Zp = ["onClick"], Gp = { class: "file__name_tips" }, Jp = { class: "tips" }, Qp = {
  key: 1,
  class: "nut-uploader__preview-list"
}, xp = ["onClick"], e1 = { class: "file__name_tips" };
function t1(e, t, n, o, l, s) {
  const a = U("Failure"), r = U("Loading"), i = U("Link"), p = U("Del"), d = U("nut-progress"), y = U("Photograph");
  return c(), f("view", Fp, [
    e.$slots.default ? (c(), f("view", Wp, [
      _(e.$slots, "default"),
      Number(e.maximum) - e.fileList.length ? (c(), G(Ve(e.renderInput), {
        key: 0,
        onChange: e.onChange
      }, null, 40, ["onChange"])) : N("", !0)
    ])) : N("", !0),
    (c(!0), f(J, null, ie(e.fileList, (v, b) => {
      var w;
      return c(), f("view", {
        key: v.uid,
        class: B(["nut-uploader__preview", [e.listType]])
      }, [
        e.listType == "picture" && !e.$slots.default ? (c(), f("view", Yp, [
          v.status != "success" ? (c(), f("view", jp, [
            v.status != "ready" ? (c(), f(J, { key: 0 }, [
              v.status == "error" ? (c(), G(a, {
                key: 0,
                color: "#fff"
              })) : (c(), G(r, {
                key: 1,
                name: "loading",
                color: "#fff"
              }))
            ], 64)) : N("", !0),
            g("view", Kp, E(v.message), 1)
          ])) : N("", !0),
          e.isDeletable ? (c(), f("view", {
            key: 1,
            class: "close",
            onClick: (S) => e.onDelete(v, b)
          }, [
            _(e.$slots, "delete-icon", {}, () => [
              te(a)
            ])
          ], 8, Up)) : N("", !0),
          (w = v == null ? void 0 : v.type) != null && w.includes("image") && v.url ? (c(), f("img", {
            key: 2,
            class: "nut-uploader__preview-img__c",
            src: v.url,
            onClick: (S) => e.fileItemClick(v)
          }, null, 8, Xp)) : (c(), f("view", qp, [
            g("view", {
              class: "nut-uploader__preview-img__file__name",
              onClick: (S) => e.fileItemClick(v)
            }, [
              g("view", Gp, E(v.name), 1)
            ], 8, Zp)
          ])),
          g("view", Jp, E(v.name), 1)
        ])) : e.listType == "list" ? (c(), f("view", Qp, [
          g("view", {
            class: B(["nut-uploader__preview-img__file__name", [v.status]]),
            onClick: (S) => e.fileItemClick(v)
          }, [
            te(i, { class: "nut-uploader__preview-img__file__link" }),
            g("view", e1, E(v.name), 1),
            e.isDeletable ? (c(), G(p, {
              key: 0,
              color: "#808080",
              class: "nut-uploader__preview-img__file__del",
              onClick: De((S) => e.onDelete(v, b), ["stop"])
            }, null, 8, ["onClick"])) : N("", !0)
          ], 10, xp),
          v.status == "uploading" ? (c(), G(d, {
            key: 0,
            size: "small",
            percentage: v.percentage,
            "stroke-color": "linear-gradient(270deg, rgba(18,126,255,1) 0%,rgba(32,147,255,1) 32.815625%,rgba(13,242,204,1) 100%)",
            "show-text": !1
          }, null, 8, ["percentage"])) : N("", !0)
        ])) : N("", !0)
      ], 2);
    }), 128)),
    e.listType == "picture" && !e.$slots.default && Number(e.maximum) - e.fileList.length ? (c(), f("view", {
      key: 1,
      class: B(["nut-uploader__upload", [e.listType]])
    }, [
      _(e.$slots, "upload-icon", {}, () => [
        te(y, { color: "#808080" })
      ]),
      (c(), G(Ve(e.renderInput), { onChange: e.onChange }, null, 40, ["onChange"]))
    ], 2)) : N("", !0)
  ]);
}
const n1 = /* @__PURE__ */ ne(Rp, [["render", t1]]), { create: o1 } = x("number-keyboard"), l1 = "NutNumberKeyboard", s1 = o1({
  components: {
    NutPopup: Ee
  },
  props: {
    confirmText: {
      type: String,
      default: ""
    },
    title: {
      type: String,
      default: ""
    },
    visible: {
      type: Boolean,
      default: !1
    },
    type: {
      type: String,
      default: "default"
    },
    customKey: {
      type: Array,
      default: () => []
    },
    modelValue: {
      type: String,
      default: ""
    },
    maxlength: {
      type: [Number, String],
      default: 6
    },
    randomKeys: {
      type: Boolean,
      default: !1
    },
    popClass: {
      type: String,
      default: ""
    },
    lockScroll: {
      type: Boolean,
      default: !0
    }
  },
  emits: ["input", "delete", "close", "blur", "update:modelValue", "update:visible"],
  setup(e, { emit: t }) {
    const n = Se(l1), o = z(void 0), l = z(e.visible), s = z();
    function a() {
      const { customKey: u } = e;
      let m = {
        id: "lock",
        type: "lock"
      }, h = Array.isArray(u) ? u : [u];
      return h.length === 1 && (m = {
        id: h[0],
        type: "custom"
      }), [...r(), m, { id: 0, type: "number" }, { id: "delete", type: "delete" }];
    }
    function r() {
      const u = [];
      for (let m = 1; m <= 9; m++)
        u.push({ id: m, type: "number" });
      return e.randomKeys ? u.sort(() => Math.random() > 0.5 ? 1 : -1) : u;
    }
    function i() {
      const u = r(), { customKey: m } = e;
      let h = Array.isArray(m) ? m : [m];
      return h.length > 2 && (h = [h[0], h[1]]), h.length == 2 && e.title && e.type != "rightColumn" && (h = [h[0]]), h.length === 1 ? e.title && e.type != "rightColumn" ? u.push({ id: h[0], type: "custom" }, { id: 0, type: "number" }, { id: "delete", type: "delete" }) : u.push({ id: 0, type: "number" }, { id: h[0], type: "custom" }) : h.length === 2 && u.push(
        { id: h[0], type: "custom" },
        { id: 0, type: "number" },
        { id: h[1], type: "custom" }
      ), u;
    }
    const p = T(() => e.type == "rightColumn" || e.title != "" ? i() : a()), d = () => {
      e.visible && t("blur");
    }, y = (u) => {
      const m = s.value;
      m && !m.contains(u.target) && d();
    };
    Q(
      () => e.visible,
      (u) => {
        l.value = u, u ? window.addEventListener("touchstart", y, !1) : window.removeEventListener("touchstart", y, !1);
      }
    );
    function v(u, m) {
      m.stopPropagation(), o.value = u.id, (u.type == "number" || u.type == "custom") && (t("input", u.id), e.modelValue.length < +e.maxlength && t("update:modelValue", e.modelValue + u.id)), u.type == "lock" && S(), u.type == "delete" && (t("delete"), t("update:modelValue", e.modelValue.slice(0, e.modelValue.length - 1)));
    }
    function b(u) {
      u.stopPropagation();
    }
    function w(u) {
      u.preventDefault(), o.value = void 0;
    }
    function S() {
      t("update:visible", !1), t("close");
    }
    return {
      clickKeyIndex: o,
      defaultKey: a,
      closeBoard: S,
      onTouchEnd: w,
      onTouchMove: b,
      onTouchstart: v,
      keysList: p,
      genCustomKeys: i,
      getBasicKeys: r,
      root: s,
      show: l,
      translate: n
    };
  }
}), a1 = { ref: "root" }, r1 = { class: "nut-number-keyboard" }, i1 = {
  key: 0,
  class: "nut-number-keyboard__header"
}, u1 = { class: "nut-number-keyboard__title" }, c1 = { class: "nut-number-keyboard__body" }, d1 = { class: "nut-number-keyboard__keys" }, f1 = ["onTouchstart"], p1 = {
  key: 1,
  src: "https://img11.360buyimg.com/imagetools/jfs/t1/146371/38/8485/738/5f606425Eca239740/14f4b4f5f20d8a68.png"
}, m1 = {
  key: 2,
  src: "https://img11.360buyimg.com/imagetools/jfs/t1/129395/8/12735/2030/5f61ac37E70cab338/fb477dc11f46056c.png"
}, h1 = {
  key: 0,
  class: "nut-number-keyboard__sidebar"
}, g1 = { class: "nut-key__wrapper" }, v1 = /* @__PURE__ */ g("img", { src: "https://img11.360buyimg.com/imagetools/jfs/t1/129395/8/12735/2030/5f61ac37E70cab338/fb477dc11f46056c.png" }, null, -1), y1 = [
  v1
];
function b1(e, t, n, o, l, s) {
  const a = U("nut-popup");
  return c(), f("div", a1, [
    te(a, {
      visible: e.show,
      "onUpdate:visible": t[7] || (t[7] = (r) => e.show = r),
      position: "bottom",
      "pop-class": e.popClass,
      overlay: !1,
      "lock-scroll": e.lockScroll,
      "teleport-disable": !1
    }, {
      default: oe(() => [
        g("div", r1, [
          e.title ? (c(), f("div", i1, [
            g("h3", u1, E(e.title), 1),
            e.type == "default" ? (c(), f("span", {
              key: 0,
              class: "nut-number-keyboard__close",
              onClick: t[0] || (t[0] = (r) => e.closeBoard())
            }, E(e.translate("done")), 1)) : N("", !0)
          ])) : N("", !0),
          g("div", c1, [
            g("div", d1, [
              (c(!0), f(J, null, ie(e.keysList, (r) => (c(), f("div", {
                key: "key" + r.id,
                class: B([
                  "nut-key__wrapper",
                  {
                    "nut-key__wrapper--wider": r.id == 0 && e.type == "rightColumn" && Array.isArray(e.customKey) && e.customKey.length == 1
                  }
                ])
              }, [
                g("div", {
                  class: B([
                    "nut-key",
                    { "nut-key--active": r.id == e.clickKeyIndex },
                    { "nut-key--lock": r.type == "lock" },
                    { "nut-key--delete": r.type == "delete" }
                  ]),
                  onTouchstart: (i) => e.onTouchstart(r, i),
                  onTouchmove: t[1] || (t[1] = (i) => e.onTouchMove(i)),
                  onTouchend: t[2] || (t[2] = (i) => e.onTouchEnd(i))
                }, [
                  r.type == "number" || r.type == "custom" ? (c(), f(J, { key: 0 }, [
                    ge(E(r.id), 1)
                  ], 64)) : N("", !0),
                  r.type == "lock" ? (c(), f("img", p1)) : N("", !0),
                  r.type == "delete" ? (c(), f("img", m1)) : N("", !0)
                ], 42, f1)
              ], 2))), 128))
            ]),
            e.type == "rightColumn" ? (c(), f("div", h1, [
              g("div", g1, [
                g("div", {
                  class: B(["nut-key", { active: e.clickKeyIndex == "delete" }]),
                  onTouchstart: t[3] || (t[3] = (r) => e.onTouchstart({ id: "delete", type: "delete" }, r)),
                  onTouchmove: t[4] || (t[4] = (r) => e.onTouchMove(r)),
                  onTouchend: t[5] || (t[5] = (...r) => e.onTouchEnd && e.onTouchEnd(...r))
                }, y1, 34)
              ]),
              g("div", {
                class: "nut-key__wrapper nut-key__wrapper--finish",
                onClick: t[6] || (t[6] = (r) => e.closeBoard())
              }, [
                g("div", {
                  class: B(["nut-key", "nut-key--finish ", { activeFinsh: e.clickKeyIndex == "finish" }])
                }, E(e.confirmText || e.translate("done")), 3)
              ])
            ])) : N("", !0)
          ])
        ])
      ]),
      _: 1
    }, 8, ["visible", "pop-class", "lock-scroll"])
  ], 512);
}
const $1 = /* @__PURE__ */ ne(s1, [["render", b1]]), pn = /* @__PURE__ */ ye({
  name: "NutForm",
  __name: "form",
  props: {
    modelValue: { default: () => ({}) },
    rules: { default: () => ({}) },
    disabled: { type: Boolean, default: !1 },
    labelPosition: { default: "left" },
    starPosition: { default: "left" }
  },
  emits: ["validate"],
  setup(e, { expose: t, emit: n }) {
    const o = e, l = n, { children: s, linkChildren: a } = kt(Do);
    a({ props: o });
    const { linkChildren: r } = kt(Io);
    r({ props: o });
    const i = T(() => me({}));
    Oe(Bo, i);
    const p = () => {
      Object.keys(i.value).forEach((u) => {
        i.value[u] = "";
      });
    }, d = () => {
      p();
    };
    Q(
      () => o.modelValue,
      () => {
        p();
      },
      { immediate: !0 }
    );
    const y = () => {
      const u = [];
      return s.forEach((m) => {
        u.push({
          prop: m == null ? void 0 : m.prop,
          rules: (m == null ? void 0 : m.rules) || []
        });
      }), u;
    }, v = (u) => {
      u.message && l("validate", u), i.value[u.prop] = u.message;
    }, b = (u) => Ge(this, null, function* () {
      const { rules: m = [], prop: h } = u, $ = (C) => new Promise((k, D) => {
        try {
          v(C), k(C);
        } catch (V) {
          D(V);
        }
      });
      h || console.warn("[NutUI] <FormItem> 使用 rules 校验规则时 , 必须设置 prop 参数");
      const L = Ut(o.modelValue, h || "");
      v({ prop: h, message: "" });
      const I = o.rules || {}, P = [...(I == null ? void 0 : I[h]) || [], ...m];
      for (; P.length; ) {
        const M = P.shift(), { validator: k } = M, D = Yt(M, ["validator"]), { required: V, regex: j, message: X } = D, le = { prop: h, message: X || "" };
        if (V && !L && L !== 0 || j && !j.test(String(L)))
          return $(le);
        if (k) {
          const W = k(L, D);
          if (Zn(W))
            try {
              if ((yield W) === !1)
                return $(le);
            } catch (Y) {
              return $({ prop: h, message: Y });
            }
          else if (!W)
            return $(le);
        }
      }
      return Promise.resolve(!0);
    }), w = (u = "") => new Promise((m, h) => {
      try {
        const L = y().map((I) => u && u !== I.prop ? Promise.resolve(!0) : b(I));
        Promise.all(L).then((I) => {
          I = I.filter((M) => M !== !0);
          const P = { valid: !0, errors: [] };
          I.length && (P.valid = !1, P.errors = I), m(P);
        });
      } catch ($) {
        h($);
      }
    });
    return t({
      submit: () => (w(), !1),
      reset: d,
      validate: w
    }), (u, m) => (c(), f("form", {
      class: "nut-form",
      action: "#",
      onSubmit: De(() => !1, ["prevent"])
    }, [
      te(pe(an), null, {
        default: oe(() => [
          _(u.$slots, "default")
        ]),
        _: 3
      })
    ], 32));
  }
});
we(pn);
const w1 = { class: "nut-cell__value nut-form-item__body" }, mn = /* @__PURE__ */ ye({
  name: "NutFormItem",
  inheritAttrs: !1,
  __name: "form-item",
  props: {
    prop: { default: "" },
    label: { default: "" },
    rules: { default: () => [] },
    required: { type: Boolean, default: !1 },
    showErrorMessage: { type: Boolean, default: !0 },
    showErrorLine: { type: Boolean, default: !0 },
    labelWidth: {},
    labelAlign: {},
    errorMessageAlign: {},
    bodyAlign: {},
    labelPosition: {},
    starPosition: {}
  },
  setup(e) {
    const t = e, { parent: n } = Tt(Do), o = T(() => {
      var v;
      const d = (v = n.props) == null ? void 0 : v.rules;
      let y = !1;
      for (const b in d)
        Object.prototype.hasOwnProperty.call(d, b) && b === t.prop && Array.isArray(d[b]) && (y = d[b].some((w) => w.required));
      return t.required || t.rules.some((b) => b.required) || y;
    }), l = T(() => {
      const d = n.props.labelPosition, y = t.labelPosition ? t.labelPosition : d;
      return y !== "left" ? `nut-form-item__${y}` : "";
    }), s = T(() => {
      const d = n.props.starPosition, y = t.starPosition ? t.starPosition : d;
      return y !== "left" ? `nut-form-item__star-${y}` : "";
    }), a = Ae(Bo), r = T(() => ({
      width: Be(t.labelWidth),
      textAlign: t.labelAlign
    })), i = T(() => ({
      textAlign: t.bodyAlign
    })), p = T(() => ({
      textAlign: t.errorMessageAlign
    }));
    return (d, y) => (c(), G(pe(sn), {
      class: B(["nut-form-item", [{ error: pe(a)[d.prop], line: d.showErrorLine }, d.$attrs.class, l.value]]),
      style: A(d.$attrs.style)
    }, {
      default: oe(() => [
        d.label || d.$slots.label ? (c(), f("view", {
          key: 0,
          class: B(["nut-cell__title nut-form-item__label", { required: o.value, [s.value]: s.value }]),
          style: A(r.value)
        }, [
          _(d.$slots, "label", {}, () => [
            ge(E(d.label), 1)
          ])
        ], 6)) : N("", !0),
        g("view", w1, [
          g("view", {
            class: "nut-form-item__body__slots",
            style: A(i.value)
          }, [
            _(d.$slots, "default")
          ], 4),
          pe(a)[d.prop] && d.showErrorMessage ? (c(), f("view", {
            key: 0,
            class: "nut-form-item__body__tips",
            style: A(p.value)
          }, E(pe(a)[d.prop]), 5)) : N("", !0)
        ])
      ]),
      _: 3
    }, 8, ["class", "style"]));
  }
});
we(mn);
const Ho = Symbol("nut-swipe"), hn = /* @__PURE__ */ ye({
  name: "NutSwipe",
  __name: "swipe",
  props: {
    name: { default: "" },
    touchMoveStopPropagation: { type: Boolean, default: !1 },
    touchMovePreventDefault: { type: Boolean, default: !1 },
    disabled: { type: Boolean, default: !1 }
  },
  emits: ["open", "close", "click"],
  setup(e, { expose: t, emit: n }) {
    const o = e, l = n, s = (k) => {
      var D;
      return ((D = k.value) == null ? void 0 : D.getBoundingClientRect().width) || 0;
    }, a = z(!1), r = z(), i = T(() => s(r)), p = z(), d = T(() => s(p)), y = Ae(Ho, null);
    Q(
      () => {
        var k;
        return (k = y == null ? void 0 : y.name) == null ? void 0 : k.value;
      },
      (k) => {
        o.name !== k && y && y.lock && m();
      }
    );
    const v = z(!1);
    let b = "", w = "";
    const S = me({
      offset: 0,
      moving: !1
    }), u = (k = "") => {
      y && y.update(o.name), v.value = !0, k && (S.offset = k === "left" ? -d.value : i.value), l("open", {
        name: o.name,
        position: b || k
      });
    }, m = () => {
      S.offset = 0, v.value && (v.value = !1, l("close", {
        name: o.name,
        position: b
      }));
    }, h = (k, D, V) => {
      V ? k.stopPropagation() : m(), l("click", D);
    }, $ = T(() => ({
      transform: `translate3d(${S.offset}px, 0, 0)`
    })), L = (k) => {
      b = k > 0 ? "right" : "left";
      let D = k;
      switch (b) {
        case "left":
          v.value && w === b ? D = -d.value : D = Math.abs(k) > d.value ? -d.value : k;
          break;
        case "right":
          v.value && w === b ? D = i.value : D = Math.abs(k) > i.value ? i.value : k;
          break;
      }
      S.offset = D;
    }, I = xe(), P = (k) => {
      o.disabled || I.start(k);
    }, M = (k) => {
      o.disabled || (I.move(k), I.isHorizontal() && (a.value = !0, S.moving = !0, L(I.deltaX.value), o.touchMovePreventDefault && k.preventDefault(), o.touchMoveStopPropagation && k.stopPropagation()));
    }, C = () => {
      if (S.moving) {
        switch (S.moving = !1, w = b, b) {
          case "left":
            Math.abs(S.offset) <= d.value / 2 ? m() : (S.offset = -d.value, u());
            break;
          case "right":
            Math.abs(S.offset) <= i.value / 2 ? m() : (S.offset = i.value, u());
            break;
        }
        setTimeout(() => {
          a.value = !1;
        }, 0);
      }
    };
    return t({
      open: u,
      close: m
    }), (k, D) => (c(), f("view", {
      class: "nut-swipe",
      style: A($.value),
      onTouchstart: P,
      onTouchmove: M,
      onTouchend: C,
      onTouchcancel: C
    }, [
      g("view", {
        ref_key: "leftRef",
        ref: r,
        class: "nut-swipe__left",
        onClick: D[0] || (D[0] = (V) => h(V, "left", !0))
      }, [
        _(k.$slots, "left")
      ], 512),
      g("view", {
        class: "nut-swipe__content",
        onClick: D[1] || (D[1] = (V) => h(V, "content", a.value))
      }, [
        _(k.$slots, "default")
      ]),
      g("view", {
        ref_key: "rightRef",
        ref: p,
        class: "nut-swipe__right",
        onClick: D[2] || (D[2] = (V) => h(V, "right", !0))
      }, [
        _(k.$slots, "right")
      ], 512)
    ], 36));
  }
});
we(hn);
const Ro = /* @__PURE__ */ ye({
  name: "NutSwipeGroup",
  __name: "swipe-group",
  props: {
    lock: { type: Boolean, default: !1 }
  },
  setup(e) {
    const t = e, n = z(null), o = z("");
    return Oe(Ho, {
      update: (s) => {
        o.value = s;
      },
      lock: t.lock,
      name: o
    }), (s, a) => (c(), f("div", {
      ref_key: "swipeGroupRef",
      ref: n,
      class: "nut-swipe-group"
    }, [
      _(s.$slots, "default")
    ], 512));
  }
});
we(Ro);
const { create: k1 } = x("action-sheet"), C1 = k1({
  components: {
    NutPopup: Ee,
    Loading: at
  },
  props: fe(q({}, _t), {
    cancelTxt: {
      type: String,
      default: ""
    },
    optionTag: {
      type: String,
      default: "name"
    },
    optionSubTag: {
      type: String,
      default: "subname"
    },
    chooseTagValue: {
      type: String,
      default: ""
    },
    title: {
      type: String,
      default: ""
    },
    color: {
      type: String,
      default: "#ee0a24"
    },
    description: {
      type: String,
      default: ""
    },
    menuItems: {
      type: Array,
      default: () => []
    },
    closeAbled: {
      type: Boolean,
      default: !0
    }
  }),
  emits: ["cancel", "close", "choose", "update:visible"],
  setup(e, { emit: t }) {
    return {
      slotDefault: !!st().default,
      isHighlight: (r) => e.chooseTagValue && e.chooseTagValue === r[e.optionTag] ? e.color : "",
      cancelActionSheet: () => {
        t("cancel"), t("update:visible", !1);
      },
      chooseItem: (r, i) => {
        !r.disable && !r.loading && (t("choose", r, i), t("update:visible", !1));
      },
      close: (r) => {
        e.closeAbled && (t("close", r), t("update:visible", !1));
      }
    };
  }
}), S1 = { class: "nut-action-sheet" }, T1 = {
  key: 0,
  class: "nut-action-sheet__title"
}, N1 = { key: 1 }, _1 = {
  key: 0,
  class: "nut-action-sheet__item nut-action-sheet__desc"
}, D1 = {
  key: 1,
  class: "nut-action-sheet__menu"
}, I1 = ["onClick"], B1 = { key: 1 }, M1 = { class: "nut-action-sheet__subdesc" };
function L1(e, t, n, o, l, s) {
  const a = U("Loading"), r = U("nut-popup");
  return c(), G(r, {
    visible: e.visible,
    position: "bottom",
    round: "",
    "close-on-click-overlay": e.closeAbled,
    "lock-scroll": e.lockScroll,
    "z-index": e.zIndex,
    onClickOverlay: e.close
  }, {
    default: oe(() => [
      g("view", S1, [
        e.title ? (c(), f("view", T1, E(e.title), 1)) : N("", !0),
        _(e.$slots, "default"),
        e.slotDefault ? N("", !0) : (c(), f("view", N1, [
          e.description ? (c(), f("view", _1, E(e.description), 1)) : N("", !0),
          e.menuItems.length ? (c(), f("view", D1, [
            (c(!0), f(J, null, ie(e.menuItems, (i, p) => (c(), f("view", {
              key: p,
              class: B(["nut-action-sheet__item", {
                "nut-action-sheet__item--disabled": i.disable,
                "nut-action-sheet__item--loading": i.loading
              }]),
              style: A({ color: e.isHighlight(i) || i.color }),
              onClick: (d) => e.chooseItem(i, p)
            }, [
              i.loading ? (c(), G(a, { key: 0 })) : (c(), f("view", B1, E(i[e.optionTag]), 1)),
              g("view", M1, E(i[e.optionSubTag]), 1)
            ], 14, I1))), 128))
          ])) : N("", !0),
          e.cancelTxt ? (c(), f("view", {
            key: 2,
            class: "nut-action-sheet__cancel",
            onClick: t[0] || (t[0] = (...i) => e.cancelActionSheet && e.cancelActionSheet(...i))
          }, E(e.cancelTxt), 1)) : N("", !0)
        ]))
      ])
    ]),
    _: 3
  }, 8, ["visible", "close-on-click-overlay", "lock-scroll", "z-index", "onClickOverlay"]);
}
const P1 = /* @__PURE__ */ ne(C1, [["render", L1]]), Fo = /* @__PURE__ */ ye({
  name: "NutBacktop",
  __name: "backtop",
  props: {
    bottom: { default: 20 },
    right: { default: 10 },
    elId: { default: "body" },
    distance: { default: 200 },
    zIndex: { default: 10 },
    isAnimation: { type: Boolean, default: !0 },
    duration: { default: 1e3 }
  },
  emits: ["click"],
  setup(e, { emit: t }) {
    const n = e, o = t, l = z(!1), s = z(0), a = z(window), r = z(0), i = z(!1), p = T(() => ({
      ["nut-backtop"]: !0,
      show: l.value
    })), d = T(() => ({
      right: `${n.right}px`,
      bottom: `${n.bottom}px`,
      zIndex: n.zIndex
    }));
    function y() {
      a.value instanceof Window ? s.value = a.value.scrollY : s.value = a.value.scrollTop, l.value = s.value >= n.distance;
    }
    function v(h = 0) {
      a.value instanceof Window ? window.scrollTo(0, h) : a.value.scrollTop = h;
    }
    function b() {
      let h = Re(function $() {
        var L = n.duration - Math.max(0, r.value - +/* @__PURE__ */ new Date() + n.duration), I = L * -s.value / n.duration + s.value;
        v(I), h = Re($), (L == n.duration || I == 0) && Sc(h);
      });
    }
    function w() {
      a.value.addEventListener("scroll", y, !1), a.value.addEventListener("resize", y, !1);
    }
    function S() {
      a.value.removeEventListener("scroll", y, !1), a.value.removeEventListener("resize", y, !1);
    }
    function u(h) {
      r.value = +/* @__PURE__ */ new Date(), n.isAnimation && n.duration > 0 ? b() : v(), o("click", h);
    }
    function m() {
      n.elId && document.getElementById(n.elId) && (a.value = document.getElementById(n.elId)), w();
    }
    return $e(() => {
      n.distance == 0 && (l.value = !0), m();
    }), Ue(() => {
      S();
    }), Ct(() => {
      i.value && (i.value = !1, m());
    }), St(() => {
      i.value = !0, S();
    }), (h, $) => (c(), f("div", {
      class: B(p.value),
      style: A(d.value),
      onClick: De(u, ["stop"])
    }, [
      _(h.$slots, "default", {}, () => [
        te(pe(ri), {
          width: "19px",
          height: "19px",
          class: "nut-backtop-main"
        })
      ])
    ], 6));
  }
});
we(Fo);
const { create: E1 } = x("drag"), A1 = E1({
  props: {
    attract: {
      type: Boolean,
      default: !1
    },
    direction: {
      type: String,
      default: "all"
    },
    boundary: {
      type: Object,
      default: () => ({
        top: 0,
        left: 0,
        right: 0,
        bottom: 0
      })
    }
  },
  setup(e) {
    const t = z(), n = me({
      keepAlive: !1,
      elWidth: 0,
      elHeight: 0,
      screenWidth: 0,
      screenHeight: 0,
      startTop: 0,
      startLeft: 0,
      nx: 0,
      ny: 0,
      xPum: 0,
      yPum: 0,
      position: { x: 0, y: 0 },
      boundary: {
        top: 0,
        left: 0,
        right: 0,
        bottom: 0
      }
    });
    function o() {
      const p = document.documentElement;
      n.elWidth = t.value.offsetWidth, n.elHeight = t.value.offsetHeight, n.screenWidth = p.clientWidth || 375, n.screenHeight = p.clientHeight || 667;
    }
    function l(p) {
      n.boundary.left ? +p.style.left.split("px")[0] > n.boundary.left ? (p.style.left = +p.style.left.split("px")[0] - 10 + "px", Re(() => {
        l(p);
      })) : p.style.left = `${n.boundary.left}px` : +p.style.left.split("px")[0] > 10 ? (p.style.left = +p.style.left.split("px")[0] - 10 + "px", Re(() => {
        l(p);
      })) : p.style.left = "0px";
    }
    function s(p, d) {
      d - parseInt(p.style.left.split("px")[0]) > 10 ? (p.style.left = parseInt(p.style.left.split("px")[0]) + 10 + "px", Re(() => {
        s(p, d);
      })) : p.style.left = d + "px";
    }
    function a(p) {
      p.preventDefault();
      const d = p.currentTarget;
      if (p.targetTouches.length === 1) {
        const y = p.targetTouches[0];
        n.nx = y.clientX - n.position.x, n.ny = y.clientY - n.position.y, n.xPum = n.startLeft + n.nx, n.yPum = n.startTop + n.ny;
        const v = n.screenWidth - n.elWidth - n.boundary.right;
        Math.abs(n.xPum) > v ? n.xPum = v : n.xPum <= n.boundary.left && (n.xPum = n.boundary.left), n.yPum < n.boundary.top ? n.yPum = n.boundary.top : n.yPum > n.screenHeight - n.elHeight - n.boundary.bottom && (n.yPum = n.screenHeight - n.elHeight - n.boundary.bottom), e.direction != "y" && (d.style.left = n.xPum + "px"), e.direction != "x" && (d.style.top = n.yPum + "px");
      }
    }
    function r(p) {
      const d = p.currentTarget;
      let v = p.changedTouches[0].clientX;
      const b = n.screenWidth - n.elWidth - n.boundary.right;
      v > b ? v = b : v < n.boundary.left ? v = n.boundary.left : v = v < n.screenWidth / 2 ? n.boundary.left : b, e.direction != "y" && e.attract && (v < n.screenWidth / 2 ? Re(() => {
        l(d);
      }) : Re(() => {
        s(d, b);
      })), e.direction != "x" && (d.style.top = n.yPum + "px");
    }
    function i(p) {
      const d = p.currentTarget, y = p.touches[0], v = p.targetTouches[0];
      n.startTop = d.offsetTop, n.startLeft = d.offsetLeft, n.position.x = y.clientX, n.position.y = y.clientY, n.nx = v.clientX - n.position.x, n.ny = v.clientY - n.position.y, n.xPum = n.startLeft + n.nx, n.yPum = n.startTop + n.ny;
    }
    return $e(() => {
      o(), n.boundary = e.boundary;
    }), Ct(() => {
      n.keepAlive && (n.keepAlive = !1);
    }), St(() => {
      n.keepAlive = !0, t.value.removeEventListener("touchstart", i), t.value.removeEventListener("touchmove", a), t.value.removeEventListener("touchend", r);
    }), {
      myDrag: t,
      touchStart: i,
      touchMove: a,
      touchEnd: r
    };
  }
});
function z1(e, t, n, o, l, s) {
  return c(), f("view", {
    ref: "myDrag",
    class: "nut-drag",
    onTouchstart: t[0] || (t[0] = (a) => e.touchStart(a)),
    onTouchmove: t[1] || (t[1] = (a) => e.touchMove(a)),
    onTouchend: t[2] || (t[2] = (a) => e.touchEnd(a))
  }, [
    _(e.$slots, "default")
  ], 544);
}
const V1 = /* @__PURE__ */ ne(A1, [["render", z1]]), { create: O1 } = x("dialog"), H1 = "NutDialog", R1 = O1({
  inheritAttrs: !1,
  components: {
    NutPopup: Ee,
    NutButton: qe
  },
  props: fe(q({}, _t), {
    closeOnClickOverlay: {
      type: Boolean,
      default: !0
    },
    title: {
      type: String,
      default: ""
    },
    content: {
      type: [String, Object],
      default: ""
    },
    noFooter: {
      type: Boolean,
      default: !1
    },
    noOkBtn: {
      type: Boolean,
      default: !1
    },
    noCancelBtn: {
      type: Boolean,
      default: !1
    },
    cancelText: {
      type: String,
      default: ""
    },
    okText: {
      type: String,
      default: ""
    },
    cancelAutoClose: {
      type: Boolean,
      default: !0
    },
    okAutoClose: {
      type: Boolean,
      default: !0
    },
    textAlign: {
      type: String,
      default: "center"
    },
    closeOnPopstate: {
      type: Boolean,
      default: !1
    },
    footerDirection: {
      type: String,
      default: "horizontal"
      // vertical
    },
    customClass: {
      type: String,
      default: ""
    },
    popStyle: {
      type: Object
    },
    beforeClose: Function
  }),
  emits: ["update", "update:visible", "ok", "cancel", "opened", "closed"],
  setup(e, { emit: t }) {
    const n = Se(H1), o = z(e.visible);
    $e(() => {
      e.closeOnPopstate && window.addEventListener("popstate", function() {
        s("page");
      });
    }), Q(
      () => e.visible,
      (d) => {
        o.value = d, d && t("opened");
      }
    );
    const l = (d) => {
      t("update", d), t("update:visible", d);
    }, s = (d) => {
      en(e.beforeClose, {
        args: [d],
        done: () => {
          o.value = !1, l(!1), t("closed");
        }
      });
    }, a = () => {
      t("cancel"), e.cancelAutoClose && (o.value = !1, s("cancel"));
    }, r = () => {
      t("ok"), e.okAutoClose && s("ok");
    }, i = () => {
      e.closeOnClickOverlay && s("");
    }, p = T(() => ({
      textAlign: e.textAlign
    }));
    return {
      closed: s,
      onCancel: a,
      onOk: r,
      showPopup: o,
      onClickOverlay: i,
      contentStyle: p,
      translate: n
    };
  }
}), F1 = {
  key: 0,
  class: "nut-dialog__header"
}, W1 = ["innerHTML"];
function Y1(e, t, n, o, l, s) {
  const a = U("nut-button"), r = U("nut-popup");
  return c(), G(r, {
    visible: e.showPopup,
    "onUpdate:visible": t[0] || (t[0] = (i) => e.showPopup = i),
    teleport: e.teleport,
    "close-on-click-overlay": !1,
    "lock-scroll": e.lockScroll,
    "pop-class": e.popClass,
    "overlay-class": e.overlayClass,
    "overlay-style": e.overlayStyle,
    style: A(e.popStyle),
    round: "",
    "z-index": e.zIndex,
    onClickOverlay: e.onClickOverlay,
    onClickCloseIcon: e.closed
  }, {
    default: oe(() => [
      g("view", {
        class: B(["nut-dialog", e.customClass])
      }, [
        e.$slots.header || e.title ? (c(), f("view", F1, [
          e.$slots.header ? _(e.$slots, "header", { key: 0 }) : (c(), f(J, { key: 1 }, [
            ge(E(e.title), 1)
          ], 64))
        ])) : N("", !0),
        g("view", {
          class: "nut-dialog__content",
          style: A(e.contentStyle)
        }, [
          e.$slots.default ? _(e.$slots, "default", { key: 0 }) : typeof e.content == "string" ? (c(), f("view", {
            key: 1,
            innerHTML: e.content
          }, null, 8, W1)) : (c(), G(Ve(e.content), { key: 2 }))
        ], 4),
        e.noFooter ? N("", !0) : (c(), f("view", {
          key: 1,
          class: B(["nut-dialog__footer", { [e.footerDirection]: e.footerDirection }])
        }, [
          e.$slots.footer ? _(e.$slots, "footer", { key: 0 }) : (c(), f(J, { key: 1 }, [
            e.noCancelBtn ? N("", !0) : (c(), G(a, {
              key: 0,
              size: "small",
              plain: "",
              type: "primary",
              class: "nut-dialog__footer-cancel",
              onClick: e.onCancel
            }, {
              default: oe(() => [
                ge(E(e.cancelText || e.translate("cancel")), 1)
              ]),
              _: 1
            }, 8, ["onClick"])),
            e.noOkBtn ? N("", !0) : (c(), G(a, {
              key: 1,
              size: "small",
              type: "primary",
              class: "nut-dialog__footer-ok",
              onClick: e.onOk
            }, {
              default: oe(() => [
                ge(E(e.okText || e.translate("confirm")), 1)
              ]),
              _: 1
            }, 8, ["onClick"]))
          ], 64))
        ], 2))
      ], 2)
    ]),
    _: 3
  }, 8, ["visible", "teleport", "lock-scroll", "pop-class", "overlay-class", "overlay-style", "style", "z-index", "onClickOverlay", "onClickCloseIcon"]);
}
const gn = /* @__PURE__ */ ne(R1, [["render", Y1]]);
class j1 {
  constructor() {
    O(this, "title", "");
    O(this, "content", "");
    O(this, "cancelText", "");
    O(this, "okText", "");
    O(this, "textAlign", "center");
    O(this, "customClass", "");
    O(this, "overlayStyle", {});
    O(this, "overlayClass", "");
    O(this, "popStyle", {});
    O(this, "popClass", "");
    O(this, "teleport", "body");
    O(this, "id", (/* @__PURE__ */ new Date()).getTime());
    O(this, "footerDirection", "horizontal");
    // 使用横纵方向 可选值 horizontal、vertical
    // function
    O(this, "onUpdate");
    O(this, "onOk");
    O(this, "onCancel");
    O(this, "onOpened");
    O(this, "onClosed");
    O(this, "beforeClose");
    O(this, "visible", !0);
    O(this, "noFooter", !1);
    O(this, "noOkBtn", !1);
    O(this, "noCancelBtn", !1);
    O(this, "okBtnDisabled", !1);
    O(this, "closeOnPopstate", !1);
    O(this, "closeOnClickOverlay", !0);
    O(this, "lockScroll", !0);
    O(this, "cancelAutoClose", !0);
    O(this, "okAutoClose", !0);
  }
}
class K1 {
  constructor(t) {
    O(this, "options", new j1());
    O(this, "instance");
    const n = Object.assign(this.options, t), { unmount: o } = rn(n, {
      name: "dialog",
      components: [Ee, qe, Nt],
      wrapper: (l, s) => ({
        setup() {
          return n.onUpdate = (a) => {
            a === !1 && Ne(() => {
              o();
            });
          }, n != null && n.onOpened && (n == null || n.onOpened()), n.teleport = `#${s.id}`, () => Te(gn, n);
        }
      })
    });
  }
}
const U1 = function(e) {
  return new K1(e);
};
U1.install = (e) => {
  e.use(gn);
};
const { create: X1 } = x("infinite-loading"), q1 = "NutInfiniteLoading", Z1 = X1({
  props: {
    modelValue: {
      type: Boolean,
      default: !1
    },
    hasMore: {
      type: Boolean,
      default: !0
    },
    threshold: {
      type: Number,
      default: 200
    },
    loadTxt: {
      type: String,
      default: ""
    },
    loadMoreTxt: {
      type: String,
      default: ""
    },
    useCapture: {
      type: Boolean,
      default: !1
    }
  },
  emits: ["scrollChange", "loadMore", "update:modelValue"],
  components: {
    Loading: at
  },
  setup(e, { emit: t, slots: n }) {
    const o = Se(q1), l = z(), s = po(l), a = me({
      beforeScrollTop: 0,
      isInfiniting: !1,
      y: 0,
      x: 0,
      distance: 0
    }), r = (b) => b ? b.offsetTop + r(b.offsetParent) : 0, i = () => {
      let b = 0, w = 0, S = "down";
      if (s.value == window) {
        const u = Jn();
        l.value && (b = r(l.value) + l.value.offsetHeight - u - window.innerHeight), w = u;
      } else {
        const { scrollHeight: u, clientHeight: m, scrollTop: h } = s.value;
        b = u - m - h, w = h;
      }
      return a.beforeScrollTop > w ? S = "up" : S = "down", a.beforeScrollTop = w, t("scrollChange", w), b <= e.threshold && S == "down";
    }, p = () => {
      Re(() => {
        if (!i() || !e.hasMore || a.isInfiniting)
          return !1;
        a.isInfiniting = !0, t("update:modelValue", !0), Ne(() => t("loadMore"));
      });
    }, d = () => {
      s.value && s.value.addEventListener("scroll", p, e.useCapture);
    }, y = () => {
      s.value && s.value.removeEventListener("scroll", p, e.useCapture);
    };
    $e(() => {
      d();
    }), Ue(() => {
      y();
    });
    const v = z(!1);
    return Ct(() => {
      v.value && (v.value = !1, d());
    }), St(() => {
      v.value = !0, y();
    }), Q(
      () => e.modelValue,
      (b) => {
        b || (a.isInfiniting = !1);
      }
    ), fe(q({
      scroller: l
    }, be(a)), {
      translate: o,
      slots: n
    });
  }
}), G1 = {
  ref: "scroller",
  class: "nut-infinite-loading"
}, J1 = { class: "nut-infinite__container" }, Q1 = { class: "nut-infinite__bottom" }, x1 = {
  key: 0,
  class: "nut-infinite__bottom-box"
}, em = { class: "nut-infinite__bottom-box__text" }, tm = { class: "nut-infinite__bottom-tips" };
function nm(e, t, n, o, l, s) {
  const a = U("Loading");
  return c(), f("view", G1, [
    g("view", J1, [
      _(e.$slots, "default")
    ]),
    g("view", Q1, [
      e.isInfiniting ? (c(), f("view", x1, [
        _(e.$slots, "loading", {}, () => [
          _(e.$slots, "loading-icon", {}, () => [
            te(a, { class: "nut-icon-loading nut-infinite__bottom-box__img" })
          ]),
          g("view", em, E(e.loadTxt || e.translate("loading")), 1)
        ])
      ])) : e.hasMore ? N("", !0) : _(e.$slots, "finished", { key: 1 }, () => [
        g("view", tm, E(e.loadMoreTxt || e.translate("loadMoreTxt")), 1)
      ])
    ])
  ], 512);
}
const om = /* @__PURE__ */ ne(Z1, [["render", nm]]), { create: lm } = x("pull-refresh"), sm = "NutPullRefresh", am = lm({
  props: {
    modelValue: {
      type: Boolean,
      default: !1
    },
    pullingTxt: {
      type: String,
      default: ""
    },
    loosingTxt: {
      type: String,
      default: ""
    },
    loadingTxt: {
      type: String,
      default: ""
    },
    completeTxt: {
      type: String,
      default: ""
    },
    headHeight: {
      type: [String, Number],
      default: 50
    },
    pullDistance: {
      type: [String, Number],
      default: 50
    },
    duration: {
      type: [String, Number],
      default: 0.3
    },
    completeDuration: {
      type: Number,
      default: 0
    }
  },
  emits: ["change", "refresh", "update:modelValue"],
  components: { Loading: at },
  setup(e, { emit: t, slots: n }) {
    const o = Se(sm), l = xe(), s = z(), a = po(s), r = me({
      isPullRefresh: !1,
      distance: 0,
      status: "normal"
    }), i = T(() => {
      switch (r.status) {
        case "pulling":
          return n.pulling ? "" : e.pullingTxt || o("pulling");
        case "loosing":
          return n.loosing ? "" : e.loosingTxt || o("loosing");
        case "loading":
          return n.loading ? "" : e.loadingTxt || o("loading");
        case "complete":
          return n.complete ? "" : e.completeTxt || o("complete");
      }
      return "";
    }), p = T(() => ({
      transitionDuration: `${e.duration}s`,
      transform: r.distance ? `translate3d(0,${r.distance}px, 0)` : ""
    })), d = T(() => {
      const h = {};
      return e.headHeight != 50 && (h.height = Be(e.headHeight)), h;
    }), y = (h) => {
      const $ = +(e.pullDistance || e.headHeight);
      let L = h;
      return h > $ && (h < $ * 2 ? L = (h + $) / 2 : L = $ + h / 4), Math.round(L);
    }, v = (h, $, L) => {
      const I = +(e.pullDistance || e.headHeight);
      r.distance = h, $ ? r.status = "loading" : L ? r.status = "complete" : h === 0 ? r.status = "normal" : h < I ? r.status = "pulling" : r.status = "loosing", t("change", { status: r.status, distance: h });
    }, b = () => r.status !== "loading" && r.status !== "complete", w = () => a.value == window ? Jn() == 0 : a.value && a.value.scrollTop == 0, S = (h) => {
      b() && (w() ? (l.start(h), r.isPullRefresh = !0) : (r.distance = 0, r.isPullRefresh = !1));
    }, u = (h) => {
      if (b()) {
        l.move(h);
        const { deltaY: $ } = l;
        l.isVertical() && $.value > 0 && r.isPullRefresh && (h.preventDefault(), v(y($.value)));
      }
    }, m = () => {
      r.isPullRefresh && b() && l.deltaY.value && (r.status === "loosing" ? (v(+e.headHeight, !0), t("update:modelValue", !0), Ne(() => t("refresh"))) : v(0)), setTimeout(() => {
        l.reset();
      }, 0);
    };
    return Q(
      () => e.modelValue,
      (h) => {
        h ? v(+e.headHeight, !0) : (e.completeDuration === 0 && v(0), v(+e.headHeight, !1, !0), setTimeout(() => {
          v(0);
        }, e.completeDuration));
      }
    ), fe(q({
      scroller: s
    }, be(r)), {
      touchStart: S,
      touchMove: u,
      touchEnd: m,
      getStyle: p,
      translate: o,
      slots: n,
      getHeightStyle: d,
      getPullStatus: i
    });
  }
}), rm = { class: "nut-pull-refresh-container-topbox-text" };
function im(e, t, n, o, l, s) {
  const a = U("Loading");
  return c(), f("div", {
    ref: "scroller",
    class: "nut-pull-refresh",
    onTouchstart: t[0] || (t[0] = (...r) => e.touchStart && e.touchStart(...r)),
    onTouchmove: t[1] || (t[1] = (...r) => e.touchMove && e.touchMove(...r)),
    onTouchend: t[2] || (t[2] = (...r) => e.touchEnd && e.touchEnd(...r))
  }, [
    g("div", {
      class: "nut-pull-refresh-container",
      style: A(e.getStyle)
    }, [
      g("div", {
        class: "nut-pull-refresh-container-topbox",
        style: A(e.getHeightStyle)
      }, [
        e.status == "loading" && !e.slots.loading ? (c(), G(a, {
          key: 0,
          class: "nut-icon-loading nut-pull-refresh-container-topbox-icon"
        })) : N("", !0),
        g("div", rm, E(e.getPullStatus), 1),
        e.status == "pulling" ? _(e.$slots, "pulling", { key: 1 }) : N("", !0),
        e.status == "loosing" ? _(e.$slots, "loosing", { key: 2 }) : N("", !0),
        e.status == "loading" ? _(e.$slots, "loading", { key: 3 }) : N("", !0),
        e.status == "complete" ? _(e.$slots, "complete", { key: 4 }) : N("", !0)
      ], 4),
      _(e.$slots, "default")
    ], 4)
  ], 544);
}
const um = /* @__PURE__ */ ne(am, [["render", im]]), { create: cm } = x("notify"), dm = cm({
  components: {
    NutPopup: Ee
  },
  props: {
    id: String,
    color: {
      type: String,
      default: ""
    },
    msg: {
      type: String,
      default: ""
    },
    duration: {
      type: Number,
      default: 3e3
    },
    className: {
      type: String,
      default: ""
    },
    background: {
      type: String,
      default: ""
    },
    type: {
      type: String,
      default: "danger"
    },
    visible: {
      type: Boolean,
      default: !1
    },
    position: {
      type: String,
      default: "top"
    },
    teleportDisable: {
      type: Boolean,
      default: !0
    },
    onClose: Function,
    onClick: Function,
    unmount: Function
  },
  emits: ["update:visible"],
  setup(e, { emit: t }) {
    const n = () => {
      e.onClick && e.onClick();
    };
    let o = null;
    const l = () => {
      o && clearTimeout(o), o = null;
    }, s = () => {
      t("update:visible", !1);
    }, a = z(!1), r = Q(
      () => e.visible,
      (p) => {
        a.value = e.visible;
        const d = e.duration;
        p && d && (o = setTimeout(() => {
          s();
        }, d));
      },
      { immediate: !0 }
    );
    return { onAfterLeave: () => {
      l(), r && r(), e.unmount && e.unmount(e.id), e.onClose && e.onClose();
    }, clickCover: n, isShowPopup: a };
  }
});
function fm(e, t, n, o, l, s) {
  const a = U("nut-popup");
  return c(), G(a, {
    visible: e.isShowPopup,
    "onUpdate:visible": t[1] || (t[1] = (r) => e.isShowPopup = r),
    position: e.position,
    overlay: !1,
    "teleport-disable": e.teleportDisable
  }, {
    default: oe(() => [
      g("div", {
        class: B(["nut-notify", `nut-notify--${e.type}`, e.className]),
        style: A({ color: e.color, background: e.background }),
        onClick: t[0] || (t[0] = (...r) => e.clickCover && e.clickCover(...r))
      }, [
        e.$slots.default ? _(e.$slots, "default", { key: 0 }) : (c(), f(J, { key: 1 }, [
          ge(E(e.msg), 1)
        ], 64))
      ], 6)
    ]),
    _: 3
  }, 8, ["visible", "position", "teleport-disable"]);
}
const Ot = /* @__PURE__ */ ne(dm, [["render", fm]]), Zt = {
  type: "base",
  visible: !0,
  msg: "",
  color: void 0,
  background: void 0,
  duration: 3e3,
  className: "",
  onClose: Function,
  // onClick: null,
  // onOpened: null,
  // textTimer: null,
  teleport: "",
  unmount: new Function()
};
let it = [], yt = [];
const Wo = (e) => {
  if (e) {
    const t = document.getElementById(e);
    yt = yt.filter((n) => n.id !== e), it = it.filter((n) => n !== e), t && document.body.removeChild(t);
  } else
    it.forEach((t) => {
      const n = document.getElementById(t);
      n && document.body.removeChild(n);
    }), yt = [], it = [];
}, pm = (e) => {
  const t = document.getElementById(e.id);
  if (t) {
    const n = yt.find((l) => l.id === e.id);
    n ? e = q(q(q({}, Zt), n), e) : e = q(q({}, Zt), e);
    const o = te(Ot, e);
    return xt(o, t), o.component.data;
  }
}, ht = (e) => {
  e.unmount = Wo;
  let t;
  if (e.id) {
    if (t = e.id, it.find((s) => s === e.id))
      return pm(e);
  } else
    t = (/* @__PURE__ */ new Date()).getTime() + "";
  e = q(q({}, Zt), e), e.id = t, it.push(e.id), yt.push(e);
  const n = document.createElement("view");
  n.id = "notify-" + e.id;
  const l = te({
    setup() {
      return e.teleport = `#notify-${e.id}`, $e(() => {
        setTimeout(() => {
          e.onClose && e.onClose(), document.body.removeChild(n);
        }, e.duration);
      }), () => Te(Ot, e);
    }
  });
  document.body.appendChild(n), xt(l, n);
}, gt = (e) => {
  if (!e) {
    console.warn("[NutUI Notify]: msg不能为空");
    return;
  }
}, R3 = {
  text(e, t = {}) {
    return gt(e), ht(fe(q({}, t), { msg: e }));
  },
  primary(e, t = {}) {
    return gt(e), ht(fe(q({}, t), { msg: e, type: "primary" }));
  },
  success(e, t = {}) {
    return gt(e), ht(fe(q({}, t), { msg: e, type: "success" }));
  },
  danger(e, t = {}) {
    return gt(e), ht(fe(q({}, t), { msg: e, type: "danger" }));
  },
  warn(e, t = {}) {
    return gt(e), ht(fe(q({}, t), { msg: e, type: "warning" }));
  },
  hide() {
    Wo();
  },
  install(e) {
    e.use(Ot);
  }
}, mm = { class: "nut-switch-button" }, Yo = /* @__PURE__ */ ye({
  name: "NutSwitch",
  __name: "switch",
  props: {
    modelValue: { type: [String, Number, Boolean], default: !1 },
    disabled: { type: Boolean, default: !1 },
    activeColor: { default: "" },
    inactiveColor: { default: "" },
    activeText: { default: "" },
    inactiveText: { default: "" },
    activeValue: { type: [String, Number, Boolean], default: !0 },
    inactiveValue: { type: [String, Number, Boolean], default: !1 },
    loading: { type: Boolean, default: !1 },
    disable: { type: Boolean, default: !1 }
  },
  emits: ["change", "update:modelValue", "update:loading"],
  setup(e, { emit: t }) {
    const n = e, o = t, l = T(() => n.disabled || n.disable), s = Ze(l), a = T(() => n.modelValue === n.activeValue), r = T(() => {
      const y = "nut-switch";
      return {
        [y]: !0,
        [a.value ? "nut-switch-open" : "nut-switch-close"]: !0,
        [`${y}-disabled`]: s.value,
        [`${y}-base`]: !0
      };
    }), i = T(() => ({
      backgroundColor: a.value ? n.activeColor : n.inactiveColor
    }));
    let p = "";
    const d = (y) => {
      if (n.loading || s.value)
        return;
      const v = a.value ? n.inactiveValue : n.activeValue;
      p = "click", o("update:modelValue", v), o("change", v, y);
    };
    return Q(
      () => n.modelValue,
      (y) => {
        p == "click" ? p = "" : o("change", y);
      }
    ), (y, v) => (c(), f("view", {
      class: B(r.value),
      style: A(i.value),
      onClick: d
    }, [
      g("view", mm, [
        y.loading ? _(y.$slots, "icon", { key: 0 }, () => [
          te(pe(_a), {
            name: "loading",
            color: y.activeColor
          }, null, 8, ["color"])
        ]) : N("", !0),
        y.activeText ? (c(), f(J, { key: 1 }, [
          Ie(g("view", { class: "nut-switch-label open" }, E(y.activeText), 513), [
            [Me, a.value]
          ]),
          Ie(g("view", { class: "nut-switch-label close" }, E(y.inactiveText), 513), [
            [Me, !a.value]
          ])
        ], 64)) : N("", !0)
      ])
    ], 6));
  }
});
we(Yo);
const { create: hm } = x("toast"), gm = hm({
  components: {},
  props: {
    id: String,
    msg: String,
    duration: {
      type: Number,
      default: 2e3
    },
    center: {
      type: Boolean,
      default: !0
    },
    type: {
      type: String,
      default: "text"
    },
    customClass: String,
    bottom: {
      type: String,
      default: "30px"
    },
    size: {
      type: [String, Number],
      default: "base"
    },
    icon: {
      type: Object,
      default: null
    },
    textAlignCenter: {
      type: Boolean,
      default: !0
    },
    loadingRotate: {
      type: Boolean,
      default: !0
    },
    bgColor: {
      type: String,
      default: ""
    },
    onClose: Function,
    unmount: Function,
    cover: {
      type: Boolean,
      default: !1
    },
    coverColor: {
      type: String,
      default: ""
    },
    title: {
      type: String,
      default: ""
    },
    closeOnClickOverlay: {
      type: Boolean,
      default: !1
    }
  },
  emits: ["close"],
  setup(e, { emit: t }) {
    let n;
    const o = me({
      mounted: !1
    });
    $e(() => {
      o.mounted = !0;
    });
    const l = () => {
      n && (clearTimeout(n), n = null);
    }, s = () => {
      o.mounted = !1;
    }, a = () => {
      l(), e.duration && (n = window.setTimeout(() => {
        s();
      }, e.duration));
    }, r = () => {
      e.closeOnClickOverlay && (s(), t("close"));
    };
    e.duration && a(), Q(
      () => e.duration,
      (v) => {
        v && a();
      }
    );
    const i = T(() => e.type !== "text" ? !0 : e.icon !== null), p = T(() => [
      "nut-toast",
      { "nut-toast-center": e.center },
      { "nut-toast-has-icon": i.value },
      { "nut-toast-cover": e.cover },
      { "nut-toast-loading": e.type === "loading" },
      e.customClass,
      "nut-toast-" + e.size
    ]), d = T(() => ["nut-toast-icon-wrapper", { "nut-toast-icon-no-animation": !e.loadingRotate }]);
    return {
      state: o,
      hide: s,
      clickCover: r,
      hasIcon: i,
      toastBodyClass: p,
      toastIconWrapperClass: d,
      onAfterLeave: () => {
        var v;
        l(), (v = e.unmount) == null || v.call(e, e.id), e.onClose && e.onClose();
      },
      renderIcon: ot
    };
  }
}), vm = {
  key: 1,
  class: "nut-toast-title"
}, ym = ["innerHTML"];
function bm(e, t, n, o, l, s) {
  return c(), G(Jt, {
    name: "toast-fade",
    onAfterLeave: e.onAfterLeave
  }, {
    default: oe(() => [
      Ie(g("view", {
        class: B(e.toastBodyClass),
        style: A({
          bottom: e.center ? "auto" : e.bottom,
          "background-color": e.coverColor
        }),
        onClick: t[0] || (t[0] = (...a) => e.clickCover && e.clickCover(...a))
      }, [
        g("view", {
          class: "nut-toast-inner",
          style: A({
            "text-align": e.textAlignCenter ? "center" : "left",
            "background-color": e.bgColor
          })
        }, [
          e.hasIcon ? (c(), f("view", {
            key: 0,
            class: B(e.toastIconWrapperClass)
          }, [
            (c(), G(Ve(e.renderIcon(e.icon)), { color: "#ffffff" }))
          ], 2)) : N("", !0),
          e.title ? (c(), f("div", vm, E(e.title), 1)) : N("", !0),
          g("view", {
            class: "nut-toast-text",
            innerHTML: e.msg
          }, null, 8, ym)
        ], 4)
      ], 6), [
        [Me, e.state.mounted]
      ])
    ]),
    _: 1
  }, 8, ["onAfterLeave"]);
}
const Ht = /* @__PURE__ */ ne(gm, [["render", bm]]), Gt = {
  msg: "",
  id: "",
  duration: 2e3,
  // 显示时间(毫秒)
  center: !0,
  // 未实现
  type: "text",
  title: "",
  customClass: "",
  bottom: "30px",
  size: "base",
  iconSize: "20",
  icon: null,
  textAlignCenter: !0,
  // 未实现
  loadingRotate: !0,
  // 未实现
  bgColor: "",
  onClose: null,
  // 未实现
  unmount: null,
  cover: !1,
  // 透明遮罩层 // 未实现
  coverColor: "",
  // 未实现
  closeOnClickOverlay: !1
  // 未实现
};
let ut = [], bt = [];
const jo = (e) => {
  if (e) {
    const t = document.getElementById(e);
    bt = bt.filter((n) => n.id !== e), ut = ut.filter((n) => n !== e), t && document.body.removeChild(t);
  } else
    ut.forEach((t) => {
      const n = document.getElementById(t);
      n && document.body.removeChild(n);
    }), bt = [], ut = [];
}, $m = (e) => {
  const t = document.getElementById(e.id);
  if (t) {
    const n = bt.find((l) => l.id === e.id);
    n ? e = q(q(q({}, Gt), n), e) : e = q(q({}, Gt), e);
    const o = te(Ht, e);
    return xt(o, t), Ko;
  }
}, vt = (e) => {
  e.unmount = jo;
  let t;
  if (e.id) {
    if (t = e.id, ut.find((n) => n === e.id))
      return $m(e);
  } else
    t = (/* @__PURE__ */ new Date()).getTime() + "";
  return e = q(q({}, Gt), e), e.id = t, ut.push(e.id), bt.push(e), rn(e, {
    wrapper: Ht
  }), Ko;
}, Lt = (e) => {
  if (!e) {
    console.warn("[NutUI Toast]: msg不能为空");
    return;
  }
}, Ko = {
  text(e, t = {}) {
    return Lt(e), vt(fe(q({}, t), { type: "text", msg: e }));
  },
  success(e, t = {}) {
    return Lt(e), vt(fe(q({ icon: Qr }, t), { msg: e, type: "success" }));
  },
  fail(e, t = {}) {
    return Lt(e), vt(fe(q({ icon: lo }, t), { msg: e, type: "fail" }));
  },
  warn(e, t = {}) {
    return Lt(e), vt(fe(q({ icon: so }, t), { msg: e, type: "warn" }));
  },
  loading(e, t = {}) {
    return vt(fe(q({
      icon: at
    }, t), {
      msg: e,
      type: "loading"
    }));
  },
  hide(e) {
    jo(e);
  },
  install(e) {
    e.use(Ht);
  }
}, Uo = Symbol("nut-audio"), { create: wm } = x("audio"), km = wm({
  props: {
    url: {
      type: String,
      default: ""
    },
    // 静音
    muted: {
      type: Boolean,
      default: !1
    },
    // 自动播放
    autoplay: {
      type: Boolean,
      default: !1
    },
    // 循环播放
    loop: {
      type: Boolean,
      default: !1
    },
    // 是否预加载音频
    preload: {
      type: String,
      default: "auto"
    },
    /* 总时长秒数 */
    second: {
      type: Number,
      default: 0
    },
    // 展示的形式   controls 控制面板   progress 进度条  icon 图标 none 自定义
    type: {
      type: String,
      default: "progress"
    }
  },
  components: {
    Service: Wr,
    NutRange: Mo
  },
  emits: ["fastBack", "play", "forward", "ended", "changeProgress", "mute", "canPlay"],
  setup(e, { emit: t, slots: n }) {
    const o = z(null), l = me({
      currentTime: 0,
      currentDuration: "00:00:00",
      percent: 0,
      duration: "00:00:00",
      second: 0,
      hanMuted: e.muted,
      playing: e.autoplay,
      handPlaying: !1
    });
    $e(() => {
      var S = ["webkitVisibilityState", "visibilitychange"];
      try {
        for (let u = 0; u < S.length; u++)
          document.addEventListener(S[u], () => {
            document.hidden ? o.value.pause() : l.playing && setTimeout(() => {
              o.value.play();
            }, 200);
          });
      } catch (u) {
        console.log(u.message);
      }
    });
    const s = (S) => {
      const u = o.value;
      e.autoplay && u && u.paused && u.play(), l.second = u.duration, l.duration = w(u.duration), t("canPlay", S);
    }, a = (S) => {
      l.currentTime = parseInt(S.target.currentTime);
    }, r = () => {
      l.currentTime > 0 && l.currentTime--, o.value.currentTime = l.currentTime, t("fastBack", l.currentTime);
    }, i = () => {
      const S = o.value;
      l.playing ? (S.pause(), l.handPlaying = !1) : (S.play(), l.handPlaying = !0), l.playing = !l.playing, t("play", l.playing);
    }, p = () => {
      l.currentTime++, o.value.currentTime = l.currentTime, t("forward", l.currentTime);
    }, d = (S) => {
      l.currentDuration = w(S), l.percent = S / l.second * 100;
    }, y = () => {
      l.playing = !1, t("ended");
    }, v = (S) => {
      const u = o.value;
      u.currentTime = l.second * S / 100, t("changeProgress", u.currentTime);
    }, b = () => {
      l.hanMuted = !l.hanMuted, t("mute", l.hanMuted);
    }, w = (S) => {
      if (!S)
        return "00:00:00";
      let u = parseInt(S), m = Math.floor(u / 3600), h = Math.floor((u - m * 3600) / 60), $ = u - m * 3600 - h * 60, L = "";
      return L += ("0" + m.toString()).slice(-2) + ":", L += ("0" + h.toString()).slice(-2) + ":", L += ("0" + $.toString()).slice(-2), L;
    };
    return Q(
      () => l.currentTime,
      (S) => {
        d(S);
      }
    ), Oe(Uo, {
      children: [],
      props: e,
      audioData: l,
      handleMute: b,
      forward: p,
      fastBack: r,
      changeStatus: i
    }), fe(q(q({}, be(e)), be(l)), {
      audioRef: o,
      fastBack: r,
      forward: p,
      changeStatus: i,
      progressChange: v,
      audioEnd: y,
      onTimeupdate: a,
      handleMute: b,
      onCanplay: s,
      slots: n
    });
  }
}), Cm = { class: "nut-audio" }, Sm = {
  key: 0,
  class: "nut-audio__progress"
}, Tm = { class: "nut-audio__time" }, Nm = { class: "nut-audio__bar" }, _m = /* @__PURE__ */ g("div", { class: "nut-audio__button--custom" }, null, -1), Dm = { class: "nut-audio__time" }, Im = {
  key: 1,
  class: "nut-audio__icon"
}, Bm = ["controls", "src", "preload", "autoplay", "loop", "muted"];
function Mm(e, t, n, o, l, s) {
  const a = U("nut-range"), r = U("Service");
  return c(), f("div", Cm, [
    e.type == "progress" ? (c(), f("div", Sm, [
      g("div", Tm, E(e.currentDuration), 1),
      g("div", Nm, [
        te(a, {
          modelValue: e.percent,
          "onUpdate:modelValue": t[0] || (t[0] = (i) => e.percent = i),
          "hidden-range": "",
          "inactive-color": "#cccccc",
          "active-color": "#fa2c19",
          onChange: e.progressChange
        }, {
          button: oe(() => [
            _m
          ]),
          _: 1
        }, 8, ["modelValue", "onChange"])
      ]),
      g("div", Dm, E(e.duration), 1)
    ])) : N("", !0),
    e.type == "icon" ? (c(), f("div", Im, [
      g("div", {
        class: B(["nut-audio__icon--box", e.playing ? "nut-audio__icon--play" : "nut-audio__icon--stop"]),
        onClick: t[1] || (t[1] = (...i) => e.changeStatus && e.changeStatus(...i))
      }, [
        e.playing ? (c(), G(r, {
          key: 0,
          class: "nut-icon-am-rotate nut-icon-am-infinite"
        })) : (c(), G(r, { key: 1 }))
      ], 2)
    ])) : N("", !0),
    e.type == "none" ? (c(), f("div", {
      key: 2,
      onClick: t[2] || (t[2] = (...i) => e.changeStatus && e.changeStatus(...i))
    }, [
      _(e.$slots, "default")
    ])) : N("", !0),
    e.type != "none" ? _(e.$slots, "default", { key: 3 }) : N("", !0),
    g("audio", {
      ref: "audioRef",
      class: "audioMain",
      controls: e.type == "controls",
      src: e.url,
      preload: e.preload,
      autoplay: e.autoplay,
      loop: e.loop,
      muted: e.hanMuted,
      onTimeupdate: t[3] || (t[3] = (...i) => e.onTimeupdate && e.onTimeupdate(...i)),
      onCanplay: t[4] || (t[4] = (...i) => e.onCanplay && e.onCanplay(...i)),
      onEnded: t[5] || (t[5] = (...i) => e.audioEnd && e.audioEnd(...i))
    }, null, 40, Bm)
  ]);
}
const Lm = /* @__PURE__ */ ne(km, [["render", Mm]]), { create: Pm } = x("audio-operate"), Em = "NutAudioOperate", Am = Pm({
  props: {
    // 展示的形式   back 倒退   play 开始 or 暂停  forward 快进 mute 静音
    type: {
      type: String,
      default: () => "play"
    }
  },
  components: {
    NutButton: qe
  },
  emits: ["click"],
  setup(e) {
    const t = Se(Em), n = Ae(Uo), o = me(n), l = z(st().default);
    return fe(q(q({}, be(e)), be(o)), { customSlot: l, translate: t });
  }
}), zm = { class: "nut-audio-operate" };
function Vm(e, t, n, o, l, s) {
  const a = U("nut-button");
  return c(), f("div", zm, [
    e.type == "back" ? (c(), f("div", {
      key: 0,
      class: "nut-audio-operate-item",
      onClick: t[0] || (t[0] = (...r) => e.fastBack && e.fastBack(...r))
    }, [
      e.customSlot ? N("", !0) : (c(), G(a, {
        key: 0,
        type: "primary",
        size: "small"
      }, {
        default: oe(() => [
          ge(E(e.translate("back")), 1)
        ]),
        _: 1
      })),
      _(e.$slots, "default")
    ])) : N("", !0),
    e.type == "play" ? (c(), f("div", {
      key: 1,
      class: "nut-audio-operate-item",
      onClick: t[1] || (t[1] = (...r) => e.changeStatus && e.changeStatus(...r))
    }, [
      e.customSlot ? N("", !0) : (c(), G(a, {
        key: 0,
        type: "primary",
        size: "small"
      }, {
        default: oe(() => [
          ge(E(e.audioData.playing ? `${e.translate("pause")}` : `${e.translate("start")}`), 1)
        ]),
        _: 1
      })),
      _(e.$slots, "default")
    ])) : N("", !0),
    e.type == "forward" ? (c(), f("div", {
      key: 2,
      class: "nut-audio-operate-item",
      onClick: t[2] || (t[2] = (...r) => e.forward && e.forward(...r))
    }, [
      e.customSlot ? N("", !0) : (c(), G(a, {
        key: 0,
        type: "primary",
        size: "small"
      }, {
        default: oe(() => [
          ge("快进")
        ]),
        _: 1
      })),
      _(e.$slots, "default")
    ])) : N("", !0),
    e.type == "mute" ? (c(), f("div", {
      key: 3,
      class: "nut-audio-operate-item",
      onClick: t[3] || (t[3] = (...r) => e.handleMute && e.handleMute(...r))
    }, [
      e.customSlot ? N("", !0) : (c(), G(a, {
        key: 0,
        type: e.audioData.hanMuted ? "default" : "primary",
        size: "small"
      }, {
        default: oe(() => [
          ge(E(e.translate("mute")), 1)
        ]),
        _: 1
      }, 8, ["type"])),
      _(e.$slots, "default")
    ])) : N("", !0)
  ]);
}
const Om = /* @__PURE__ */ ne(Am, [["render", Vm]]), Xo = Symbol("nut-avatar"), { create: Hm } = x("avatar"), Rm = Hm({
  props: {
    size: {
      type: [String, Number],
      default: "normal"
    },
    shape: {
      type: String,
      default: "round"
    },
    bgColor: {
      type: String,
      default: "#eee"
    },
    color: {
      type: String,
      default: "#666"
    }
  },
  setup(e) {
    const { size: t, shape: n, bgColor: o, color: l } = be(e), s = ["large", "normal", "small"], a = Ae(Xo, null), r = z(null), i = T(() => {
      var y, v;
      return {
        ["nut-avatar"]: !0,
        [`nut-avatar-${t.value || ((y = a == null ? void 0 : a.props) == null ? void 0 : y.size) || "normal"}`]: !0,
        [`nut-avatar-${n.value || ((v = a == null ? void 0 : a.props) == null ? void 0 : v.shape) || "round"}`]: !0
      };
    }), p = T(() => {
      var d, y;
      return {
        width: t.value in s ? "" : `${t.value}px`,
        height: t.value in s ? "" : `${t.value}px`,
        backgroundColor: `${o.value}`,
        color: `${l.value}`,
        marginLeft: (d = a == null ? void 0 : a.props) != null && d.span ? `${(y = a == null ? void 0 : a.props) == null ? void 0 : y.span}px` : ""
      };
    });
    return {
      classes: i,
      styles: p,
      avatarRef: r
    };
  }
});
function Fm(e, t, n, o, l, s) {
  return c(), f("view", {
    ref: "avatarRef",
    style: A(e.styles),
    class: B(e.classes)
  }, [
    _(e.$slots, "default")
  ], 6);
}
const vn = /* @__PURE__ */ ne(Rm, [["render", Fm]]), { create: Wm } = x("avatar-group"), Ym = Wm({
  components: {
    NutAvatar: vn
  },
  props: {
    maxContent: {
      type: String,
      default: ""
    },
    maxCount: {
      type: [Number, String],
      default: ""
    },
    maxBgColor: {
      type: String,
      default: "#eee"
    },
    maxColor: {
      type: String,
      default: "#666"
    },
    size: {
      type: [String, Number],
      default: "normal"
    },
    shape: {
      type: String,
      default: "round"
    },
    span: {
      type: [String, Number],
      default: "-8"
    },
    zIndex: {
      type: String,
      default: "left"
    }
  },
  setup(e) {
    const t = z(null), n = z(99), o = z(), l = T(() => ({
      marginLeft: -1 * Number(e.span) + "px"
    })), s = (r) => {
      let i = 0;
      r && r.$el && (r = r.$el);
      const p = r.children;
      if (e.zIndex === "right")
        for (let d = 0; d < Number(e.maxCount); d++) {
          const y = p[d];
          y.style.zIndex = `${99 - d}`;
        }
      for (let d = Number(e.maxCount); d < p.length; d++) {
        const y = p[d];
        y.className.includes("avater-fold") || (y.style.display = "none", i++);
      }
      n.value = i;
    }, a = (r) => {
      const i = { attributes: !1, childList: !0, subtree: !0 }, p = function(y) {
        let v = !1;
        for (let b of y)
          if (b.type === "childList") {
            v = !0;
            break;
          }
        v && s(r);
      }, d = new MutationObserver(p);
      return d.observe(r, i), d;
    };
    return $e(() => {
      e.maxCount && Ne(() => {
        let r = pe(t);
        r && r.$el && (r = r.$el), s(r), o.value = a(r);
      });
    }), Ue(() => {
      var r;
      (r = o.value) == null || r.disconnect();
    }), Oe(Xo, {
      props: e,
      avatarGroupRef: t
    }), {
      styles: l,
      foldCount: n,
      avatarGroupRef: t
    };
  }
});
function jm(e, t, n, o, l, s) {
  const a = U("nut-avatar");
  return c(), f("view", {
    ref: "avatarGroupRef",
    class: "nut-avatar-group",
    style: A(e.styles)
  }, [
    _(e.$slots, "default"),
    e.foldCount > 0 ? (c(), G(a, {
      key: 0,
      class: "avater-fold",
      color: e.maxColor,
      "bg-color": e.maxBgColor,
      size: e.size,
      shape: e.shape,
      style: A({ magrinLeft: `${e.span}px` })
    }, {
      default: oe(() => [
        ge(E(e.maxContent || e.foldCount), 1)
      ]),
      _: 1
    }, 8, ["color", "bg-color", "size", "shape", "style"])) : N("", !0)
  ], 4);
}
const Km = /* @__PURE__ */ ne(Ym, [["render", jm]]);
var Et = /* @__PURE__ */ ((e) => (e[e.eq = 1] = "eq", e[e.lt = 2] = "lt", e[e.gt = 3] = "gt", e))(Et || {});
function Um(e, t, n) {
  let o = 0, l = e.length - 1, s = null;
  for (; o <= l; ) {
    s = Math.floor((o + l) / 2);
    const a = e[s], r = n(a, t);
    if (r === 1)
      return s;
    r === 2 ? o = s + 1 : r === 3 && (l = s - 1);
  }
  return s;
}
const { create: Xm } = x("list"), qm = Xm({
  props: {
    listData: {
      type: Array,
      default: () => []
    },
    bufferSize: {
      type: Number,
      default: 5
    },
    containerHeight: {
      type: Number
    },
    height: {
      type: Number,
      default: 80
    },
    margin: {
      type: Number,
      default: 10
    }
  },
  emits: ["scrollUp", "scrollDown", "scrollBottom"],
  setup(e, { emit: t }) {
    const n = document.documentElement.clientHeight || document.body.clientHeight || 667, o = z(null), l = z(null), s = z(null), a = me({
      start: 0,
      originStartIndex: 0,
      scrollTop: 0,
      list: e.listData.slice(),
      cachePositions: [],
      phantomHeight: e.height * e.listData.length
    }), r = T(() => e.containerHeight ? Math.min(e.containerHeight, n) : n), i = T(() => Math.ceil(r.value / e.height)), p = T(() => Math.min(a.originStartIndex + i.value + e.bufferSize, a.list.length)), d = T(() => a.list.slice(a.start, p.value)), y = () => {
      if (s.value)
        return `translate3d(0, ${a.start >= 1 ? a.cachePositions[a.start - 1].bottom : 0}px, 0)`;
    }, v = () => {
      a.cachePositions = [];
      for (let m = 0; m < a.list.length; ++m)
        a.cachePositions[m] = {
          index: m,
          height: e.height,
          top: m * e.height,
          bottom: (m + 1) * (e.height + e.margin),
          dValue: 0
        };
    }, b = () => {
      let m = s.value.childNodes;
      m = Array.from(m).filter((M) => M.nodeType === 1);
      const h = m[0];
      m.forEach((M, C) => {
        if (!M)
          return;
        const k = Ye(M), { height: D } = k, j = a.cachePositions[C + a.start].height - D;
        j && (a.cachePositions[C + a.start].bottom -= j, a.cachePositions[C + a.start].height = D, a.cachePositions[C + a.start].dValue = j);
      });
      let $ = 0;
      h && ($ = a.start);
      const L = a.cachePositions.length;
      let I = a.cachePositions[$].dValue;
      a.cachePositions[$].dValue = 0;
      for (let M = $ + 1; M < L; ++M) {
        const C = a.cachePositions[M];
        a.cachePositions[M].top = a.cachePositions[M - 1].bottom, a.cachePositions[M].bottom = a.cachePositions[M].bottom - I, C.dValue !== 0 && (I += C.dValue, C.dValue = 0);
      }
      const P = a.cachePositions[L - 1].bottom;
      a.phantomHeight = P;
    }, w = (m = 0) => {
      let h = Um(
        a.cachePositions,
        m,
        (L, I) => {
          const P = L.bottom;
          return P === I ? Et.eq : P < I ? Et.lt : Et.gt;
        }
      );
      return a.cachePositions[h].bottom < m && (h += 1), h;
    }, S = () => {
      a.originStartIndex = 0, a.start = 0, a.scrollTop = 0, o.value.scrollTop = 0, v(), a.phantomHeight = e.height * a.list.length;
    }, u = () => {
      var L;
      const m = (L = o.value) == null ? void 0 : L.scrollTop, { originStartIndex: h } = a, $ = w(m);
      $ !== h && (a.originStartIndex = $, a.start = Math.max(a.originStartIndex - e.bufferSize, 0), p.value >= a.list.length - 1 && t("scrollBottom")), t(m > a.scrollTop ? "scrollUp" : "scrollDown", m), a.scrollTop = m;
    };
    return v(), Q(
      () => e.listData,
      (m) => {
        if (a.list = m.slice(), a.list.length === m.length)
          v(), b();
        else {
          S();
          return;
        }
      }
    ), Q(
      () => a.start,
      () => {
        s.value && a.list.length > 0 && b();
      }
    ), fe(q({}, be(a)), {
      list: o,
      phantom: l,
      actualContent: s,
      getTransform: y,
      visibleData: d,
      getContainerHeight: r,
      handleScrollEvent: u
    });
  }
});
function Zm(e, t, n, o, l, s) {
  return c(), f("div", {
    ref: "list",
    class: "nut-list",
    style: A({ height: `${e.getContainerHeight}px` }),
    onScrollPassive: t[0] || (t[0] = (...a) => e.handleScrollEvent && e.handleScrollEvent(...a))
  }, [
    g("div", {
      ref: "phantom",
      class: "nut-list-phantom",
      style: A({ height: e.phantomHeight + "px" })
    }, null, 4),
    g("div", {
      ref: "actualContent",
      class: "nut-list-container",
      style: A({ transform: e.getTransform() })
    }, [
      (c(!0), f(J, null, ie(e.visibleData, (a, r) => (c(), f("div", {
        key: a,
        class: "nut-list-item"
      }, [
        _(e.$slots, "default", {
          item: a,
          index: r + e.start
        })
      ]))), 128))
    ], 4)
  ], 36);
}
const Gm = /* @__PURE__ */ ne(qm, [["render", Zm]]), Jm = { viewBox: "0 0 100 100" }, Qm = ["id"], xm = ["offset", "stop-color"], eh = ["d", "stroke-width"], th = ["d", "stroke", "stroke-linecap", "stroke-width"], nh = { class: "nut-circle-progress__text" }, qo = /* @__PURE__ */ ye({
  name: "NutCircleProgress",
  __name: "circle-progress",
  props: {
    progress: { default: 0 },
    strokeWidth: { default: 5 },
    radius: { default: 50 },
    strokeLinecap: { default: "round" },
    color: { default: "#fa2c19" },
    pathColor: { default: "#d9d9d9" },
    clockwise: { type: Boolean, default: !0 }
  },
  setup(e) {
    const t = e, n = Math.random().toString(36).slice(-8), o = T(() => {
      const i = t.clockwise ? 1 : 0;
      return `M 50 50 m 0 -45 a 45 45 0 1 ${i} 0 90 a 45 45 0 1, ${i} 0 -90`;
    }), l = T(() => ct(t.color) ? `url(#${n})` : t.color), s = T(() => {
      let i = 283, p = i * Number(t.progress) / 100;
      return {
        stroke: ct(t.color) ? `url(#${n})` : t.color,
        strokeDasharray: `${p}px ${i}px`
      };
    }), a = T(() => ({
      stroke: t.pathColor
    })), r = T(() => {
      if (!ct(t.color))
        return;
      let i = t.color;
      const p = Object.keys(i).sort((y, v) => parseFloat(y) - parseFloat(v));
      let d = [];
      return p.map((y) => {
        let v = {
          key: "",
          value: ""
        };
        v.key = y, v.value = i[y], d.push(v);
      }), d;
    });
    return (i, p) => (c(), f("div", {
      class: "nut-circle-progress",
      style: A({ height: Number(i.radius) * 2 + "px", width: Number(i.radius) * 2 + "px" })
    }, [
      (c(), f("svg", Jm, [
        g("defs", null, [
          g("linearGradient", {
            id: pe(n),
            x1: "100%",
            y1: "0%",
            x2: "0%",
            y2: "0%"
          }, [
            (c(!0), f(J, null, ie(r.value, (d, y) => (c(), f("stop", {
              key: y,
              offset: d.key,
              "stop-color": d.value
            }, null, 8, xm))), 128))
          ], 8, Qm)
        ]),
        g("path", {
          class: "nut-circle-progress__path",
          style: A(a.value),
          d: o.value,
          fill: "none",
          "stroke-width": i.strokeWidth
        }, " > ", 12, eh),
        g("path", {
          class: "nut-circle-progress__hover",
          style: A(s.value),
          d: o.value,
          fill: "none",
          stroke: l.value,
          "stroke-linecap": i.strokeLinecap,
          "stroke-width": i.strokeWidth
        }, null, 12, th)
      ])),
      g("div", nh, [
        _(i.$slots, "default", {}, () => [
          g("div", null, E(i.progress) + "%", 1)
        ])
      ])
    ], 4));
  }
});
we(qo);
const { create: oh } = x("noticebar"), lh = oh({
  props: {
    direction: {
      type: String,
      default: "across"
    },
    list: {
      type: Array,
      default: () => []
    },
    standTime: {
      type: Number,
      default: 1e3
    },
    complexAm: {
      type: Boolean,
      default: !1
    },
    height: {
      type: Number,
      default: 40
    },
    text: {
      type: String,
      default: ""
    },
    closeMode: {
      type: Boolean,
      default: !1
    },
    wrapable: {
      type: Boolean,
      default: !1
    },
    leftIcon: { type: Boolean, default: !0 },
    color: {
      type: String,
      default: ""
    },
    background: {
      type: String,
      default: ""
    },
    delay: {
      type: [String, Number],
      default: 1
    },
    scrollable: {
      type: Boolean,
      default: null
    },
    speed: {
      type: Number,
      default: 50
    }
  },
  components: {
    ScrollItem: function(e) {
      return e.item.props.style = e.style, e.item.key = e.key, Te(e.item);
    },
    Notice: or,
    CircleClose: tn
  },
  emits: ["click", "close", "acrossEnd"],
  setup(e, { emit: t, slots: n }) {
    const o = z(null), l = z(null), s = me({
      wrapWidth: 0,
      firstRound: !0,
      duration: 0,
      offsetWidth: 0,
      showNoticebar: !0,
      animationClass: "",
      animate: !1,
      scrollList: [],
      distance: 0,
      timer: null,
      keepAlive: !1,
      isCanScroll: null,
      showNotica: !0
    }), a = T(() => s.isCanScroll == null ? e.wrapable : !s.isCanScroll && !e.wrapable), r = T(() => ({
      "nut-noticebar__page-wrap-content": !0,
      "nut-ellipsis": a.value,
      [s.animationClass]: !0
    })), i = T(() => {
      let M = {};
      return e.color && (M.color = e.color), e.background && (M.background = e.background), e.direction == "vertical" && (M.height = `${e.height}px`), M;
    }), p = T(() => ({
      animationDelay: (s.firstRound ? e.delay : 0) + "s",
      animationDuration: s.duration + "s",
      transform: `translateX(${s.firstRound ? 0 : s.wrapWidth + "px"})`
    })), d = T(() => {
      let M = {};
      if (e.complexAm)
        M = {
          transform: `translateY(${s.distance}px)`
        };
      else if (s.animate) {
        let C = ~~(e.height / e.speed / 4);
        M = {
          transition: `all ${C == 0 ? ~~(e.height / e.speed) : C}s`,
          "margin-top": `-${e.height}px`
        };
      }
      return M;
    });
    Q(
      () => e.text,
      () => {
        y();
      }
    ), Q(
      () => e.list,
      (M) => {
        s.scrollList = [].concat(M);
      }
    );
    const y = () => {
      s.showNoticebar != !1 && setTimeout(() => {
        if (!o.value || !l.value)
          return;
        const M = o.value.getBoundingClientRect().width, C = l.value.getBoundingClientRect().width;
        s.isCanScroll = e.scrollable == null ? C > M : e.scrollable, s.isCanScroll ? (s.wrapWidth = M, s.offsetWidth = C, s.duration = C / e.speed, s.animationClass = "play") : s.animationClass = "";
      }, 0);
    }, v = (M) => {
      t("click", M);
    }, b = (M) => {
      e.closeMode && (s.showNoticebar = !e.closeMode), t("close", M);
    }, w = (M) => {
      s.firstRound = !1, t("acrossEnd", M), setTimeout(() => {
        s.duration = (s.offsetWidth + s.wrapWidth) / e.speed, s.animationClass = "play-infinite";
      }, 0);
    }, S = () => {
      u(), s.timer = setInterval(u, ~~(e.height / e.speed / 4 * 1e3) + e.standTime);
    }, u = () => {
      s.animate = !0, setTimeout(
        () => {
          s.scrollList.push(s.scrollList[0]), s.scrollList.shift(), s.animate = !1;
        },
        ~~(e.height / e.speed / 4 * 1e3)
      );
    }, m = () => {
      s.timer = setInterval(
        () => {
          let M = 100;
          for (let C = 0; C < M; C++)
            h(C, !(C < M - 1));
        },
        e.standTime + 100 * e.speed
      );
    }, h = (M, C) => {
      setTimeout(() => {
        s.distance -= e.height / 100, C && (s.scrollList.push(s.scrollList[0]), s.scrollList.shift(), s.distance = 0);
      }, M * e.speed);
    }, $ = (M) => {
      t("click", M);
    }, L = () => {
      e.closeMode && (s.showNoticebar = !e.closeMode), t("close", s.scrollList[0]);
    };
    $e(() => {
      e.direction == "vertical" ? (n.default ? (I(), P()) : s.scrollList = [].concat(e.list), setTimeout(() => {
        e.complexAm ? m() : S();
      }, e.standTime)) : y();
    });
    const I = () => {
      n.default && (s.scrollList = [].concat(n.default()[0].children));
    }, P = () => {
      setTimeout(() => {
        var M = new MutationObserver(() => {
          s.showNotica = !1, setTimeout(() => {
            s.showNotica = !0;
          }), I();
        });
        const C = document.getElementsByClassName("nut-noticebar-custom-item")[0];
        C && M.observe(C, {
          childList: !0,
          subtree: !0
        });
      }, 100);
    };
    return Ct(() => {
      s.keepAlive && (s.keepAlive = !1);
    }), St(() => {
      s.keepAlive = !0, clearInterval(s.timer);
    }), Ue(() => {
      clearInterval(s.timer);
    }), fe(q({}, be(s)), {
      isEllipsis: a,
      barStyle: i,
      contentStyle: p,
      horseLampStyle: d,
      wrap: o,
      content: l,
      handleClick: v,
      onClickIcon: b,
      onAnimationEnd: w,
      go: $,
      handleClickIcon: L,
      slots: n,
      pxCheck: Be,
      wrapContentClass: r
    });
  }
}), sh = { class: "nut-noticebar" }, ah = {
  key: 0,
  class: "nut-noticebar__page-lefticon"
}, rh = {
  ref: "wrap",
  class: "nut-noticebar__page-wrap"
}, ih = { class: "showNotica" }, uh = { class: "nut-noticebar-custom-item" }, ch = ["onClick"];
function dh(e, t, n, o, l, s) {
  const a = U("Notice"), r = U("CircleClose"), i = U("ScrollItem");
  return c(), f("view", sh, [
    e.direction == "across" ? Ie((c(), f("view", {
      key: 0,
      class: B(["nut-noticebar__page", {
        "nut-noticebar__page--withicon": e.closeMode,
        "nut-noticebar__page--close": e.closeMode,
        "nut-noticebar__page--wrapable": e.wrapable
      }]),
      style: A(e.barStyle),
      onClick: t[3] || (t[3] = (...p) => e.handleClick && e.handleClick(...p))
    }, [
      e.leftIcon ? (c(), f("view", ah, [
        _(e.$slots, "left-icon", {}, () => [
          te(a, { size: "16px" })
        ])
      ])) : N("", !0),
      g("view", rh, [
        g("view", {
          ref: "content",
          class: B(e.wrapContentClass),
          style: A(e.contentStyle),
          onAnimationend: t[0] || (t[0] = (...p) => e.onAnimationEnd && e.onAnimationEnd(...p)),
          onWebkitAnimationEnd: t[1] || (t[1] = (...p) => e.onAnimationEnd && e.onAnimationEnd(...p))
        }, [
          _(e.$slots, "default", {}, () => [
            ge(E(e.text), 1)
          ])
        ], 38)
      ], 512),
      e.closeMode || e.$slots["right-icon"] ? (c(), f("view", {
        key: 1,
        class: "nut-noticebar__page-righticon",
        onClick: t[2] || (t[2] = De((...p) => e.onClickIcon && e.onClickIcon(...p), ["stop"]))
      }, [
        e.$slots["right-icon"] ? _(e.$slots, "right-icon", { key: 0 }) : (c(), G(r, { key: 1 }))
      ])) : N("", !0)
    ], 6)), [
      [Me, e.showNoticebar]
    ]) : N("", !0),
    e.scrollList.length > 0 && e.direction == "vertical" && e.showNoticebar ? (c(), f("view", {
      key: 1,
      class: "nut-noticebar__vertical",
      style: A(e.barStyle)
    }, [
      e.slots.default ? (c(), f(J, { key: 0 }, [
        g("view", {
          class: "nut-noticebar__vertical-list",
          style: A(e.horseLampStyle)
        }, [
          g("div", ih, [
            (c(!0), f(J, null, ie(e.scrollList, (p, d) => (c(), G(i, {
              key: d,
              style: A({ height: e.height + "px", "line-height": e.height + "px" }),
              item: p
            }, null, 8, ["style", "item"]))), 128))
          ])
        ], 4),
        g("view", uh, [
          _(e.$slots, "default")
        ])
      ], 64)) : (c(), f("ul", {
        key: 1,
        class: "nut-noticebar__vertical-list",
        style: A(e.horseLampStyle)
      }, [
        (c(!0), f(J, null, ie(e.scrollList, (p, d) => (c(), f("li", {
          key: d,
          class: "nut-noticebar__vertical-item",
          style: A({ height: e.pxCheck(e.height), lineHeight: e.pxCheck(e.height) }),
          onClick: (y) => e.go(p)
        }, E(p), 13, ch))), 128))
      ], 4)),
      g("view", {
        class: "go",
        onClick: t[4] || (t[4] = (p) => !e.slots.rightIcon && e.handleClickIcon())
      }, [
        _(e.$slots, "right-icon", {}, () => [
          e.closeMode ? (c(), G(r, {
            key: 0,
            color: e.color,
            size: "11px"
          }, null, 8, ["color"])) : N("", !0)
        ])
      ])
    ], 4)) : N("", !0)
  ]);
}
const fh = /* @__PURE__ */ ne(lh, [["render", dh]]), ph = { class: "nut-empty" }, mh = ["src"], hh = { class: "nut-empty__description" }, Hn = "NutEmpty", Zo = /* @__PURE__ */ ye({
  name: Hn,
  __name: "empty",
  props: {
    image: { default: "empty" },
    imageSize: { default: "" },
    description: { default: "" }
  },
  setup(e) {
    const t = e, n = Se(Hn), o = {
      empty: "https://static-ftcms.jd.com/p/files/61a9e3183985005b3958672b.png",
      error: "https://ftcms.jd.com/p/files/61a9e33ee7dcdbcc0ce62736.png",
      network: "https://static-ftcms.jd.com/p/files/61a9e31de7dcdbcc0ce62734.png"
    }, l = T(() => t.imageSize ? {
      width: Be(t.imageSize),
      height: Be(t.imageSize)
    } : {}), s = T(() => t.image.startsWith("https://") || t.image.startsWith("http://") || t.image.startsWith("//") ? t.image : o[t.image]), a = T(() => t.description || n("noData"));
    return (r, i) => (c(), f("view", ph, [
      g("view", {
        class: "nut-empty__box",
        style: A(l.value)
      }, [
        _(r.$slots, "image", {}, () => [
          s.value ? (c(), f("img", {
            key: 0,
            class: "nut-empty__box--img",
            src: s.value
          }, null, 8, mh)) : N("", !0)
        ])
      ], 4),
      _(r.$slots, "description", {}, () => [
        g("view", hh, E(a.value), 1)
      ]),
      _(r.$slots, "default")
    ]));
  }
});
we(Zo);
function Rn(e, t) {
  let n = null, o = Date.now();
  return function(...l) {
    const s = Date.now(), a = t - (s - o);
    n && clearTimeout(n), a <= 0 ? (e(...l), o = Date.now()) : n = setTimeout(e, a);
  };
}
const { create: gh } = x("video"), vh = "NutVideo", yh = gh({
  props: {
    source: {
      type: Object,
      default: {}
    },
    options: {
      type: Object,
      default: {
        autoplay: !1,
        // 是否自动播放
        volume: 0.5,
        poster: "",
        loop: !1,
        controls: !0,
        muted: !1,
        // 是否静音
        disabled: !1,
        // 禁止操作
        playsinline: !1,
        // 行内展示
        touchPlay: !1,
        preload: ""
      },
      required: !0
    },
    model: {
      type: String,
      default: ""
    }
  },
  components: {},
  emits: ["click", "play", "pause", "playend", "time"],
  setup(e, { emit: t, expose: n }) {
    const o = Se(vh), l = me({
      videoElm: null,
      initial: !0,
      // 控制封面的显示
      showToolbox: !1,
      // 控制控制器和标题的显示
      // 视频容器元素
      player: {
        $player: null,
        pos: null
      },
      // progress进度条元素
      progressBar: {
        progressElm: null,
        // 进度条DOM对象
        pos: null
      },
      // video控制显示设置
      videoSet: {
        loaded: 0,
        // 缓存长度
        displayTime: "00:00",
        // 进度时间
        totalTime: "00:00",
        // 总时间
        progress: {
          width: 0,
          // 进度条长度
          current: 0
          // 进度条当前位置
        }
      },
      state: {
        controlShow: !0,
        vol: 0.5,
        // 音量
        currentTime: 0,
        // 当前时间
        fullScreen: !1,
        playing: !1,
        // 是否正在播放
        isLoading: !1,
        isEnd: !1,
        isError: !1,
        isMuted: !1
      },
      showTouchMask: !1
    }), s = z(null), a = T(() => e.options.disabled);
    Q(
      () => e.source,
      (V) => {
        V.src && Ne(() => {
          l.videoElm.load();
        });
      },
      { immediate: !0, deep: !0 }
    ), Q(
      () => e.options,
      (V) => {
        l.state.isMuted = V ? V.muted : !1;
      },
      { immediate: !0 }
    );
    const r = () => {
      l.videoElm = s.value, e.options.autoplay && setTimeout(() => {
        l.videoElm.play();
      }, 200), e.options.touchPlay && (l.showTouchMask = !0), e.options.playsinline && (l.videoElm.setAttribute("playsinline", e.options.playsinline), l.videoElm.setAttribute("webkit-playsinline", e.options.playsinline), l.videoElm.setAttribute("x5-video-player-type", "h5-page"), l.videoElm.setAttribute("x5-video-player-fullscreen", !1)), S(), l.showToolbox ? i() : (l.videoElm.addEventListener("play", () => {
        l.state.playing = !0, t("play", l.videoElm);
      }), l.videoElm.addEventListener("pause", () => {
        l.state.playing = !1, t("pause", l.videoElm);
      }), l.videoElm.addEventListener("ended", b), l.videoElm.addEventListener("timeupdate", Rn(v, 1e3)));
    }, i = () => {
      const V = s.value, j = s.value.getElementsByClassName("nut-video-controller__progress-value")[0];
      l.player.$player = V, l.progressBar.progressElm = j, l.progressBar.pos = j.getBoundingClientRect(), l.videoSet.progress.width = Math.round(j.getBoundingClientRect().width);
    }, p = () => {
      if (e.options.autoplay && e.options.disabled)
        return l.state.playing = !0, !1;
      if (l.state.playing = !l.state.playing, l.videoElm)
        if (l.state.playing)
          try {
            setTimeout(() => {
              l.videoElm.play();
            }, 200), l.videoElm.addEventListener("progress", () => {
              y();
            }), l.videoElm.addEventListener("timeupdate", Rn(v, 1e3)), l.videoElm.addEventListener("ended", b), t("play", l.videoElm);
          } catch (V) {
            w();
          }
        else
          l.videoElm.pause(), t("pause", l.videoElm);
    }, d = (V) => {
      var j = Math.floor(V / 3600);
      +j < 10 && (j = "0" + j);
      var X = Math.floor(V % 3600 / 60);
      +X < 10 && (X = "0" + X);
      var le = Math.round(V % 3600 % 60);
      +le < 10 && (le = "0" + le);
      var W = "";
      return j != 0 ? W = j + ":" + X + ":" + le : W = X + ":" + le, W;
    }, y = () => {
      l.videoSet.loaded && (l.videoSet.loaded = l.videoElm.buffered.end(0) / l.videoElm.duration * 100);
    }, v = () => {
      const V = l.videoElm.currentTime / l.videoElm.duration;
      l.videoSet.progress.current = Math.round(l.videoSet.progress.width * V), l.videoSet.totalTime = d(l.videoElm.duration), l.videoSet.displayTime = d(l.videoElm.currentTime), t("time", l.videoSet.displayTime, l.videoSet.totalTime);
    }, b = () => {
      l.state.playing = !1, l.state.isEnd = !0, l.videoSet.displayTime = "00:00", l.videoSet.progress.current = 0, l.videoElm.currentTime = 0, t("playend", l.videoElm);
    }, w = () => {
      l.state.isError = !0;
    }, S = () => {
      l.state.vol = e.options.volume;
    }, u = () => {
      l.state.isMuted = !l.state.isMuted, l.videoElm.muted = l.state.isMuted;
    }, m = () => {
    }, h = (V) => {
      let X = V.targetTouches[0].pageX - l.progressBar.pos.left;
      X <= 0 && (X = 0), X >= l.videoSet.progress.width && (X = l.videoSet.progress.width), l.videoSet.progress.current = X;
      let le = l.videoSet.progress.current / l.videoSet.progress.width;
      l.videoElm.duration && L(le, l.videoElm.duration);
    }, $ = (V) => {
      let X = V.changedTouches[0].pageX - l.progressBar.pos.left;
      l.videoSet.progress.current = X;
      let le = X / l.videoSet.progress.width;
      l.videoElm.duration && L(le, l.videoElm.duration);
    }, L = (V, j) => {
      l.videoElm.currentTime = Math.floor(V * j);
    }, I = () => {
      l.state.isError = !1, r();
    }, P = () => {
      l.state.fullScreen ? (l.state.fullScreen = !1, document.webkitCancelFullScreen()) : (l.state.fullScreen = !0, l.videoElm.webkitRequestFullScreen());
    };
    return n({
      play: p,
      pause: () => {
        l.state.playing = !1, l.videoElm.pause(), t("pause", l.videoElm);
      },
      stop: () => {
        b(), l.videoElm.pause();
      },
      muted: () => {
        l.state.isMuted = !0, l.videoElm.muted = !0;
      },
      unmuted: () => {
        l.state.isMuted = !1, l.videoElm.muted = !1;
      }
    }), $e(() => {
      r();
    }), fe(q(q({
      root: s
    }, be(e)), be(l)), {
      handleError: w,
      isDisabled: a,
      play: p,
      handleMuted: u,
      touchSlidSrart: m,
      touchSlidMove: h,
      touchSlidEnd: $,
      retry: I,
      fullScreen: P,
      translate: o
    });
  }
}), bh = {
  ref: "videocon",
  class: "nut-video"
}, $h = ["muted", "autoplay", "loop", "poster", "controls", "preload"], wh = ["src", "type"], kh = { class: "nut-video-controller__now" }, Ch = { class: "nut-video-controller__progress" }, Sh = {
  ref: "progressBar",
  class: "nut-video-controller__progress-value"
}, Th = /* @__PURE__ */ g("div", { class: "nut-video-controller__ball-move" }, null, -1), Nh = [
  Th
], _h = {
  ref: "playedBar",
  class: "nut-video-controller__played"
}, Dh = { class: "nut-video-controller__total" }, Ih = { class: "nut-video-error" }, Bh = { class: "nut-video-error-tip" };
function Mh(e, t, n, o, l, s) {
  return c(), f("div", bh, [
    g("video", {
      ref: "root",
      class: "nut-video-player",
      muted: e.options.muted,
      autoplay: e.options.autoplay,
      loop: e.options.loop,
      poster: e.options.poster,
      controls: e.options.controls,
      preload: e.options.preload,
      onError: t[0] || (t[0] = (...a) => e.handleError && e.handleError(...a))
    }, [
      g("source", {
        src: e.source.src,
        type: e.source.type
      }, null, 8, wh)
    ], 40, $h),
    e.showToolbox && !e.isDisabled ? (c(), f("div", {
      key: 0,
      ref: "touchMask",
      class: "nut-video-mask",
      onClick: t[1] || (t[1] = (...a) => e.play && e.play(...a))
    }, null, 512)) : N("", !0),
    e.showToolbox && !e.isDisabled ? Ie((c(), f("div", {
      key: 1,
      ref: "palyBtn",
      class: "nut-video-play-btn",
      onClick: t[2] || (t[2] = (...a) => e.play && e.play(...a))
    }, null, 512)), [
      [Me, !e.state.playing]
    ]) : N("", !0),
    Ie(g("div", {
      class: B(["nut-video-controller", { "nut-video-controller--show": !e.state.playing, "nut-video-controller--hide": e.state.playing }])
    }, [
      g("div", {
        class: "nut-video-controller__playbtn",
        onClick: t[3] || (t[3] = (...a) => e.play && e.play(...a))
      }),
      g("div", kh, E(e.videoSet.displayTime), 1),
      g("div", Ch, [
        g("div", Sh, [
          g("div", {
            class: "buffered",
            style: A({ width: `${e.videoSet.loaded}%` })
          }, null, 4),
          g("div", {
            class: "nut-video-controller__ball",
            style: A({
              transform: `translate3d(${e.videoSet.progress.current}px, -50%, 0)`
            }),
            onTouchmove: t[4] || (t[4] = De((a) => e.touchSlidMove(a), ["stop", "prevent"])),
            onTouchstart: t[5] || (t[5] = De((a) => e.touchSlidSrart(), ["stop"])),
            onTouchend: t[6] || (t[6] = De((a) => e.touchSlidEnd(a), ["stop"]))
          }, Nh, 36),
          g("div", _h, null, 512)
        ], 512)
      ]),
      g("div", Dh, E(e.videoSet.totalTime), 1),
      g("div", {
        class: B(["nut-video-controller__volume", { muted: e.state.isMuted }]),
        onClick: t[7] || (t[7] = (...a) => e.handleMuted && e.handleMuted(...a))
      }, null, 2),
      g("div", {
        class: "nut-video-controller__full",
        onClick: t[8] || (t[8] = (...a) => e.fullScreen && e.fullScreen(...a))
      })
    ], 2), [
      [Me, e.showToolbox && !e.isDisabled]
    ]),
    Ie(g("div", Ih, [
      g("p", Bh, E(e.translate("errorTip")), 1),
      g("p", {
        class: "nut-video-error-retry",
        onClick: t[9] || (t[9] = (...a) => e.retry && e.retry(...a))
      }, E(e.translate("clickRetry")), 1)
    ], 512), [
      [Me, e.state.isError]
    ])
  ], 512);
}
const yn = /* @__PURE__ */ ne(yh, [["render", Mh]]), Go = Symbol("nut-steps"), Jo = /* @__PURE__ */ ye({
  name: "NutSteps",
  __name: "steps",
  props: {
    direction: { default: "horizontal" },
    current: { default: "0" },
    progressDot: { type: Boolean, default: !1 }
  },
  emits: ["clickStep"],
  setup(e, { emit: t }) {
    const n = e, o = t, l = T(() => {
      const r = "nut-steps";
      return {
        [r]: !0,
        [`${r}-${n.direction}`]: !0,
        [`${r}-dot`]: !!n.progressDot
      };
    }), { linkChildren: s } = kt(Go);
    return s({ props: n, onEmit: (r) => {
      o("clickStep", r);
    } }), (r, i) => (c(), f("view", {
      class: B(l.value)
    }, [
      _(r.$slots, "default")
    ], 2));
  }
});
we(Jo);
const Lh = { class: "nut-step-head" }, Ph = /* @__PURE__ */ g("view", { class: "nut-step-line" }, null, -1), Eh = { class: "nut-step-icon-inner" }, Ah = {
  key: 0,
  class: "nut-step-inner"
}, zh = { class: "nut-step-main" }, Vh = { class: "nut-step-title" }, Oh = {
  key: 0,
  class: "nut-step-content"
}, Hh = ["innerHTML"], Qo = /* @__PURE__ */ ye({
  name: "NutStep",
  __name: "step",
  props: {
    title: { default: "" },
    content: { default: "" }
  },
  setup(e) {
    const { index: t, parent: n } = Tt(Go), o = T(() => {
      const r = t.value + 1;
      return r < +n.props.current ? "finish" : r === +n.props.current ? "process" : "wait";
    }), l = T(() => n.props.progressDot), s = T(() => {
      const r = "nut-step";
      return {
        [r]: !0,
        [`${r}-${o.value}`]: !0
      };
    }), a = () => {
      n.onEmit(t.value + 1);
    };
    return (r, i) => (c(), f("view", {
      class: B(s.value),
      onClick: a
    }, [
      g("view", Lh, [
        Ph,
        g("view", {
          class: B(["nut-step-icon", [l.value ? "" : "is-icon"]])
        }, [
          g("view", Eh, [
            _(r.$slots, "icon", {}, () => [
              l.value ? N("", !0) : (c(), f("view", Ah, E(pe(t) + 1), 1))
            ])
          ])
        ], 2)
      ]),
      g("view", zh, [
        g("view", Vh, [
          _(r.$slots, "title", {}, () => [
            g("span", null, E(r.title), 1)
          ])
        ]),
        r.content || r.$slots.content ? (c(), f("view", Oh, [
          _(r.$slots, "content", {}, () => [
            g("span", { innerHTML: r.content }, null, 8, Hh)
          ])
        ])) : N("", !0)
      ])
    ], 2));
  }
});
we(Qo);
const xo = Symbol("nut-swiper"), { create: Rh, componentName: Fn } = x("swiper"), Fh = Rh({
  props: {
    width: {
      type: [Number, String]
    },
    height: {
      type: [Number, String]
    },
    direction: {
      type: String,
      default: "horizontal"
      // horizontal and vertical
    },
    paginationVisible: {
      type: Boolean,
      default: !1
    },
    paginationColor: {
      type: String,
      default: "#fff"
    },
    loop: {
      type: Boolean,
      default: !0
    },
    duration: {
      type: [Number, String],
      default: 500
    },
    autoPlay: {
      type: [Number, String],
      default: 0
    },
    initPage: {
      type: [Number, String],
      default: 0
    },
    touchable: {
      type: Boolean,
      default: !0
    },
    isPreventDefault: {
      type: Boolean,
      default: !0
    },
    isStopPropagation: {
      type: Boolean,
      default: !0
    },
    paginationUnselectedColor: {
      type: String,
      default: "#ddd"
    }
  },
  emits: ["change"],
  setup(e, { emit: t, slots: n, expose: o }) {
    const l = z(), s = me({
      active: 0,
      num: 0,
      rect: null,
      width: 0,
      height: 0,
      moving: !1,
      offset: 0,
      touchTime: 0,
      autoplayTimer: null,
      children: [],
      childrenVNode: [],
      style: {}
    }), a = xe(), r = T(() => e.direction === "vertical"), i = T(() => {
      const R = Fn;
      return {
        [`${R}-inner`]: !0,
        [`${R}-vertical`]: r.value
      };
    }), p = T(() => {
      const R = Fn;
      return {
        [`${R}-pagination`]: !0,
        [`${R}-pagination-vertical`]: r.value
      };
    }), d = T(() => r.value ? a.deltaY.value : a.deltaX.value), y = T(() => a.direction.value === e.direction), v = T(() => s.children.length), b = T(() => s[r.value ? "height" : "width"]), w = T(() => v.value * b.value), S = T(() => s.rect ? (r.value ? s.rect.height : s.rect.width) - b.value * v.value : 0), u = T(() => (s.active + v.value) % v.value), m = () => {
      let R = 0;
      R = s.offset, s.style = {
        transitionDuration: `${s.moving ? 0 : e.duration}ms`,
        transform: `translate${r.value ? "Y" : "X"}(${R}px)`,
        [r.value ? "height" : "width"]: `${b.value * v.value}px`,
        [r.value ? "width" : "height"]: `${r.value ? s.width : s.height}px`
      };
    }, h = (R) => {
      var ue;
      let ee = [];
      const K = s.childrenVNode.length;
      let se = (ue = n == null ? void 0 : n.default) == null ? void 0 : ue.call(n);
      if (se = se.filter((de) => de.children && Array.isArray(de.children)), se.forEach((de) => {
        ee = ee.concat(de.children);
      }), !K)
        s.childrenVNode = ee.slice(), R.proxy && s.children.push(R.proxy);
      else if (K > ee.length)
        s.children = s.children.filter((de) => R.proxy !== de);
      else if (K < ee.length) {
        for (let de = 0; de < K; de++)
          if (ee[de].key !== s.childrenVNode[de].key) {
            R.proxy && s.children.splice(de, 0, R.proxy), R.vnode && s.childrenVNode.splice(de, 0, R.vnode);
            break;
          }
        K !== ee.length && (R.proxy && s.children.push(R.proxy), R.vnode && s.childrenVNode.push(R.vnode));
      } else
        s.childrenVNode = ee.slice(), R.proxy && s.children.push(R.proxy);
    }, $ = (R, ee = 0) => {
      let K = R * b.value;
      e.loop || (K = Math.min(K, -S.value));
      let se = ee - K;
      return e.loop || (se = ze(se, S.value, 0)), se;
    }, L = (R) => {
      const { active: ee } = s;
      return R ? e.loop ? ze(ee + R, -1, v.value) : ze(ee + R, 0, v.value - 1) : ee;
    }, I = ({ pace: R = 0, offset: ee = 0, isEmit: K = !1 }) => {
      if (v.value <= 1)
        return;
      const { active: se } = s, ue = L(R), de = $(ue, ee);
      if (e.loop) {
        if (s.children[0] && de !== S.value) {
          const Ce = de < S.value;
          s.children[0].setOffset(Ce ? w.value : 0);
        }
        if (s.children[v.value - 1] && de !== 0) {
          const Ce = de > 0;
          s.children[v.value - 1].setOffset(Ce ? -w.value : 0);
        }
      }
      s.active = ue, s.offset = de, K && se !== s.active && t("change", u.value), m();
    }, P = () => {
      s.moving = !0, s.active <= -1 && I({ pace: v.value }), s.active >= v.value && I({ pace: -v.value });
    }, M = () => {
      s.autoplayTimer && clearTimeout(s.autoplayTimer);
    }, C = (R) => {
      P(), a.reset(), Re(() => {
        Re(() => {
          s.moving = !1, I({
            pace: R,
            isEmit: !0
          });
        });
      });
    }, k = () => {
      C(-1);
    }, D = () => {
      C(1);
    }, V = (R) => {
      P(), a.reset(), Re(() => {
        s.moving = !1;
        let ee;
        e.loop && v.value === R ? ee = s.active === 0 ? 0 : R : ee = R % v.value, I({
          pace: ee - s.active,
          isEmit: !0
        });
      });
    }, j = () => {
      +e.autoPlay <= 0 || v.value <= 1 || (M(), s.autoplayTimer = setTimeout(() => {
        D(), j();
      }, Number(e.autoPlay)));
    }, X = (R = +e.initPage) => {
      M(), s.rect = l.value.getBoundingClientRect(), R = Math.min(v.value - 1, R), s.width = e.width ? +e.width : s.rect.width, s.height = e.height ? +e.height : s.rect.height, s.active = R, s.offset = $(s.active), s.moving = !0, m(), j();
    }, le = (R) => {
      e.isPreventDefault && R.preventDefault(), e.isStopPropagation && R.stopPropagation(), e.touchable && (a.start(R), s.touchTime = Date.now(), M(), P());
    }, W = (R) => {
      e.touchable && s.moving && (a.move(R), y.value && I({
        offset: d.value
      }));
    }, Y = () => {
      if (!e.touchable || !s.moving)
        return;
      const R = d.value / (Date.now() - s.touchTime);
      if ((Math.abs(R) > 0.3 || Math.abs(d.value) > +(b.value / 2).toFixed(2)) && y.value) {
        let K = 0;
        const se = r.value ? a.offsetY.value : a.offsetX.value;
        e.loop ? K = se > 0 ? d.value > 0 ? -1 : 1 : 0 : K = -Math[d.value > 0 ? "ceil" : "floor"](d.value / b.value), I({
          pace: K,
          isEmit: !0
        });
      } else
        d.value && I({ pace: 0 });
      s.moving = !1, m(), j();
    };
    return Oe(xo, {
      props: e,
      size: b,
      relation: h
    }), o({
      prev: k,
      next: D,
      to: V
    }), St(() => {
      M();
    }), Qt(() => {
      M();
    }), Q(
      () => e.initPage,
      (R) => {
        Ne(() => {
          X(Number(R));
        });
      }
    ), Q(
      () => e.height,
      () => {
        Ne(() => {
          X();
        });
      }
    ), Q(
      () => s.children.length,
      () => {
        Ne(() => {
          X();
        });
      }
    ), Q(
      () => e.autoPlay,
      (R) => {
        +R > 0 ? j() : M();
      }
    ), {
      state: s,
      classesInner: i,
      classesPagination: p,
      container: l,
      activePagination: u,
      onTouchStart: le,
      onTouchMove: W,
      onTouchEnd: Y
    };
  }
});
function Wh(e, t, n, o, l, s) {
  return c(), f("view", {
    ref: "container",
    class: "nut-swiper",
    onTouchstart: t[0] || (t[0] = (...a) => e.onTouchStart && e.onTouchStart(...a)),
    onTouchmove: t[1] || (t[1] = (...a) => e.onTouchMove && e.onTouchMove(...a)),
    onTouchend: t[2] || (t[2] = (...a) => e.onTouchEnd && e.onTouchEnd(...a)),
    onTouchcancel: t[3] || (t[3] = (...a) => e.onTouchEnd && e.onTouchEnd(...a))
  }, [
    g("view", {
      class: B(e.classesInner),
      style: A(e.state.style)
    }, [
      _(e.$slots, "default")
    ], 6),
    _(e.$slots, "page"),
    e.paginationVisible && !e.$slots.page ? (c(), f("view", {
      key: 0,
      class: B(e.classesPagination)
    }, [
      (c(!0), f(J, null, ie(e.state.children.length, (a, r) => (c(), f("i", {
        key: r,
        style: A({
          backgroundColor: e.activePagination === r ? e.paginationColor : e.paginationUnselectedColor
        }),
        class: B({ active: e.activePagination === r })
      }, null, 6))), 128))
    ], 2)) : N("", !0)
  ], 544);
}
const bn = /* @__PURE__ */ ne(Fh, [["render", Wh]]);
function Yh(e) {
  const t = Xe();
  t && Object.assign(t.proxy, e);
}
const { create: jh } = x("swiper-item"), Kh = jh({
  setup() {
    const e = Ae(xo);
    e.relation(Xe());
    const t = me({
      offset: 0
    }), n = T(() => {
      const l = {}, s = e == null ? void 0 : e.props.direction;
      return e != null && e.size.value && (l[s === "horizontal" ? "width" : "height"] = `${e == null ? void 0 : e.size.value}px`), t.offset && (l.transform = `translate${s === "horizontal" ? "X" : "Y"}(${t.offset}px)`), l;
    }), o = (l) => {
      t.offset = l;
    };
    return Ue(() => {
      e.relation(Xe(), "unmount");
    }), Yh({ setOffset: o }), {
      style: n
    };
  }
});
function Uh(e, t, n, o, l, s) {
  return c(), f("view", {
    class: "nut-swiper-item",
    style: A(e.style)
  }, [
    _(e.$slots, "default")
  ], 4);
}
const $n = /* @__PURE__ */ ne(Kh, [["render", Uh]]), Xh = ["innerHTML"], qh = ["innerHTML"], Wn = "nut-price", Rt = /* @__PURE__ */ ye({
  name: "NutPrice",
  __name: "price",
  props: {
    price: { default: 0 },
    needSymbol: { type: Boolean, default: !0 },
    symbol: { default: "&yen;" },
    decimalDigits: { default: 2 },
    thousands: { type: Boolean, default: !1 },
    position: { default: "before" },
    size: { default: "normal" },
    strikeThrough: { type: Boolean, default: !1 }
  },
  setup(e) {
    const t = e, n = T(() => ({
      [Wn]: !0,
      [`${Wn}--strike`]: t.strikeThrough
    })), o = T(() => t.needSymbol ? t.symbol : ""), l = (r) => String(r).indexOf(".") > 0, s = (r) => (Number(r) == 0 && (r = 0), l(r) ? (r = Number(r).toFixed(t.decimalDigits), r = typeof r.split(".") == "string" ? r.split(".") : r.split(".")[0]) : r = r.toString(), t.thousands ? (r || 0).toString().replace(/(\d)(?=(?:\d{3})+$)/g, "$1,") : r), a = (r) => {
      Number(r) == 0 && (r = 0), l(r) ? (r = Number(r).toFixed(t.decimalDigits), r = typeof r.split(".") == "string" ? 0 : r.split(".")[1] ? r.split(".")[1] : 0) : r = 0;
      const i = "0." + r, p = Number(i).toFixed(t.decimalDigits);
      return String(p).substring(2, p.length);
    };
    return (r, i) => (c(), f("view", {
      class: B(n.value)
    }, [
      r.needSymbol && r.position === "before" ? (c(), f("view", {
        key: 0,
        class: B(["nut-price--symbol", `nut-price--symbol-${r.size}`]),
        innerHTML: o.value
      }, null, 10, Xh)) : N("", !0),
      g("view", {
        class: B(`nut-price--${r.size}`)
      }, E(s(r.price)), 3),
      r.decimalDigits != 0 ? (c(), f("view", {
        key: 1,
        class: B(`nut-price--decimal-${r.size}`)
      }, ".", 2)) : N("", !0),
      g("view", {
        class: B(`nut-price--decimal-${r.size}`)
      }, E(a(r.price)), 3),
      r.needSymbol && r.position === "after" ? (c(), f("view", {
        key: 2,
        class: B(["nut-price--symbol", `nut-price--symbol-${r.size}`]),
        innerHTML: o.value
      }, null, 10, qh)) : N("", !0)
    ], 2));
  }
});
we(Rt);
const el = {
  show: { type: Boolean, default: !1 },
  initNo: { type: Number, default: 0 },
  showIndex: { type: Boolean, default: !0 },
  minZoom: { type: Number, default: 1 / 3 },
  maxZoom: { type: Number, default: 3 }
}, { create: Zh } = x("image-preview-item"), Gh = Zh({
  props: fe(q({}, el), {
    image: {
      type: Object,
      default: () => ({})
    },
    video: {
      type: Object,
      default: () => ({})
    },
    rootWidth: {
      type: Number,
      default: 0
    },
    rootHeight: {
      type: Number,
      default: 0
    },
    contentClose: {
      type: Boolean,
      default: !0
    }
  }),
  emits: ["close", "scale"],
  components: {
    NutVideo: yn,
    NutSwiperItem: $n
  },
  setup(e, { emit: t }) {
    const n = me({
      scale: 1,
      moveX: 0,
      moveY: 0,
      moving: !1,
      zooming: !1,
      imageRatio: 0,
      displayWidth: 0,
      displayHeight: 0
    }), o = xe(), l = T(() => {
      const { rootWidth: k, rootHeight: D } = e, V = D / k;
      return n.imageRatio > V;
    }), s = T(() => {
      const k = e.image;
      if (k && k.src) {
        const { scale: D, moveX: V, moveY: j, moving: X, zooming: le } = n, W = {
          transitionDuration: le || X ? "0s" : ".3s"
        };
        if (D !== 1) {
          const Y = V / D, R = j / D;
          W.transform = `scale(${D}, ${D}) translate(${Y}px, ${R}px)`;
        }
        return W;
      }
      return {};
    }), a = T(() => {
      if (n.imageRatio) {
        const { rootWidth: k, rootHeight: D } = e, V = l.value ? D / n.imageRatio : k;
        return Math.max(0, (n.scale * V - k) / 2);
      }
      return 0;
    }), r = T(() => {
      if (n.imageRatio) {
        const { rootWidth: k, rootHeight: D } = e, V = l.value ? D : k * n.imageRatio;
        return Math.max(0, (n.scale * V - D) / 2);
      }
      return 0;
    }), i = (k) => {
      const { naturalWidth: D, naturalHeight: V } = k.target;
      n.imageRatio = V / D;
    }, p = () => {
      d(1), n.moveX = 0, n.moveY = 0;
    }, d = (k) => {
      k = ze(k, +e.minZoom, +e.maxZoom + 1), k !== n.scale && (n.scale = k, t("scale", {
        scale: k,
        index: e.initNo
      }));
    }, y = () => {
      const k = n.scale > 1 ? 1 : 2;
      d(k), n.moveX = 0, n.moveY = 0;
    }, v = (k) => Math.sqrt(pt(k[0].clientX - k[1].clientX, 2) + pt(k[0].clientY - k[1].clientY, 2));
    let b, w, S, u, m, h, $;
    const L = (k) => {
      const { touches: D } = k, { offsetX: V } = o;
      o.start(k), $ = D.length, b = n.moveX, w = n.moveY, h = Date.now(), n.moving = $ === 1 && n.scale !== 1, n.zooming = $ === 2 && !V.value, n.zooming && (S = n.scale, u = v(k.touches));
    }, I = (k) => {
      const { touches: D } = k;
      if (o.move(k), (n.moving || n.zooming) && ft(k, !0), n.moving) {
        const { deltaX: V, deltaY: j } = o, X = V.value + b, le = j.value + w;
        n.moveX = ze(X, -a.value, a.value), n.moveY = ze(le, -r.value, r.value);
      }
      if (n.zooming && D.length === 2) {
        const V = v(D), j = S * V / u;
        d(j);
      }
    }, P = () => {
      if ($ == 1 && e.video && e.video.source || $ > 1)
        return;
      const { offsetX: k, offsetY: D } = o, V = Date.now() - h, j = 250, X = 5;
      k.value < X && D.value < X && V < j && (m ? (clearTimeout(m), m = null, y()) : m = setTimeout(() => {
        e.contentClose && t("close"), m = null;
      }, j));
    }, M = (k) => {
      let D = !1;
      (n.moving || n.zooming) && (D = !0, n.moving && b === n.moveX && w === n.moveY && (D = !1), k.touches.length || (n.zooming && (n.moveX = ze(n.moveX, -a.value, a.value), n.moveY = ze(n.moveY, -r.value, r.value), n.zooming = !1), n.moving = !1, b = 0, w = 0, S = 1, n.scale < 1 && p(), n.scale > e.maxZoom && (n.scale = +e.maxZoom))), ft(k, D), P(), o.reset();
    }, C = () => {
      t("close");
    };
    return Q(() => e.initNo, p), Q(
      () => e.show,
      (k) => {
        k || p();
      }
    ), fe(q({}, be(n)), {
      onTouchStart: L,
      onTouchMove: I,
      onTouchEnd: M,
      getDistance: v,
      imageStyle: s,
      imageLoad: i,
      closeSwiper: C
    });
  }
}), Jh = ["src"];
function Qh(e, t, n, o, l, s) {
  const a = U("nut-video"), r = U("nut-swiper-item");
  return c(), G(r, { onClick: e.closeSwiper }, {
    default: oe(() => [
      g("view", {
        style: A(e.imageStyle),
        class: "nut-image-preview-box",
        onTouchstart: t[1] || (t[1] = (...i) => e.onTouchStart && e.onTouchStart(...i)),
        onTouchmove: t[2] || (t[2] = (...i) => e.onTouchMove && e.onTouchMove(...i)),
        onTouchend: t[3] || (t[3] = (...i) => e.onTouchEnd && e.onTouchEnd(...i)),
        onTouchcancel: t[4] || (t[4] = (...i) => e.onTouchEnd && e.onTouchEnd(...i))
      }, [
        e.image && e.image.src ? (c(), f("img", {
          key: 0,
          src: e.image.src,
          class: "nut-image-preview-img",
          onLoad: t[0] || (t[0] = (...i) => e.imageLoad && e.imageLoad(...i))
        }, null, 40, Jh)) : N("", !0),
        e.video && e.video.source ? (c(), G(a, {
          key: 1,
          source: e.video.source,
          options: e.video.options
        }, null, 8, ["source", "options"])) : N("", !0)
      ], 36)
    ]),
    _: 1
  }, 8, ["onClick"]);
}
const xh = /* @__PURE__ */ ne(Gh, [["render", Qh]]), { create: e0 } = x("image-preview"), t0 = e0({
  props: fe(q({}, el), {
    images: { type: Array, default: () => [] },
    videos: { type: Array, default: () => [] },
    contentClose: { type: Boolean, default: !0 },
    paginationVisible: { type: Boolean, default: !1 },
    paginationColor: { type: String, default: "#fff" },
    autoplay: { type: [Number, String], default: 0 },
    teleport: { type: [String, Element], default: "body" },
    teleportDisable: { ype: Boolean, default: !1 },
    closeable: {
      type: Boolean,
      default: !1
    },
    closeIconPosition: {
      type: String,
      default: "top-right"
      // top-right  top-left
    },
    beforeClose: Function,
    isLoop: {
      type: Boolean,
      default: !0
    }
  }),
  emits: ["close", "change"],
  components: {
    ImagePreviewItem: xh,
    CircleClose: tn,
    NutPopup: Ee,
    NutSwiper: bn
  },
  setup(e, { emit: t }) {
    const n = z(), o = me({
      showPop: e.show,
      active: 0,
      rootWidth: 0,
      rootHeight: 0
    }), l = T(() => {
      const d = "nut-image-preview-close";
      return `nut-image-preview-close-icon ${e.closeIconPosition == "top-right" ? `${d}-right` : `${d}-left`}`;
    }), s = T(() => qn(e.videos) ? [].concat(e.videos).concat(e.images) : e.images), a = (d) => {
      d !== o.active && (o.active = d, t("change", o.active));
    }, r = () => {
      en(e.beforeClose, {
        args: [o.active],
        done: () => i()
      });
    }, i = () => {
      o.showPop = !1, t("close");
    }, p = () => {
      if (n.value) {
        const d = Ye(n.value);
        o.rootHeight = d.height, o.rootWidth = d.width;
      }
    };
    return Q(
      () => e.show,
      (d) => {
        o.showPop = d, d && (a(e.initNo), Ne(() => {
          p();
        }));
      }
    ), Q(
      () => e.initNo,
      (d) => {
        d != o.active && a(d);
      }
    ), $e(() => {
      a(e.initNo);
    }), fe(q({
      swipeRef: n
    }, be(o)), {
      onClose: r,
      mergeImages: s,
      setActive: a,
      iconClasses: l
    });
  }
}), n0 = {
  ref: "swipeRef",
  class: "nut-image-preview"
}, o0 = {
  key: 0,
  class: "nut-image-preview-index"
};
function l0(e, t, n, o, l, s) {
  const a = U("image-preview-item"), r = U("nut-swiper"), i = U("CircleClose"), p = U("nut-popup");
  return c(), G(p, {
    visible: e.showPop,
    "onUpdate:visible": t[1] || (t[1] = (d) => e.showPop = d),
    "pop-class": "nut-image-preview-custom-pop",
    "teleport-disable": e.teleportDisable,
    teleport: e.teleport,
    "lock-scroll": "",
    onClosed: e.onClose
  }, {
    default: oe(() => [
      g("view", n0, [
        e.showPop ? (c(), G(r, {
          key: 0,
          "auto-play": e.autoplay,
          class: "nut-image-preview-swiper",
          loop: e.isLoop,
          "is-prevent-default": !1,
          direction: "horizontal",
          "init-page": e.initNo,
          "pagination-visible": e.paginationVisible,
          "pagination-color": e.paginationColor,
          onChange: e.setActive
        }, {
          default: oe(() => [
            (c(!0), f(J, null, ie(e.mergeImages, (d, y) => (c(), G(a, {
              key: y,
              video: y < e.videos.length ? d : {},
              image: y >= e.videos.length ? d : {},
              "root-height": e.rootHeight,
              "root-width": e.rootWidth,
              show: e.showPop,
              "init-no": e.active + 1,
              "content-close": e.contentClose,
              "max-zoom": e.maxZoom,
              "min-zoom": e.minZoom,
              onClose: e.onClose
            }, null, 8, ["video", "image", "root-height", "root-width", "show", "init-no", "content-close", "max-zoom", "min-zoom", "onClose"]))), 128))
          ]),
          _: 1
        }, 8, ["auto-play", "loop", "init-page", "pagination-visible", "pagination-color", "onChange"])) : N("", !0)
      ], 512),
      e.showIndex ? (c(), f("view", o0, E(e.active + 1) + " / " + E(e.mergeImages.length), 1)) : N("", !0),
      e.closeable ? (c(), f("view", {
        key: 1,
        class: B(e.iconClasses),
        onClick: t[0] || (t[0] = (...d) => e.onClose && e.onClose(...d))
      }, [
        _(e.$slots, "close-icon", {}, () => [
          te(i, { color: "#ffffff" })
        ])
      ], 2)) : N("", !0)
    ]),
    _: 3
  }, 8, ["visible", "teleport-disable", "teleport", "onClosed"]);
}
const wn = /* @__PURE__ */ ne(t0, [["render", l0]]);
class s0 {
  constructor() {
    O(this, "show", !1);
    O(this, "images", []);
    O(this, "videos", []);
    O(this, "contentClose", !0);
    O(this, "initNo", 0);
    O(this, "paginationVisible", !1);
    O(this, "paginationColor", "");
    O(this, "autoplay", 0);
    O(this, "isWrapTeleport", !1);
    O(this, "showIndex", !0);
    O(this, "closeable", !1);
    O(this, "closeIcon", "circle-close");
    O(this, "closeIconPosition", "top-right");
    O(this, "beforeClose");
    O(this, "maxZoom", 3);
    O(this, "minZoom", 1 / 3);
    O(this, "isLoop", !0);
    O(this, "teleport", "body");
  }
}
class a0 {
  constructor(t) {
    O(this, "options", new s0());
    const n = Object.assign(this.options, t), { unmount: o } = rn(n, {
      name: "image-preview",
      components: [Ee, yn, bn, $n, Nt],
      wrapper: () => ({
        setup() {
          return () => (n.onClose = () => {
            n.show = !1, Ne(() => {
              o();
            });
          }, Te(wn, n));
        }
      })
    });
  }
}
const r0 = (e) => new a0(e);
r0.install = (e) => {
  e.use(wn);
};
function i0(e) {
  const t = Xe();
  t && Object.assign(t.proxy, e);
}
const { create: u0 } = x("countup"), c0 = u0({
  props: {
    initNum: {
      type: Number,
      default: 0
    },
    endNum: {
      type: Number,
      default: 0
    },
    speed: {
      type: Number,
      default: 1
    },
    toFixed: {
      type: Number,
      default: 0
    },
    during: {
      type: Number,
      default: 1e3
    },
    startFlag: {
      type: Boolean,
      default: !0
    },
    // 数字滚动
    numWidth: {
      type: Number,
      default: 20
    },
    numHeight: {
      type: Number,
      default: 20
    },
    scrolling: {
      type: Boolean,
      default: !1
    },
    // 自定义图片
    customBgImg: {
      type: String,
      default: ""
    },
    customSpacNum: {
      type: Number,
      default: 0
    },
    customChangeNum: {
      type: Number,
      default: 1
    },
    // 抽奖
    type: {
      type: String,
      default: ""
    },
    machineNum: {
      type: Number,
      default: 3
    },
    machinePrizeNum: {
      type: Number,
      default: 0
    },
    machinePrizeLevel: {
      type: Number,
      default: 0
    },
    machineTurnMore: {
      type: Number,
      default: 0
    }
  },
  components: {},
  emits: ["click", "scrollEnd"],
  setup(e, { emit: t }) {
    const n = z(null), o = z([]), l = (C) => {
      C && o.value.push(C);
    }, s = me({
      valFlag: !1,
      current: 0,
      sortFlag: "add",
      initDigit1: 0,
      initDigit2: 0,
      to0_10: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 0],
      to10_0: [0, 9, 8, 7, 6, 5, 4, 3, 2, 1, 1],
      timer: null,
      totalCount: 0,
      // 正整数
      pointNum: 0,
      // 小数位
      numberVal: 0,
      // 数字
      num_total_len: 0,
      // 数字长度
      relNum: 0,
      // 去除小数点
      customNumber: 1,
      prizeLevelTrun: 0,
      prizeY: [],
      prizeYPrev: [],
      // machineTransition: 'none',
      finshMachine: 0,
      notPrize: [],
      typeMachine: ""
    }), { startFlag: a, scrolling: r, customBgImg: i, type: p } = me(e);
    Q(
      () => e.customChangeNum,
      () => {
        y(), u(0);
      }
    ), Q(
      () => e.machinePrizeLevel,
      (C) => {
        s.prizeLevelTrun = C;
      }
    ), Q(
      () => e.initNum,
      (C) => {
        s.current = C, s.valFlag = !1, d();
      }
    ), Q(
      () => e.endNum,
      () => {
        s.current = e.initNum, s.valFlag = !1, d();
      }
    );
    const d = () => {
      if (s.valFlag)
        return !1;
      a && (r || i ? p != "machine" && u() : (S(), setTimeout(() => {
        s.valFlag = !0;
      }, 300)));
    }, y = () => {
      clearInterval(Number(s.timer)), s.timer = null;
    }, v = (C, k, D) => {
      const V = (C.toString().split(".")[1] || "").length, j = (k.toString().split(".")[1] || "").length, X = Math.pow(10, Math.max(V, j));
      return D == "-" ? Number((C * X - k * X).toFixed(0)) / X : Number((C * X + k * X).toFixed(0)) / X;
    }, b = (C) => {
      let { num_total_len: k, pointNum: D, initDigit1: V, initDigit2: j, sortFlag: X } = s, le = X == "add" || X == "equal" ? String(j)[C - (k - D)] : 10 - Number(String(j)[C - (k - D)]), W = X == "add" || X == "equal" ? String(V)[C] : 10 - Number(String(V)[C]), Y = C > k - D - 1 ? -le * 100 + "%" : C <= String(V).length - 1 ? -W * 100 + "%" : 0;
      return Y == "-1000%" && (Y = 0), Y;
    }, w = (C) => {
      let { num_total_len: k, pointNum: D, initDigit1: V, initDigit2: j } = s, X = String(j)[C - (k - D)];
      return C > k - D - 1 ? X || 0 : C <= String(V).length - 1 ? String(V)[C] : 0;
    }, S = () => {
      let { endNum: C, initNum: k, speed: D, toFixed: V } = e, j = setInterval(() => {
        if (k > C)
          if (Number(s.current) <= C || Number(s.current) <= D)
            s.current = C.toFixed(V), clearInterval(j), t("scrollEnd"), s.valFlag = !1;
          else {
            let X = parseFloat(String(s.current)) - parseFloat(String(D));
            s.current = X.toFixed(V);
          }
        else if (Number(s.current) >= C)
          s.current = C.toFixed(V), clearInterval(j), t("scrollEnd"), s.valFlag = !1;
        else {
          let X = parseFloat(String(s.current)) + parseFloat(String(D));
          s.current = X.toFixed(V);
        }
      }, e.during);
    }, u = (C) => {
      let { initNum: k, endNum: D, toFixed: V, customBgImg: j } = e;
      j && (k = e.customChangeNum);
      let X, le, W, Y;
      k != 0 ? (V != 0 && (k = Number(k.toFixed(V))), String(k).indexOf(".") > -1 ? (X = String(k).split(".")[0].length, le = String(k).split(".")[1].length) : (X = String(k).length, le = 0)) : (X = 1, le = 0), D != 0 ? (V != 0 && (D = Number(D.toFixed(V))), String(D).indexOf(".") > -1 ? (W = String(D).split(".")[0].length, Y = String(D).split(".")[1].length) : (W = String(D).length, Y = 0)) : (W = 1, Y = 0);
      let R = X >= W ? X : W, ee = le >= Y ? le : Y;
      s.num_total_len = R + ee, s.pointNum = ee, k > D ? (s.sortFlag = "reduce", s.to0_10 = [0, 9, 8, 7, 6, 5, 4, 3, 2, 1, 0], s.totalCount = v(k, D, "-"), s.numberVal = Number(String(k))) : k < D ? (s.sortFlag = "add", s.to0_10 = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 0], s.totalCount = v(D, k, "-"), s.numberVal = Number(String(D))) : s.sortFlag = "equal";
      var K = 1;
      for (let ue = 0; ue < s.pointNum; ue++)
        K *= 10;
      var se = s.numberVal * K;
      if (s.relNum = se, V != 0 && (s.pointNum = String(s.numberVal).split(".")[1] ? String(s.numberVal).split(".")[1].length : 0, s.num_total_len = String(se).length), String(k).indexOf(".") > -1) {
        let ue = String(k).split(".");
        s.initDigit1 = Number(ue[0]), s.initDigit2 = Number(ue[1]);
      } else
        s.initDigit1 = k, s.initDigit2 = 0;
      r && !j ? Ne(() => {
        if (s.sortFlag == "equal")
          return !1;
        let ue = o.value[s.num_total_len - 1];
        m(ue);
      }) : C !== 0 && L();
    }, m = (C) => {
      y();
      var k = 1;
      s.pointNum != 0 && (k = 1 / Math.pow(10, s.pointNum)), s.timer = setInterval(() => {
        h(C), s.totalCount = v(s.totalCount, k, "-"), s.totalCount <= 0 && (y(), t("scrollEnd"), s.valFlag = !1);
      }, e.during);
    }, h = (C) => {
      let k = C.getAttribute("turn-number"), D;
      if (s.sortFlag == "add" ? D = parseInt(String(k)) + 1 : D = parseInt(String(k)) - 1 >= 0 ? parseInt(String(k)) - 1 : 9, C.setAttribute("turn-number", String(D)), (C.style.transition == "none 0s ease 0s" || D == 1 || !C.style.transition) && (C.style.transition = `all linear ${e.during}ms`), D == 10 || s.sortFlag == "reduce" && D == 0) {
        var V = null;
        C.style.top = `-${s.sortFlag == "add" ? D * 100 : (10 - D) * 100}%`, C.setAttribute("turn-number", "0"), V = setTimeout(() => {
          V && clearTimeout(V), C.style.transition = "none", C.style.top = "0", $(C, D);
        }, 0.975 * e.during);
      } else
        C.style.top = `-${s.sortFlag == "add" ? D * 100 : (10 - D) * 100}%`;
      C.style.top == "-100%" && s.sortFlag == "reduce" && h(C.previousSibling);
    }, $ = (C, k) => {
      setTimeout(() => {
        k == 10 && C.previousSibling && h(C.previousSibling);
      }, 200);
    }, L = () => {
      Ne(() => {
        n.value.addEventListener("webkitTransitionEnd", () => {
          t("scrollEnd"), s.valFlag = !1;
        });
      });
    }, I = () => {
      for (s.notPrize = []; s.notPrize.length < 3; ) {
        var C = Math.floor(Math.random() * e.machinePrizeNum + 1);
        s.notPrize.indexOf(C) == -1 && s.notPrize.push(C);
      }
    };
    i0({ machineLuck: () => {
      const C = e.machineTurnMore < 0 ? 0 : e.machineTurnMore;
      let k = e.numHeight * e.machinePrizeNum;
      s.prizeLevelTrun < 0 && I();
      for (let D = 0; D < e.machineNum; D++)
        setTimeout(() => {
          let V = k * (D + 1 + parseFloat(String(C)));
          s.prizeYPrev.length != 0 && (s.prizeY[D] = s.prizeYPrev[D]);
          let j = s.prizeYPrev[D] ? s.prizeYPrev[D] : 0, X = V + j + (e.machinePrizeNum - s.prizeLevelTrun + 1) * e.numHeight + (k - j);
          s.prizeLevelTrun < 0 && (X += e.numHeight * s.notPrize[D]), M(
            D,
            // parseFloat((this.machinePrizeNum-(this.prizeLevelTrun-1))*this.numHeight + turn + local),
            X,
            j
          );
        }, 500 * D);
    } });
    const M = (C, k, D) => {
      let V = setInterval(() => {
        if (D <= k)
          D += 10, s.prizeY[C] = parseFloat(String(D));
        else if (clearInterval(V), V = null, s.finshMachine += 1, s.prizeY[C] = k, s.finshMachine == e.machineNum) {
          let j = e.numHeight * e.machinePrizeNum;
          s.prizeYPrev = [], JSON.parse(JSON.stringify(s.prizeY)).forEach((le) => {
            let W = le;
            for (; W > j; )
              W -= j;
            s.prizeYPrev.push(W);
          }), setTimeout(() => {
            s.finshMachine = 0, s.prizeLevelTrun < 0 ? (t("scrollEnd", !1), s.valFlag = !1) : (t("scrollEnd", !0), s.valFlag = !1);
          }, 130);
        }
      }, 30);
    };
    return $e(() => {
      s.current = e.initNum, Ne(() => {
        d();
      });
    }), Ue(() => {
      y(), s.timer = null;
    }), fe(q(q({}, be(s)), be(me(e))), {
      runNumberImg: n,
      setRef: l,
      topNumber: b,
      turnNumber: w
    });
  }
}), d0 = { class: "nut-countup" }, f0 = ["turn-number"];
function p0(e, t, n, o, l, s) {
  return c(), f("view", d0, [
    e.customBgImg != "" ? (c(), f(J, { key: 0 }, [
      e.type == "machine" ? (c(), f("view", {
        key: 0,
        class: "nut-countup__machine",
        style: A({ height: e.numHeight + "px" })
      }, [
        (c(!0), f(J, null, ie(e.machineNum, (a, r) => (c(), f("view", {
          key: "mImg" + r,
          class: "nut-countup__machine-item",
          style: A({
            width: e.numWidth + "px",
            height: e.numHeight + "px",
            backgroundImage: "url(" + e.customBgImg + ")",
            backgroundPositionY: e.prizeY[r] + "px"
          })
        }, null, 4))), 128))
      ], 4)) : (c(), f("view", {
        key: 1,
        ref: "runNumberImg",
        class: "nut-countup__numberimg",
        style: A({ height: e.numHeight + "px" })
      }, [
        (c(!0), f(J, null, ie(e.num_total_len, (a, r) => (c(), f("view", {
          key: "cImg" + r,
          class: "nut-countup__numberimg__item",
          style: A({
            width: e.numWidth + "px",
            height: e.numHeight + "px",
            left: e.numWidth * (r > e.num_total_len - e.pointNum - 1 ? r == e.num_total_len - e.pointNum ? r * 1.5 : r * 1.3 : r) + "px",
            backgroundImage: "url(" + e.customBgImg + ")",
            backgroundPositionX: "0",
            backgroundPositionY: -(+String(e.relNum)[r] * e.numHeight + e.customSpacNum * +String(e.relNum)[r]) + "px",
            transition: "all linear " + e.during / 10 + "ms"
          })
        }, null, 4))), 128)),
        e.pointNum > 0 ? (c(), f("view", {
          key: 0,
          class: "nut-countup-pointstyl",
          style: A({
            width: e.numWidth / 2 + "px",
            bottom: 0,
            left: e.numWidth * (e.num_total_len - e.pointNum) * 1.1 + "px",
            fontSize: "30px"
          })
        }, " . ", 4)) : N("", !0)
      ], 4))
    ], 64)) : (c(), f(J, { key: 1 }, [
      e.scrolling ? (c(), f("view", {
        key: 0,
        class: "nut-countup__number",
        style: A({
          width: e.numWidth * e.num_total_len + e.numWidth / 3 + "px",
          height: e.numHeight + "px",
          lineHeight: e.numHeight + "px"
        })
      }, [
        (c(!0), f(J, null, ie(e.num_total_len, (a, r) => (c(), f("view", {
          ref_for: !0,
          ref: (i) => e.setRef(i),
          key: a,
          class: "nut-countup__number-item",
          style: A({
            top: e.topNumber(r),
            left: e.numWidth * (r > e.num_total_len - e.pointNum - 1 ? r * 1.1 : r) + "px"
          }),
          "turn-number": e.turnNumber(r)
        }, [
          (c(!0), f(J, null, ie(e.to0_10, (i, p) => (c(), f("view", {
            key: "dote" + p,
            class: "nut-countup__number-item__span",
            style: A({
              width: e.numWidth + "px",
              height: e.numHeight + "px",
              lineHeight: e.numHeight + "px"
            })
          }, E(i), 5))), 128))
        ], 12, f0))), 128)),
        e.pointNum > 0 ? (c(), f("view", {
          key: 0,
          class: "nut-countup-pointstyl",
          style: A({
            width: e.numWidth / 3 + "px",
            height: e.numHeight + "px",
            lineHeight: e.numHeight + "px",
            top: 0,
            left: e.numWidth * (e.num_total_len - e.pointNum) + "px"
          })
        }, " . ", 4)) : N("", !0)
      ], 4)) : (c(), f(J, { key: 1 }, [
        ge(E(e.current), 1)
      ], 64))
    ], 64))
  ]);
}
const m0 = /* @__PURE__ */ ne(c0, [["render", p0]]), h0 = (e) => {
  if (!e)
    return Date.now();
  let t = e;
  return t = +t > 0 ? +t : t.toString().replace(/-/g, "/"), new Date(t).getTime();
}, g0 = (e, t) => {
  let { h: n, m: o, s: l, ms: s } = e;
  const { d: a } = e;
  if (t.includes("DD") ? t = t.replace("DD", Je(a)) : n += Number(a) * 24, t.includes("HH") ? t = t.replace("HH", Je(n)) : o += Number(n) * 60, t.includes("mm") ? t = t.replace("mm", Je(o)) : l += Number(o) * 60, t.includes("ss") ? t = t.replace("ss", Je(l)) : s += Number(l) * 1e3, t.includes("S")) {
    const r = Je(s, 3).toString();
    t.includes("SSS") ? t = t.replace("SSS", r) : t.includes("SS") ? t = t.replace("SS", r.slice(0, 2)) : t.includes("S") && (t = t.replace("S", r.slice(0, 1)));
  }
  return t;
}, Yn = (e, t, n) => {
  const o = e, l = {
    d: 0,
    h: 0,
    m: 0,
    s: 0,
    ms: 0
  }, s = 1e3, a = 60 * s, r = 60 * a, i = 24 * r;
  return o > 0 && (l.d = o >= s ? Math.floor(o / i) : 0, l.h = Math.floor(o % i / r), l.m = Math.floor(o % r / a), l.s = Math.floor(o % a / s), l.ms = Math.floor(o % s)), n == "custom" ? l : g0(q({}, l), t);
}, v0 = { class: "nut-countdown" }, y0 = ["innerHTML"], tl = /* @__PURE__ */ ye({
  name: "NutCountdown",
  __name: "countdown",
  props: {
    modelValue: {},
    paused: { type: Boolean, default: !1 },
    startTime: { default: "" },
    endTime: { default: "" },
    millisecond: { type: Boolean, default: !1 },
    format: { default: "HH:mm:ss" },
    autoStart: { type: Boolean, default: !0 },
    time: { default: 0 }
  },
  emits: [
    "input",
    "update:modelValue",
    "end",
    "restart",
    "paused",
    // will be deprecated
    "onEnd",
    "onRestart",
    "onPaused"
  ],
  setup(e, { expose: t, emit: n }) {
    const o = e, l = n, s = z(0), a = z(null), r = z(!o.paused && o.autoStart), i = z(Date.now()), p = z(0), d = T(() => Yn(s.value, o.format)), y = () => {
      i.value = Number(o.endTime), p.value = Date.now() - h0(o.startTime), r.value || (r.value = !0), v();
    }, v = () => {
      window !== void 0 && (a.value = requestAnimationFrame(() => {
        if (r.value) {
          const u = Date.now() - p.value, m = Math.max(i.value - u, 0);
          s.value = m, m || (r.value = !1, w(), l("end"), l("onEnd")), m > 0 && v();
        }
      }));
    }, b = () => {
      !r.value && !o.autoStart && (r.value = !0, i.value = Date.now() + Number(s.value), v(), l("restart", s.value), l("onRestart", s.value));
    }, w = () => {
      cancelAnimationFrame(a.value), r.value = !1, l("restart", s.value), l("onRestart", s.value);
    };
    return t({
      start: b,
      pause: w,
      reset: () => {
        o.autoStart || (w(), s.value = Number(o.time));
      }
    }), Un(() => {
      o.autoStart ? y() : s.value = Number(o.time);
    }), Q(
      () => s.value,
      (u) => {
        const m = Yn(u, o.format, "custom");
        l("update:modelValue", m), l("input", m);
      }
    ), Q(
      () => o.paused,
      (u, m) => {
        m ? (r.value || (r.value = !0, i.value = Date.now() + Number(s.value), v()), l("restart", s.value), l("onRestart", s.value)) : r.value && w();
      }
    ), Q(
      () => o.endTime,
      () => {
        y();
      }
    ), Q(
      () => o.startTime,
      () => {
        y();
      }
    ), (u, m) => (c(), f("view", v0, [
      _(u.$slots, "default", {}, () => [
        g("view", {
          class: "nut-countdown__content",
          innerHTML: d.value
        }, null, 8, y0)
      ])
    ]));
  }
});
we(tl);
const kn = /* @__PURE__ */ ye({
  name: "NutTag",
  __name: "tag",
  props: {
    color: { default: "" },
    textColor: { default: "" },
    type: { default: "default" },
    plain: { type: Boolean, default: !1 },
    round: { type: Boolean, default: !1 },
    mark: { type: Boolean, default: !1 },
    closeable: { type: Boolean, default: !1 }
  },
  emits: ["close", "click"],
  setup(e, { emit: t }) {
    const n = e, o = t, l = T(() => {
      const i = "nut-tag";
      return {
        [i]: !0,
        [`${i}--${n.type}`]: n.type,
        [`${i}--plain`]: n.plain,
        [`${i}--round`]: n.round,
        [`${i}--mark`]: n.mark
      };
    }), s = T(() => {
      const i = {};
      return n.textColor ? i.color = n.textColor : n.color && n.plain && (i.color = n.color), n.plain ? (i.background = "#fff", i.borderColor = n.color) : n.color && (i.background = n.color), i;
    }), a = (i) => {
      o("close", i);
    }, r = (i) => {
      o("click", i);
    };
    return (i, p) => (c(), f("view", {
      class: B(l.value),
      style: A(s.value),
      onClick: r
    }, [
      _(i.$slots, "default"),
      i.closeable ? (c(), G(pe(zt), {
        key: 0,
        class: "nut-tag--close",
        width: "12px",
        height: "12px",
        onClick: De(a, ["stop"])
      })) : N("", !0)
    ], 6));
  }
});
we(kn);
const { create: b0 } = x("popover"), $0 = b0({
  components: {
    NutPopup: Ee
  },
  props: {
    visible: { type: Boolean, default: !1 },
    list: { type: Array, default: [] },
    theme: { type: String, default: "light" },
    location: { type: String, default: "bottom" },
    offset: { type: Array, default: [0, 12] },
    arrowOffset: { type: Number, default: 0 },
    customClass: { type: String, default: "" },
    showArrow: { type: Boolean, default: !0 },
    duration: { type: [Number, String], default: 0.3 },
    overlay: { type: Boolean, default: !1 },
    overlayClass: { type: String, default: "" },
    overlayStyle: { type: Object },
    closeOnClickOverlay: { type: Boolean, default: !0 },
    closeOnClickAction: { type: Boolean, default: !0 },
    closeOnClickOutside: { type: Boolean, default: !0 },
    targetId: { type: String, default: "" },
    bgColor: { type: String, default: "" }
  },
  emits: ["update", "update:visible", "close", "choose", "open"],
  setup(e, { emit: t }) {
    const n = z(), o = z(), l = z(e.visible), s = z(), a = z({
      width: 0,
      height: 0
    }), r = T(() => {
      const m = "nut-popover-arrow", h = e.location, $ = h.split("-")[0];
      return `${m} ${m}-${$} ${m}--${h}`;
    }), i = T(() => {
      const m = {}, { bgColor: h, arrowOffset: $, location: L } = e, I = L.split("-")[0], P = L.split("-")[1], M = 16;
      return h && (m[`border${p(I)}Color`] = h), e.arrowOffset != 0 && (["bottom", "top"].includes(I) && (P || (m.left = `calc(50% + ${$}px)`), P == "start" && (m.left = `${M + $}px`), P == "end" && (m.right = `${M - $}px`)), ["left", "right"].includes(I) && (P || (m.top = `calc(50% - ${$}px)`), P == "start" && (m.top = `${M - $}px`), P == "end" && (m.bottom = `${M + $}px`))), m;
    }), p = (m) => (m = m.toLowerCase(), m = m.replace(/\b\w+\b/g, (h) => h.substring(0, 1).toUpperCase() + h.substring(1)), m), d = T(() => {
      const m = {};
      if (!s.value)
        return {};
      const h = a.value.width, $ = a.value.height, { width: L, height: I, left: P, top: M, right: C } = s.value, { location: k, offset: D } = e, V = k == null ? void 0 : k.split("-")[0], j = k == null ? void 0 : k.split("-")[1];
      let X = 0, le = 0;
      if (Array.isArray(D) && (D == null ? void 0 : D.length) === 2 && (X += Number(D[1]), le += Number(D[0])), L) {
        if (["bottom", "top"].includes(V)) {
          const W = V === "bottom" ? I + X : -($ + X);
          m.top = `${M + W}px`, j || (m.left = `${-(h - L) / 2 + P + le}px`), j === "start" && (m.left = `${P + le}px`), j === "end" && (m.left = `${C + le}px`);
        }
        if (["left", "right"].includes(V)) {
          const W = V === "left" ? -(h + X) : L + X;
          m.left = `${P + W}px`, j || (m.top = `${M - $ / 2 + I / 2 - 4 + le}px`), j === "start" && (m.top = `${M + le}px`), j === "end" && (m.top = `${M + I + le}px`);
        }
      }
      return m;
    }), y = () => {
      var h, $, L, I;
      const m = Ye(
        e.targetId ? document.querySelector(`#${e.targetId}`) : n.value
      );
      s.value = {
        width: m.width,
        height: m.height,
        left: m.left,
        top: m.top + Math.max(((h = document.documentElement) == null ? void 0 : h.scrollTop) || 0, (($ = document.body) == null ? void 0 : $.scrollTop) || 0),
        right: m.right
      }, a.value = {
        height: (L = o.value) == null ? void 0 : L.clientHeight,
        width: (I = o.value) == null ? void 0 : I.clientWidth
      };
    };
    $e(() => {
      setTimeout(() => {
        y();
      }, 300);
    }), Q(
      () => e.visible,
      (m) => {
        l.value = m, m ? (window.addEventListener("touchstart", u, !0), Ne(() => {
          y();
        })) : window.removeEventListener("touchstart", u, !0);
      }
    );
    const v = (m) => {
      t("update", m), t("update:visible", m);
    }, b = () => {
      v(!e.visible), t("open");
    }, w = () => {
      t("update:visible", !1), t("close");
    }, S = (m, h) => {
      !m.disabled && t("choose", m, h), e.closeOnClickAction && w();
    }, u = (m) => {
      const h = n.value, $ = o.value;
      let L = h && !h.contains(m.target);
      if (e.targetId) {
        const I = document.querySelector(`#${e.targetId}`);
        L = I && !I.contains(m.target);
      }
      L && $ && !$.contains(m.target) && e.closeOnClickOutside && w();
    };
    return {
      showPopup: l,
      openPopover: b,
      popoverArrow: r,
      closePopover: w,
      chooseItem: S,
      popoverRef: n,
      popoverContentRef: o,
      getRootPosition: d,
      popoverArrowStyle: i,
      renderIcon: ot
    };
  }
}), w0 = {
  ref: "popoverContentRef",
  class: "nut-popover-content-group"
}, k0 = ["onClick"], C0 = { class: "nut-popover-menu-item-name" };
function S0(e, t, n, o, l, s) {
  const a = U("nut-popup");
  return c(), f(J, null, [
    e.targetId ? N("", !0) : (c(), f("div", {
      key: 0,
      ref: "popoverRef",
      class: "nut-popover-wrapper",
      onClick: t[0] || (t[0] = (...r) => e.openPopover && e.openPopover(...r))
    }, [
      _(e.$slots, "reference")
    ], 512)),
    (c(), G(Kn, { to: "body" }, [
      g("div", {
        class: B(["nut-popover", `nut-popover--${e.theme}`, `${e.customClass}`]),
        style: A(e.getRootPosition)
      }, [
        te(a, {
          visible: e.showPopup,
          "onUpdate:visible": t[1] || (t[1] = (r) => e.showPopup = r),
          "pop-class": `nut-popover-content nut-popover-content--${e.location}`,
          style: A({ background: e.bgColor }),
          position: "",
          transition: "nut-popover",
          overlay: e.overlay,
          duration: e.duration,
          "overlay-style": e.overlayStyle,
          "overlay-class": e.overlayClass,
          "close-on-click-overlay": e.closeOnClickOverlay
        }, {
          default: oe(() => [
            g("div", w0, [
              e.showArrow ? (c(), f("div", {
                key: 0,
                class: B(e.popoverArrow),
                style: A(e.popoverArrowStyle)
              }, null, 6)) : N("", !0),
              _(e.$slots, "content"),
              (c(!0), f(J, null, ie(e.list, (r, i) => (c(), f("div", {
                key: i,
                class: B([r.className, r.disabled && "nut-popover-menu-disabled", "nut-popover-menu-item"]),
                onClick: De((p) => e.chooseItem(r, i), ["stop"])
              }, [
                r.icon ? (c(), G(Ve(e.renderIcon(r.icon)), {
                  key: 0,
                  class: "nut-popover-item-img"
                })) : N("", !0),
                g("div", C0, E(r.name), 1)
              ], 10, k0))), 128))
            ], 512)
          ]),
          _: 3
        }, 8, ["visible", "pop-class", "style", "overlay", "duration", "overlay-style", "overlay-class", "close-on-click-overlay"])
      ], 6)
    ]))
  ], 64);
}
const nl = /* @__PURE__ */ ne($0, [["render", S0]]), T0 = { key: 0 }, N0 = {
  key: 1,
  class: "nut-skeleton"
}, _0 = {
  key: 0,
  class: "nut-skeleton-animation"
}, D0 = { class: "nut-skeleton-content" }, ol = /* @__PURE__ */ ye({
  name: "NutSkeleton",
  __name: "skeleton",
  props: {
    width: { default: "100px" },
    height: { default: "15px" },
    animated: { type: Boolean, default: !1 },
    avatar: { type: Boolean, default: !1 },
    avatarShape: { default: "round" },
    avatarSize: { default: "50px" },
    loading: { type: Boolean, default: !0 },
    round: { type: Boolean, default: !1 },
    row: { default: "1" },
    title: { type: Boolean, default: !0 }
  },
  setup(e) {
    const t = e, n = T(() => {
      const s = "avatarClass";
      return {
        [s]: !0,
        [`${s}--${t.avatarShape}`]: t.avatarShape
      };
    }), o = (s) => ({
      [s]: !0,
      [`${s}--round`]: t.round
    }), l = T(() => ({
      width: t.avatarSize,
      height: t.avatarSize
    }));
    return (s, a) => s.loading ? (c(), f("view", N0, [
      s.animated ? (c(), f("view", _0)) : N("", !0),
      g("view", D0, [
        s.avatar ? (c(), G(vn, {
          key: 0,
          class: B(n.value),
          shape: s.avatarShape,
          style: A(l.value)
        }, null, 8, ["class", "shape", "style"])) : N("", !0),
        g("view", {
          class: "nut-skeleton-content__line",
          style: A({ width: s.width })
        }, [
          s.title ? (c(), f("view", {
            key: 0,
            class: B(o("nut-skeleton-blockTitle")),
            style: A({ height: s.height })
          }, null, 6)) : N("", !0),
          (c(!0), f(J, null, ie(Number(s.row), (r) => (c(), f("view", {
            key: r,
            class: B(o("nut-skeleton-blockLine")),
            style: A({ height: s.height })
          }, null, 6))), 128))
        ], 4)
      ])
    ])) : (c(), f("view", T0, [
      _(s.$slots, "default")
    ]));
  }
});
we(ol);
const ll = Symbol("nut-collapse"), I0 = { class: "nut-collapse" }, sl = /* @__PURE__ */ ye({
  name: "NutCollapse",
  __name: "collapse",
  props: {
    modelValue: { default: "" },
    accordion: { type: Boolean, default: !1 }
  },
  emits: ["update:modelValue", "change"],
  setup(e, { emit: t }) {
    const n = e, o = t, l = z(n.modelValue || (n.accordion ? "" : []));
    Q(
      () => n.modelValue,
      (i) => {
        l.value = i;
      }
    );
    const s = (i, p, d = !0) => {
      l.value = i, o("update:modelValue", i), o("change", i, p, d);
    };
    return Oe(ll, {
      updateVal: (i) => {
        if (n.accordion)
          l.value === i ? s("", i, !1) : s(i, i, !0);
        else if (Array.isArray(l.value))
          if (l.value.includes(i)) {
            const p = l.value.filter((d) => d !== i);
            s(p, i, !1);
          } else {
            const p = l.value.concat([i]);
            s(p, i, !0);
          }
        else
          console.warn("[NutUI] <Collapse> 未开启手风琴模式时 v-model 应为数组");
      },
      isExpanded: (i) => n.accordion ? l.value === i : Array.isArray(l.value) ? l.value.includes(i) : !1
    }), (i, p) => (c(), f("view", I0, [
      _(i.$slots, "default")
    ]));
  }
});
we(sl);
const B0 = { class: "nut-collapse-item__title-main" }, M0 = { class: "nut-collapse-item__title-main-value" }, L0 = ["innerHTML"], P0 = {
  key: 2,
  class: "nut-collapse-item__title-label"
}, E0 = {
  key: 0,
  class: "nut-collapse-item__title-sub"
}, A0 = ["innerHTML"], z0 = {
  key: 0,
  class: "nut-collapse__item-extraWrapper"
}, V0 = { class: "nut-collapse__item-extraWrapper__extraRender" }, al = /* @__PURE__ */ ye({
  name: "NutCollapseItem",
  __name: "collapse-item",
  props: {
    title: { default: "" },
    value: { default: "" },
    label: { default: "" },
    disabled: { type: Boolean, default: !1 },
    name: { default: -1 },
    border: { type: Boolean, default: !0 },
    icon: { default: () => oo },
    rotate: { default: 180 }
  },
  setup(e) {
    const t = e, n = z(null), o = z(null), l = Ae(ll), s = T(() => {
      const v = "nut-collapse-item";
      return {
        [v]: !0,
        [v + "__border"]: t.border
      };
    }), a = T(() => l ? l.isExpanded(t.name) : !1), r = z(a.value ? "auto" : "0px"), i = () => {
      l && l.updateVal(t.name);
    }, p = () => {
      a.value && (r.value = "auto");
    }, d = () => {
      r.value = "0px", requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          var b;
          const v = (b = o.value) == null ? void 0 : b.offsetHeight;
          r.value = v ? `${v}px` : "auto";
        });
      });
    }, y = () => {
      var b;
      const v = (b = o.value) == null ? void 0 : b.offsetHeight;
      r.value = v ? `${v}px` : "auto", requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          r.value = "0px";
        });
      });
    };
    return Q(a, (v) => {
      v ? d() : y();
    }), (v, b) => (c(), f("view", {
      class: B(s.value)
    }, [
      g("view", {
        class: B(["nut-collapse-item__title", { "nut-collapse-item__title--disabled": v.disabled }]),
        onClick: i
      }, [
        g("view", B0, [
          g("view", M0, [
            v.$slots.title ? _(v.$slots, "title", { key: 0 }) : (c(), f("view", {
              key: 1,
              class: "nut-collapse-item__title-mtitle",
              innerHTML: v.title
            }, null, 8, L0)),
            v.label ? (c(), f("view", P0, E(v.label), 1)) : N("", !0)
          ])
        ]),
        v.$slots.value ? (c(), f("view", E0, [
          _(v.$slots, "value")
        ])) : (c(), f("view", {
          key: 1,
          class: "nut-collapse-item__title-sub",
          innerHTML: v.value
        }, null, 8, A0)),
        g("view", {
          class: B(["nut-collapse-item__title-icon", { "nut-collapse-item__title-icon--expanded": a.value }]),
          style: A({ transform: "rotate(" + (a.value ? v.rotate : 0) + "deg)" })
        }, [
          v.$slots.icon ? _(v.$slots, "icon", { key: 0 }) : (c(), G(Ve(pe(ot)(v.icon)), { key: 1 }))
        ], 6)
      ], 2),
      v.$slots.extra ? (c(), f("view", z0, [
        g("div", V0, [
          _(v.$slots, "extra")
        ])
      ])) : N("", !0),
      g("view", {
        ref_key: "wrapperRef",
        ref: n,
        class: "nut-collapse__item-wrapper",
        style: A({
          willChange: "height",
          height: r.value
        }),
        onTransitionend: p
      }, [
        g("view", {
          ref_key: "contentRef",
          ref: o,
          class: "nut-collapse__item-wrapper__content"
        }, [
          _(v.$slots, "default")
        ], 512)
      ], 36)
    ], 2));
  }
});
we(al);
const O0 = ye({
  props: {
    slots: {
      type: Array,
      default: () => []
    },
    record: {
      type: Object,
      default: () => ({})
    }
  },
  setup(e) {
    return () => Te("view", {}, e.slots[0] ? e.slots[0](e.record) : e.slots[1](e.record));
  }
}), { create: H0 } = x("table"), R0 = "NutTable", F0 = H0({
  components: {
    RenderColumn: O0,
    DownArrow: oo
  },
  props: {
    bordered: {
      type: Boolean,
      default: !0
    },
    columns: {
      type: Array,
      default: () => []
    },
    data: {
      type: Object,
      default: () => ({})
    },
    summary: {
      type: Function,
      default: null
    },
    striped: {
      type: Boolean,
      default: !1
    }
  },
  emits: ["sorter"],
  setup(e, { emit: t }) {
    const n = Se(R0), o = me({
      curData: e.data
    }), l = (y) => ({
      "nut-table__main__head__tr--border": e.bordered,
      [`nut-table__main__head__tr--align${y.align ? y.align : ""}`]: !0
    }), s = (y) => y.stylehead ? y.stylehead : "", a = (y) => y.stylecolumn ? y.stylecolumn : "", r = (y) => e.columns.filter((v) => v.key === y)[0], i = (y) => {
      const v = e.columns.filter((b) => b.key === y);
      return v[0].stylecolumn ? v[0].stylecolumn : "";
    }, p = (y) => {
      y.sorter && (t("sorter", y), o.curData = typeof y.sorter == "function" ? o.curData.sort(y.sorter) : y.sorter === "default" ? o.curData.sort() : o.curData);
    }, d = () => e.columns.map((y) => [y.key, y.render]);
    return Q(
      () => e.data,
      (y) => {
        o.curData = y.slice();
      }
    ), fe(q({}, be(o)), {
      cellClasses: l,
      getColumnItem: r,
      getColumnItemStyle: i,
      handleSorterClick: p,
      sortDataItem: d,
      translate: n,
      stylehead: s,
      stylecolumn: a
    });
  }
}), W0 = { class: "nut-table" }, Y0 = { class: "nut-table__main__head" }, j0 = { class: "nut-table__main__head__tr" }, K0 = ["onClick"], U0 = { class: "nut-table__main__body" }, X0 = { key: 1 }, q0 = {
  key: 0,
  class: "nut-table__nodata"
}, Z0 = {
  key: 0,
  class: "nut-table__nodata__text"
}, G0 = {
  key: 1,
  class: "nut-table__summary"
}, J0 = ["innerHTML"];
function Q0(e, t, n, o, l, s) {
  const a = U("DownArrow"), r = U("RenderColumn");
  return c(), f("view", W0, [
    g("view", {
      class: B(["nut-table__main", { "nut-table__main--striped": e.striped }])
    }, [
      g("view", Y0, [
        g("view", j0, [
          (c(!0), f(J, null, ie(e.columns, (i) => (c(), f("span", {
            key: i.key,
            class: B(["nut-table__main__head__tr__th", e.cellClasses(i)]),
            style: A(i.stylehead),
            onClick: (p) => e.handleSorterClick(i)
          }, [
            ge(E(i.title) + " ", 1),
            _(e.$slots, "icon"),
            !e.$slots.icon && i.sorter ? (c(), G(a, {
              key: 0,
              width: "12px",
              height: "12px"
            })) : N("", !0)
          ], 14, K0))), 128))
        ])
      ]),
      g("view", U0, [
        (c(!0), f(J, null, ie(e.curData, (i) => (c(), f("view", {
          key: i,
          class: "nut-table__main__body__tr"
        }, [
          (c(!0), f(J, null, ie(e.sortDataItem(), ([p, d]) => (c(), f("span", {
            key: p,
            class: B(["nut-table__main__body__tr__td", e.cellClasses(e.getColumnItem(p))]),
            style: A(e.getColumnItemStyle(p))
          }, [
            typeof i[p] == "function" || typeof d == "function" ? (c(), G(r, {
              key: 0,
              slots: [d, i[p]],
              record: i
            }, null, 8, ["slots", "record"])) : (c(), f("view", X0, E(i[p]), 1))
          ], 6))), 128))
        ]))), 128))
      ])
    ], 2),
    e.curData.length ? N("", !0) : (c(), f("view", q0, [
      g("div", {
        class: B(["nut-table__nodata", { "nut-table__nodata--border": e.bordered }])
      }, [
        _(e.$slots, "nodata"),
        e.$slots.nodata ? N("", !0) : (c(), f("div", Z0, E(e.translate("noData")), 1))
      ], 2)
    ])),
    e.summary ? (c(), f("view", G0, [
      g("span", {
        class: "nut-table__summary__text",
        innerHTML: e.summary().value
      }, null, 8, J0)
    ])) : N("", !0)
  ]);
}
const x0 = /* @__PURE__ */ ne(F0, [["render", Q0]]), eg = { class: "nut-animate" }, rl = /* @__PURE__ */ ye({
  name: "NutAnimate",
  __name: "animate",
  props: {
    type: {},
    show: { type: Boolean, default: !1 },
    action: { default: "" },
    loop: { type: Boolean, default: !1 },
    duration: { default: 500 }
  },
  emits: ["click", "animate"],
  setup(e, { emit: t }) {
    const n = e, o = t, l = z(n.action === "initial" || n.show === !0 || n.loop), s = T(() => ({
      "nut-animate__container": !0,
      [`nut-animate-${n.type}`]: l.value,
      loop: n.loop
    })), a = () => {
      l.value = !1, requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          l.value = !0;
        });
      });
    }, r = (i) => {
      n.action === "click" && (a(), o("click", i), o("animate"));
    };
    return Q(
      () => n.show,
      (i) => {
        i && (a(), o("animate"));
      }
    ), (i, p) => (c(), f("view", eg, [
      g("view", {
        class: B(s.value),
        style: A({
          animationDuration: i.duration ? `${i.duration}ms` : void 0
        }),
        onClick: r
      }, [
        _(i.$slots, "default")
      ], 6)
    ]));
  }
});
we(rl);
const { create: tg } = x("ellipsis"), ng = tg({
  props: {
    content: {
      type: String,
      default: ""
    },
    direction: {
      type: String,
      default: "end"
    },
    rows: {
      type: [Number, String],
      default: 1
    },
    expandText: {
      type: String,
      default: ""
    },
    collapseText: {
      type: String,
      default: ""
    },
    symbol: {
      type: String,
      default: "..."
    },
    lineHeight: {
      type: [Number, String],
      default: "20"
    }
  },
  emits: ["click", "change"],
  setup(e, { emit: t }) {
    const n = z(null);
    let o = null, l = 0;
    const s = z(), a = me({
      exceeded: !1,
      // 是否超出
      expanded: !1
      // 是否折叠
    });
    Q(
      () => e.content,
      (w, S) => {
        w != S && r();
      }
    ), $e(() => {
      r();
    });
    const r = () => {
      if (!n.value)
        return;
      const w = window.getComputedStyle(n.value);
      o = document.createElement("div"), Array.prototype.slice.apply(w).forEach((m) => {
        o.style.setProperty(m, w.getPropertyValue(m));
      }), o.style.position = "fixed", o.style.left = "999999px", o.style.top = "999999px", o.style.zIndex = "-1000", o.style.height = "auto", o.style.minHeight = "auto", o.style.maxHeight = "auto", o.style.textOverflow = "clip", o.style.whiteSpace = "normal", o.style.webkitLineClamp = "unset", o.style.display = "block";
      const u = y(w.lineHeight === "normal" ? e.lineHeight : w.lineHeight);
      l = Math.floor(
        u * (Number(e.rows) + 0.5) + y(w.paddingTop) + y(w.paddingBottom)
      ), o.innerText = e.content, document.body.appendChild(o), i();
    }, i = () => {
      if (o.offsetHeight <= l)
        a.exceeded = !1, document.body.removeChild(o);
      else {
        a.exceeded = !0;
        const w = e.content.length, S = Math.floor((0 + w) / 2), u = e.direction === "middle" ? d([0, S], [S, w]) : p(0, w);
        s.value = u, document.body.removeChild(o);
      }
    }, p = (w, S) => {
      const u = a.expanded ? e.collapseText : e.expandText, m = e.content.length;
      if (S - w <= 1)
        return e.direction === "end" ? {
          leading: e.content.slice(0, w) + e.symbol
        } : {
          tailing: e.symbol + e.content.slice(S, m)
        };
      const h = Math.round((w + S) / 2);
      return e.direction === "end" ? o.innerText = e.content.slice(0, h) + e.symbol + u : o.innerText = u + e.symbol + e.content.slice(h, m), o.offsetHeight <= l ? e.direction === "end" ? p(h, S) : p(w, h) : e.direction === "end" ? p(w, h) : p(h, S);
    }, d = (w, S) => {
      const u = a.expanded ? e.collapseText : e.expandText, m = e.content.length;
      if (w[1] - w[0] <= 1 && S[1] - S[0] <= 1)
        return {
          leading: e.content.slice(0, w[0]) + e.symbol,
          tailing: e.symbol + e.content.slice(S[1], m)
        };
      const h = Math.floor((w[0] + w[1]) / 2), $ = Math.ceil((S[0] + S[1]) / 2);
      return o.innerText = e.content.slice(0, h) + e.symbol + u + e.symbol + e.content.slice($, m), o.offsetHeight <= l ? d([h, w[1]], [S[0], $]) : d([w[0], h], [$, S[1]]);
    }, y = (w) => {
      if (!w)
        return 0;
      const S = w.match(/^\d*(\.\d*)?/);
      return S ? Number(S[0]) : 0;
    }, v = (w) => {
      w == 1 ? (a.expanded = !0, t("change", "expand")) : (a.expanded = !1, t("change", "collapse"));
    }, b = () => {
      t("click");
    };
    return fe(q({}, be(a)), { root: n, ellipsis: s, clickHandle: v, handleClick: b });
  }
}), og = { key: 0 }, lg = { key: 1 }, sg = { key: 2 };
function ag(e, t, n, o, l, s) {
  return c(), f("view", {
    ref: "root",
    class: "nut-ellipsis",
    onClick: t[2] || (t[2] = (...a) => e.handleClick && e.handleClick(...a))
  }, [
    e.exceeded ? N("", !0) : (c(), f("view", og, E(e.content), 1)),
    e.exceeded && !e.expanded ? (c(), f("view", lg, [
      ge(E(e.ellipsis && e.ellipsis.leading), 1),
      e.expandText ? (c(), f("span", {
        key: 0,
        class: "nut-ellipsis__text",
        onClick: t[0] || (t[0] = De((a) => e.clickHandle(1), ["stop"]))
      }, E(e.expandText), 1)) : N("", !0),
      ge(E(e.ellipsis && e.ellipsis.tailing), 1)
    ])) : N("", !0),
    e.exceeded && e.expanded ? (c(), f("view", sg, [
      ge(E(e.content) + " ", 1),
      e.expandText ? (c(), f("span", {
        key: 0,
        class: "nut-ellipsis__text",
        onClick: t[1] || (t[1] = De((a) => e.clickHandle(2), ["stop"]))
      }, E(e.collapseText), 1)) : N("", !0)
    ])) : N("", !0)
  ], 512);
}
const rg = /* @__PURE__ */ ne(ng, [["render", ag]]), { componentName: ig, create: ug } = x("watermark"), cg = ug({
  props: {
    name: {
      type: String,
      default: ""
    },
    gapY: {
      type: Number,
      default: 48
    },
    gapX: {
      type: Number,
      default: 24
    },
    zIndex: {
      type: Number,
      default: 2e3
    },
    width: {
      type: Number,
      default: 120
    },
    height: {
      type: Number,
      default: 64
    },
    rotate: {
      type: Number,
      default: -22
    },
    image: {
      type: String,
      default: ""
    },
    imageWidth: {
      type: Number,
      default: 120
    },
    imageHeight: {
      type: Number,
      default: 64
    },
    content: {
      type: [String, Array],
      default: ""
    },
    fontColor: {
      type: String,
      default: "rgba(0,0,0,.15)"
    },
    fontStyle: {
      type: String,
      default: "normal"
    },
    fontFamily: {
      type: String,
      default: "PingFang SC"
    },
    fontWeight: {
      type: String,
      default: "normal"
    },
    fontSize: {
      type: [String, Number],
      default: 14
    },
    fullPage: {
      type: Boolean,
      default: ""
    }
  },
  emits: ["click"],
  setup(e) {
    const t = me({
      base64Url: ""
    }), {
      zIndex: n,
      gapX: o,
      gapY: l,
      width: s,
      height: a,
      rotate: r,
      image: i,
      imageWidth: p,
      imageHeight: d,
      content: y,
      fontStyle: v,
      fontWeight: b,
      fontColor: w,
      fontSize: S,
      fontFamily: u
    } = e, m = () => {
      const $ = document.createElement("canvas"), L = window.devicePixelRatio, I = $.getContext("2d"), P = `${(o + s) * L}px`, M = `${(l + a) * L}px`, C = s * L, k = a * L;
      if ($.setAttribute("width", P), $.setAttribute("height", M), I) {
        if (i) {
          I.translate(C / 2, k / 2), I.rotate(Math.PI / 180 * Number(r));
          const D = new Image();
          D.crossOrigin = "anonymous", D.referrerPolicy = "no-referrer", D.src = i, D.onload = () => {
            I.drawImage(
              D,
              -p * L / 2,
              -d * L / 2,
              p * L,
              d * L
            ), I.restore(), t.base64Url = $.toDataURL();
          };
        } else if (y) {
          I.textBaseline = "middle", I.textAlign = "center", I.translate(C / 2, k / 2), I.rotate(Math.PI / 180 * Number(r));
          const D = Number(S) * L;
          I.font = `${v} normal ${b} ${D}px/${k}px ${u}`, I.fillStyle = w, Array.isArray(y) ? y.map((V, j) => {
            I.fillText(V, 0, (j - 1) * D);
          }) : I.fillText(y, 0, 0), I.restore(), t.base64Url = $.toDataURL();
        }
      } else
        throw new Error("当前环境不支持Canvas");
    };
    m(), Q(
      () => [
        n,
        o,
        l,
        s,
        a,
        r,
        i,
        p,
        d,
        y,
        v,
        b,
        w,
        S,
        u
      ],
      () => {
        m();
      }
    );
    const h = T(() => {
      const $ = ig;
      return {
        [$]: !0,
        [`${$}-full-page`]: e.fullPage
      };
    });
    return fe(q({}, be(t)), { classes: h });
  }
});
function dg(e, t, n, o, l, s) {
  return c(), f("view", {
    class: B(e.classes),
    style: A({
      zIndex: e.zIndex,
      backgroundSize: `${e.gapX + e.width}px`,
      backgroundImage: `url('${e.base64Url}')`
    })
  }, null, 6);
}
const fg = /* @__PURE__ */ ne(cg, [["render", dg]]), pg = { class: "nut-trend-arrow" }, il = /* @__PURE__ */ ye({
  name: "NutTrendArrow",
  __name: "trend-arrow",
  props: {
    rate: { default: 0 },
    digits: { default: 2 },
    showSign: { type: Boolean, default: !1 },
    showZero: { type: Boolean, default: !1 },
    arrowLeft: { type: Boolean, default: !1 },
    syncTextColor: { type: Boolean, default: !0 },
    textColor: { default: "#333" },
    riseColor: { default: "#fa2c19" },
    dropColor: { default: "#64b578" }
  },
  setup(e) {
    const t = e, n = T(() => t.rate > 0), o = T(() => {
      const s = Math.abs(t.rate);
      return !t.showZero && t.rate === 0 ? "--" : `${t.showSign && t.rate !== 0 ? n.value ? "+" : "-" : ""}${Dl(
        Number(s),
        t.digits
      )}%`;
    }), l = T(() => ({
      color: t.rate === 0 ? t.textColor : t.syncTextColor ? n.value ? t.riseColor : t.dropColor : t.textColor
    }));
    return (s, a) => (c(), f("view", pg, [
      s.arrowLeft ? N("", !0) : (c(), f("span", {
        key: 0,
        class: "nut-trend-arrow-icon-before nut-trend-arrow-rate",
        style: A(l.value)
      }, E(o.value), 5)),
      Number(s.rate) !== 0 && n.value ? _(s.$slots, "up-icon", { key: 1 }, () => [
        te(pe(vi), { color: s.riseColor }, null, 8, ["color"])
      ]) : N("", !0),
      Number(s.rate) !== 0 && !n.value ? _(s.$slots, "down-icon", { key: 2 }, () => [
        te(pe(fi), { color: s.dropColor }, null, 8, ["color"])
      ]) : N("", !0),
      s.arrowLeft ? (c(), f("span", {
        key: 3,
        class: "nut-trend-arrow-icon-after nut-trend-arrow-rate",
        style: A(l.value)
      }, E(o.value), 5)) : N("", !0)
    ]));
  }
});
we(il);
const { create: mg } = x("tour"), hg = mg({
  components: {
    NutPopover: nl,
    Close: zt
  },
  props: {
    modelValue: { type: Boolean, default: !1 },
    type: {
      type: String,
      default: "step"
    },
    steps: {
      type: Array,
      default: () => []
    },
    location: {
      type: String,
      default: "bottom"
    },
    current: {
      type: Number,
      default: 0
    },
    nextStepTxt: {
      type: String,
      default: "下一步"
    },
    prevStepTxt: {
      type: String,
      default: "上一步"
    },
    completeTxt: {
      type: String,
      default: "完成"
    },
    mask: {
      type: Boolean,
      default: !0
    },
    offset: {
      type: Array,
      default: [8, 10]
    },
    bgColor: {
      type: String,
      default: ""
    },
    theme: {
      type: String,
      default: "light"
    },
    maskWidth: {
      type: [Number, String],
      default: ""
    },
    maskHeight: {
      type: [Number, String],
      default: ""
    },
    closeOnClickOverlay: {
      type: Boolean,
      default: !0
    },
    showPrevStep: {
      type: Boolean,
      default: !0
    },
    showTitleBar: {
      type: Boolean,
      default: !0
    }
  },
  emits: ["update:modelValue", "change", "close"],
  setup(e, { emit: t }) {
    const n = me({
      showTour: e.modelValue,
      showPopup: !1,
      active: 0
    }), o = z({}), l = T(() => "nut-tour"), s = T(() => {
      const { offset: d, maskWidth: y, maskHeight: v } = e, { width: b, height: w, left: S, top: u } = o.value, m = [S + b / 2, u + w / 2], h = Number(y || b), $ = Number(v || w);
      return {
        width: `${h + +d[1] * 2}px`,
        height: `${$ + +d[0] * 2}px`,
        top: `${m[1] - $ / 2 - +d[0]}px`,
        left: `${m[0] - h / 2 - +d[1]}px`
      };
    }), a = (d) => {
      d == "next" ? n.active = n.active + 1 : n.active = n.active - 1, n.showPopup = !1, Ne(() => {
        n.showPopup = !0, r();
      }), t("change", n.active);
    }, r = () => {
      const d = document.querySelector(`#${e.steps[n.active].target}`), y = Ye(d);
      o.value = y;
    }, i = () => {
      n.showTour = !1, n.showPopup = !1, t("close", n.active), t("update:modelValue", !1);
    }, p = () => {
      e.closeOnClickOverlay && i();
    };
    return $e(() => {
      n.active = 0, r();
    }), Q(
      () => e.modelValue,
      (d) => {
        d && r(), n.active = 0, n.showTour = d, n.showPopup = d;
      }
    ), fe(q({}, be(n)), {
      classes: l,
      maskStyle: s,
      changeStep: a,
      close: i,
      handleClickMask: p
    });
  }
}), gg = {
  key: 0,
  class: "nut-tour-content"
}, vg = {
  key: 0,
  class: "nut-tour-content-top"
}, yg = { class: "nut-tour-content-inner" }, bg = { class: "nut-tour-content-bottom" }, $g = { class: "nut-tour-content-bottom-init" }, wg = { class: "nut-tour-content-bottom-operate" }, kg = {
  key: 1,
  class: "nut-tour-content nut-tour-content-tile"
}, Cg = { class: "nut-tour-content-inner" };
function Sg(e, t, n, o, l, s) {
  const a = U("Close"), r = U("nut-popover");
  return c(), f("div", {
    class: B(e.classes)
  }, [
    Ie(g("div", {
      class: "nut-tour-masked",
      onClick: t[0] || (t[0] = (...i) => e.handleClickMask && e.handleClickMask(...i))
    }, null, 512), [
      [Me, e.showTour]
    ]),
    (c(!0), f(J, null, ie(e.steps, (i, p) => (c(), f("div", {
      key: p,
      style: { height: "0" }
    }, [
      p == e.active ? (c(), f(J, { key: 0 }, [
        e.showTour ? (c(), f("div", {
          key: 0,
          id: "nut-tour-popid",
          class: B(["nut-tour-mask", [e.mask ? "" : "nut-tour-mask-none"]]),
          style: A(e.maskStyle)
        }, null, 6)) : N("", !0),
        te(r, {
          visible: e.showPopup,
          "onUpdate:visible": t[5] || (t[5] = (d) => e.showPopup = d),
          location: i.location || e.location,
          "target-id": "nut-tour-popid",
          "bg-color": e.bgColor,
          theme: e.theme,
          "close-on-click-outside": !1,
          offset: i.popoverOffset || [0, 12],
          "arrow-offset": i.arrowOffset || 0
        }, {
          content: oe(() => [
            _(e.$slots, "default", {}, () => [
              e.type == "step" ? (c(), f("div", gg, [
                e.showTitleBar ? (c(), f("div", vg, [
                  g("div", {
                    onClick: t[1] || (t[1] = (...d) => e.close && e.close(...d))
                  }, [
                    te(a, { class: "nut-tour-content-top-close" })
                  ])
                ])) : N("", !0),
                g("div", yg, E(i.content), 1),
                g("div", bg, [
                  g("div", $g, E(e.active + 1) + "/" + E(e.steps.length), 1),
                  g("div", wg, [
                    _(e.$slots, "prev-step", {}, () => [
                      e.active != 0 && e.showPrevStep ? (c(), f("div", {
                        key: 0,
                        class: "nut-tour-content-bottom-operate-btn",
                        onClick: t[2] || (t[2] = (d) => e.changeStep("prev"))
                      }, E(e.prevStepTxt), 1)) : N("", !0)
                    ]),
                    e.steps.length - 1 == e.active ? (c(), f("div", {
                      key: 0,
                      class: "nut-tour-content-bottom-operate-btn active",
                      onClick: t[3] || (t[3] = (...d) => e.close && e.close(...d))
                    }, E(e.completeTxt), 1)) : N("", !0),
                    _(e.$slots, "next-step", {}, () => [
                      e.steps.length - 1 != e.active ? (c(), f("div", {
                        key: 0,
                        class: "nut-tour-content-bottom-operate-btn active",
                        onClick: t[4] || (t[4] = (d) => e.changeStep("next"))
                      }, E(e.nextStepTxt), 1)) : N("", !0)
                    ])
                  ])
                ])
              ])) : N("", !0),
              e.type == "tile" ? (c(), f("div", kg, [
                g("div", Cg, E(i.content), 1)
              ])) : N("", !0)
            ])
          ]),
          _: 2
        }, 1032, ["visible", "location", "bg-color", "theme", "offset", "arrow-offset"])
      ], 64)) : N("", !0)
    ]))), 128))
  ], 2);
}
const Tg = /* @__PURE__ */ ne(hg, [["render", Sg]]), { create: Ng } = x("address"), _g = "NutAddress", Dg = Ng({
  components: {
    NutPopup: Ee,
    NutElevator: Co,
    Location: La,
    Location2: Va,
    Check: eo,
    Close: zt,
    Left: nn
  },
  inheritAttrs: !1,
  props: fe(q({}, _t), {
    modelValue: {
      type: Array,
      default: () => []
    },
    type: {
      type: String,
      default: "custom"
    },
    customAddressTitle: {
      type: String,
      default: ""
    },
    province: {
      type: Array,
      default: () => []
    },
    city: {
      type: Array,
      default: () => []
    },
    // 市
    country: {
      type: Array,
      default: () => []
    },
    // 县
    town: {
      type: Array,
      default: () => []
    },
    // 镇
    isShowCustomAddress: {
      type: Boolean,
      default: !0
    },
    existAddress: {
      type: Array,
      default: () => []
    },
    existAddressTitle: {
      type: String,
      default: ""
    },
    customAndExistTitle: {
      type: String,
      default: ""
    },
    height: {
      type: [String, Number],
      default: "200px"
    },
    columnsPlaceholder: {
      type: [String, Array],
      default: ""
    }
  }),
  emits: ["update:visible", "update:modelValue", "type", "change", "selected", "close", "closeMask", "switchModule"],
  setup(e, { emit: t }) {
    const n = Se(_g), o = z(null), l = z(null), s = z(e.visible), a = z(e.type), r = z(0), i = z(0), p = z(["province", "city", "country", "town"]), d = z(null), y = z([0, 0, 0, 0]), v = me([]), b = T(() => {
      switch (r.value) {
        case 0:
          return e.province;
        case 1:
          return e.city;
        case 2:
          return e.country;
        default:
          return e.town;
      }
    }), w = (Y) => {
      if (!Array.isArray(Y))
        throw new TypeError("params muse be array.");
      if (!Y.length)
        return [];
      Y.forEach((ee) => {
        if (!ee.title) {
          console.warn("[NutUI] <Address> 请检查数组选项的 title 值是否有设置 ,title 为必填项 .");
          return;
        }
      });
      const R = [];
      return Y = Y.sort((ee, K) => ee.title.localeCompare(K.title)), Y.forEach((ee) => {
        const K = R.findIndex((se) => se.title === ee.title);
        K <= -1 ? R.push({
          title: ee.title,
          list: [].concat(ee)
        }) : R[K].list.push(ee);
      }), R;
    };
    let S = z([]), u = me({});
    const m = z("self"), h = z(20), $ = () => {
      v[0] = e.province || [], v[1] = e.city || [], v[2] = e.country || [], v[3] = e.town || [];
      const Y = e.modelValue, R = Y.length;
      if (R > 0) {
        if (r.value = R - 1, b.value.length == 0) {
          r.value = 0;
          return;
        }
        for (let ee = 0; ee < R; ee++) {
          let K = v[ee];
          S.value[ee] = K.filter((se) => se.id == Y[ee])[0];
        }
        I();
      }
    }, L = (Y, R) => Y && Y.name || r.value < R && Y ? Y.name : e.columnsPlaceholder[R] || n("select"), I = () => {
      C(), Ne(() => {
        const Y = l.value && l.value.getElementsByClassName("active")[0];
        if (Y) {
          const R = Y.offsetLeft;
          h.value = R || 20;
        }
      });
    }, P = (Y) => {
      var K;
      const R = r.value;
      i.value = r.value;
      const ee = {
        custom: p.value[R]
      };
      S.value[R] = Y, S.value.splice(R + 1, S.value.length - (R + 1)), ee.value = Y, ((K = v[R + 1]) == null ? void 0 : K.length) > 0 ? (r.value = R + 1, I(), ee.next = p.value[r.value]) : (V(), t("update:modelValue")), t("change", ee);
    }, M = (Y, R) => {
      i.value = r.value, L(Y, R) && (r.value = R, I());
    }, C = () => {
      const Y = d.value, R = i.value, ee = y.value[r.value];
      Y != null && Y.scrollTop && (y.value[R] = Y == null ? void 0 : Y.scrollTop), Ne(() => {
        Y == null || Y.scrollTo({
          top: ee,
          behavior: "auto"
        });
      });
    }, k = (Y) => {
      const R = e.existAddress;
      let ee = {};
      R.forEach((K) => {
        K && K.selectedAddress && (ee = K), K.selectedAddress = !1;
      }), Y.selectedAddress = !0, u = Y, t("selected", ee, Y, R), V();
    }, D = () => {
      S.value = [], r.value = 0, I();
    }, V = (Y = "self") => {
      m.value = Y == "cross" ? "cross" : "self", s.value = !1;
    }, j = () => {
      m.value = "mask";
    }, X = () => {
      const Y = {
        addressIdStr: "",
        addressStr: "",
        province: S.value[0],
        city: S.value[1],
        country: S.value[2],
        town: S.value[3]
      }, R = {
        data: {},
        type: a.value
      };
      ["custom", "custom2"].includes(a.value) ? ([0, 1, 2, 3].forEach((ee) => {
        const K = S.value[ee];
        Y.addressIdStr += `${ee ? "_" : ""}${K && K.id || 0}`, Y.addressStr += K && K.name || "";
      }), R.data = Y) : R.data = u, D(), m.value == "self" ? t("close", R) : t("closeMask", { closeWay: m }), t("update:visible", !1);
    }, le = () => {
      const Y = a.value;
      a.value = Y == "exist" ? "custom" : "exist", D(), t("switchModule", { type: a.value });
    }, W = (Y, R) => {
      P(R);
    };
    return Q(
      () => e.visible,
      (Y) => {
        s.value = Y;
      }
    ), Q(
      () => s.value,
      (Y) => {
        Y && $();
      }
    ), fe(q({
      showPopup: s,
      privateType: a,
      tabIndex: r,
      tabName: p,
      selectedRegion: S,
      switchModule: le,
      closeWay: m,
      close: X,
      getTabName: L,
      nextAreaList: P,
      regionLine: o,
      tabRegion: l,
      lineDistance: h,
      changeRegionTab: M,
      selectedExist: k,
      clickOverlay: j,
      handClose: V,
      handleElevatorItem: W,
      initCustomSelected: $
    }, be(e)), {
      translate: n,
      regionList: b,
      transformData: w,
      scrollDom: d
    });
  }
}), Ig = { class: "nut-address" }, Bg = { class: "nut-address__header" }, Mg = { class: "nut-address__header__title" }, Lg = {
  key: 0,
  class: "nut-address__custom"
}, Pg = {
  ref: "tabRegion",
  class: "nut-address__region"
}, Eg = ["onClick"], Ag = {
  key: 0,
  class: "active nut-address__region-item"
}, zg = {
  key: 0,
  class: "nut-address__detail"
}, Vg = {
  ref: "scrollDom",
  class: "nut-address__detail-list"
}, Og = ["onClick"], Hg = {
  key: 1,
  class: "nut-address__elevator-group"
}, Rg = {
  key: 1,
  class: "nut-address__exist"
}, Fg = { class: "nut-address__exist-group" }, Wg = { class: "nut-address__exist-group-list" }, Yg = ["onClick"], jg = { class: "nut-address__exist-item-info" }, Kg = {
  key: 0,
  class: "nut-address__exist-item-info-name"
}, Ug = {
  key: 1,
  class: "nut-address__exist-item-info-phone"
}, Xg = { class: "nut-address__exist-item-info-bottom" }, qg = { class: "nut-address__exist-choose-btn" };
function Zg(e, t, n, o, l, s) {
  const a = U("Left"), r = U("Close"), i = U("Check"), p = U("nut-elevator"), d = U("Location2"), y = U("nut-popup");
  return c(), G(y, {
    visible: e.showPopup,
    "onUpdate:visible": t[3] || (t[3] = (v) => e.showPopup = v),
    position: "bottom",
    "lock-scroll": e.lockScroll,
    round: e.round,
    "teleport-disable": e.teleportDisable,
    teleport: e.teleport,
    "z-index": e.zIndex,
    onClose: e.close,
    onClickOverlay: e.clickOverlay,
    onOpen: t[4] || (t[4] = (v) => e.closeWay = "self")
  }, {
    default: oe(() => [
      g("view", Ig, [
        g("view", Bg, [
          g("view", {
            class: "nut-address__header-back",
            onClick: t[0] || (t[0] = (...v) => e.switchModule && e.switchModule(...v))
          }, [
            _(e.$slots, "back-icon", {}, () => [
              Ie(te(a, { size: "14px" }, null, 512), [
                [Me, e.type == "exist" && e.privateType == "custom"]
              ])
            ])
          ]),
          g("view", Mg, E(e.privateType == "custom" ? e.customAddressTitle || e.translate("selectRegion") : e.existAddressTitle || e.translate("deliveryTo")), 1),
          g("view", {
            class: "nut-address__header-close",
            onClick: t[1] || (t[1] = (v) => e.handClose("cross"))
          }, [
            _(e.$slots, "close-icon", {}, () => [
              te(r, {
                color: "#cccccc",
                size: "14px"
              })
            ])
          ])
        ]),
        ["custom", "custom2"].includes(e.privateType) ? (c(), f("view", Lg, [
          g("view", Pg, [
            (c(!0), f(J, null, ie(e.selectedRegion, (v, b) => (c(), f("view", {
              key: b,
              class: B(["nut-address__region-item", b == e.tabIndex ? "active" : ""]),
              onClick: (w) => e.changeRegionTab(v, b)
            }, [
              g("view", null, E(e.getTabName(v, b)), 1)
            ], 10, Eg))), 128)),
            e.tabIndex == e.selectedRegion.length ? (c(), f("view", Ag, [
              g("view", null, E(e.getTabName(null, e.selectedRegion.length)), 1)
            ])) : N("", !0),
            g("view", {
              ref: "regionLine",
              class: "nut-address__region-line",
              style: A({ left: e.lineDistance + "px" })
            }, null, 4)
          ], 512),
          e.privateType == "custom" ? (c(), f("view", zg, [
            g("ul", Vg, [
              (c(!0), f(J, null, ie(e.regionList, (v, b) => {
                var w, S;
                return c(), f("li", {
                  key: b,
                  class: B(["nut-address__detail-item", ((w = e.selectedRegion[e.tabIndex]) == null ? void 0 : w.id) == v.id ? "active" : ""]),
                  onClick: (u) => e.nextAreaList(v)
                }, [
                  g("div", null, [
                    ((S = e.selectedRegion[e.tabIndex]) == null ? void 0 : S.id) == v.id ? _(e.$slots, "icon", { key: 0 }, () => [
                      te(i, {
                        class: "nut-address-select-icon",
                        size: "13px"
                      })
                    ]) : N("", !0),
                    ge(" " + E(v.name), 1)
                  ])
                ], 10, Og);
              }), 128))
            ], 512)
          ])) : (c(), f("view", Hg, [
            te(p, {
              height: e.height,
              "index-list": e.transformData(e.regionList),
              onClickItem: e.handleElevatorItem
            }, null, 8, ["height", "index-list", "onClickItem"])
          ]))
        ])) : (c(), f("view", Rg, [
          g("div", Fg, [
            g("ul", Wg, [
              (c(!0), f(J, null, ie(e.existAddress, (v, b) => (c(), f("li", {
                key: b,
                class: B(["nut-address__exist-group-item", v.selectedAddress ? "active" : ""]),
                onClick: (w) => e.selectedExist(v)
              }, [
                v.selectedAddress ? N("", !0) : _(e.$slots, "unselected-icon", { key: 0 }, () => [
                  te(d, {
                    class: "nut-address-select-icon",
                    size: "13px"
                  })
                ]),
                v.selectedAddress ? _(e.$slots, "icon", { key: 1 }, () => [
                  te(i, {
                    class: "nut-address-select-icon",
                    size: "13px"
                  })
                ]) : N("", !0),
                g("div", jg, [
                  v.name ? (c(), f("div", Kg, E(v.name), 1)) : N("", !0),
                  v.phone ? (c(), f("div", Ug, E(v.phone), 1)) : N("", !0),
                  g("div", Xg, [
                    g("view", null, E(v.provinceName + v.cityName + v.countyName + v.townName + v.addressDetail), 1)
                  ])
                ])
              ], 10, Yg))), 128))
            ])
          ]),
          e.isShowCustomAddress ? (c(), f("div", {
            key: 0,
            class: "nut-address__exist-choose",
            onClick: t[2] || (t[2] = (...v) => e.switchModule && e.switchModule(...v))
          }, [
            g("div", qg, E(e.customAndExistTitle || e.translate("chooseAnotherAddress")), 1)
          ])) : N("", !0)
        ])),
        _(e.$slots, "bottom")
      ])
    ]),
    _: 3
  }, 8, ["visible", "lock-scroll", "round", "teleport-disable", "teleport", "z-index", "onClose", "onClickOverlay"]);
}
const Gg = /* @__PURE__ */ ne(Dg, [["render", Zg]]), { create: Jg } = x("barrage"), Qg = Jg({
  name: "barrage",
  props: {
    danmu: {
      type: Array,
      default: () => []
    },
    frequency: {
      type: Number,
      default: 500
    },
    speeds: {
      type: Number,
      default: 5e3
    },
    rows: {
      type: Number,
      default: 3
    },
    top: {
      type: Number,
      default: 10
    },
    loop: {
      type: Boolean,
      default: !0
    }
  },
  setup(e) {
    const t = (/* @__PURE__ */ new Date()).getTime(), n = !!st().default;
    let o = z(document.createElement("div")), l = z(document.createElement("div")), s = null;
    const a = z(e.danmu), r = z(e.rows), i = z(e.top), p = z(0), d = e.speeds, y = z(0);
    $e(() => {
      v(), n && document.addEventListener("visibilitychange", function() {
        document.visibilityState === "hidden" ? (w(), p.value = 0, b("hidden")) : document.visibilityState === "visible" && v();
      });
    }), Ue(() => {
      a.value = [], w();
    });
    const v = () => {
      y.value = o.value.offsetWidth, n && b("init"), setTimeout(() => {
        var h;
        (h = o.value) == null || h.style.setProperty("--move-distance", `-${y.value}px`), u();
      }, 300);
    }, b = (h) => {
      var P;
      const $ = document.getElementsByClassName("slotBody" + t);
      let L = ((P = $ == null ? void 0 : $[0]) == null ? void 0 : P.children) || [];
      const I = [];
      L && Array.from(L).forEach((M) => {
        h == "init" ? (M.style.opacity = "0", I.push(M)) : (M.classList = "", M.style = {});
      }), h == "init" && (a.value = I);
    }, w = () => {
      s && (clearTimeout(s), s = null);
    };
    Q(
      () => e.danmu,
      (h) => {
        e.danmu.length > 0 && (a.value = [...h]);
      }
    );
    const S = (h) => {
      const $ = p.value % a.value.length;
      !e.loop && p.value === a.value.length ? a.value.splice(a.value.length, 0, h) : a.value.splice($, 0, h);
    }, u = () => {
      w(), s = setTimeout(() => {
        m();
      }, e.frequency);
    }, m = () => {
      var L;
      const h = e.loop ? p.value % a.value.length : p.value;
      let $ = document.createElement("view");
      n && typeof a.value[h] == "object" ? ($ = a.value[h], (L = $ == null ? void 0 : $.classList) == null || L.add("nut-barrage__item")) : ($.innerHTML = a.value[h], $.classList.add("nut-barrage__item"), l.value.appendChild($)), Ne(() => {
        var P;
        const I = $.offsetHeight;
        if ((P = $ == null ? void 0 : $.classList) == null || P.add("move"), $.style.animationDuration = `${d}ms`, $.style.top = h % r.value * (I + i.value) + 20 + "px", $.style.opacity = "1", !n) {
          const M = $.offsetWidth;
          $.style.width = M + 20 + "px";
        }
        $.addEventListener("animationend", () => {
          n ? $.classList.remove("move") : l.value.removeChild($);
        }), !(!e.loop && p.value >= a.value.length - 1) && (p.value++, p.value >= a.value.length && (p.value = 0), $.removeEventListener("animationend", () => {
        }), u());
      });
    };
    return { classTime: t, danmuList: a, dmBody: o, dmContainer: l, add: S };
  }
}), xg = {
  ref: "dmBody",
  class: "nut-barrage"
};
function ev(e, t, n, o, l, s) {
  return c(), f("div", xg, [
    g("div", {
      ref: "dmContainer",
      class: B(["dmContainer", e.$slots.default && "slotContainer"])
    }, [
      e.$slots.default ? (c(), f("div", {
        key: 0,
        class: B(["slotBody", "slotBody" + e.classTime])
      }, [
        _(e.$slots, "default")
      ], 2)) : N("", !0)
    ], 2)
  ], 512);
}
const tv = /* @__PURE__ */ ne(Qg, [["render", ev]]), { create: nv } = x("signature"), ov = "NutSignature", lv = nv({
  props: {
    customClass: {
      type: String,
      default: ""
    },
    lineWidth: {
      type: Number,
      default: 2
    },
    strokeStyle: {
      type: String,
      default: () => document.getElementsByTagName("body")[0].className.indexOf("nut-theme-dark") == -1 ? "#000" : "#fff"
    },
    type: {
      type: String,
      default: "png"
    },
    unSupportTpl: {
      type: String,
      default: ""
    }
  },
  components: {
    NutButton: qe
  },
  emits: ["start", "end", "signing", "confirm", "clear"],
  setup(e, { emit: t }) {
    const n = Se(ov), o = z(null), l = z(null), s = T(() => ({
      ["nut-signature"]: !0,
      [`${e.customClass}`]: e.customClass
    })), a = me({
      canvasHeight: 0,
      canvasWidth: 0,
      ctx: null,
      isSupportTouch: "ontouchstart" in window,
      events: "ontouchstart" in window ? ["touchstart", "touchmove", "touchend", "touchleave"] : ["mousedown", "mousemove", "mouseup", "mouseleave"]
    }), r = () => {
      let m = document.createElement("canvas");
      return !!(m.getContext && m.getContext("2d"));
    }, i = () => {
      o.value.addEventListener(a.events[0], p, !1);
    }, p = (m) => {
      m.preventDefault(), a.ctx.beginPath(), a.ctx.lineWidth = e.lineWidth, a.ctx.strokeStyle = e.strokeStyle, t("start"), o.value.addEventListener(a.events[1], d, !1), o.value.addEventListener(a.events[2], y, !1), o.value.addEventListener(a.events[3], v, !1);
    }, d = (m) => {
      m.preventDefault();
      let h = a.isSupportTouch ? m.touches[0] : m;
      t("signing", h);
      let $ = o.value.getBoundingClientRect(), L = h.clientX - $.left, I = h.clientY - $.top;
      a.ctx.lineTo(L, I), a.ctx.stroke();
    }, y = (m) => {
      m.preventDefault(), t("end"), o.value.removeEventListener(a.events[1], d, !1), o.value.removeEventListener(a.events[2], y, !1);
    }, v = (m) => {
      m.preventDefault(), o.value.removeEventListener(a.events[1], d, !1), o.value.removeEventListener(a.events[2], y, !1);
    }, b = () => {
      o.value.addEventListener(a.events[2], y, !1), a.ctx.clearRect(0, 0, a.canvasWidth, a.canvasHeight), a.ctx.closePath(), t("clear");
    }, w = () => {
      u(o.value);
    }, S = (m) => {
      if (!m)
        return !0;
      var h = document.createElement("canvas");
      return h.width = m.width, h.height = m.height, (m == null ? void 0 : m.toDataURL()) == h.toDataURL();
    }, u = (m) => {
      let h;
      switch (e.type) {
        case "png":
          h = m.toDataURL("image/png");
          break;
        case "jpg":
          h = m.toDataURL("image/jpeg", 0.8);
          break;
      }
      const $ = S(m) ? "请绘制签名" : m, L = S(m) ? "" : h;
      t("confirm", $, L);
    };
    return $e(() => {
      r() && (a.ctx = o.value.getContext("2d"), a.canvasWidth = l.value.offsetWidth, a.canvasHeight = l.value.offsetHeight, i());
    }), fe(q({}, be(a)), { canvas: o, wrap: l, isCanvasSupported: r, confirm: w, clear: b, classes: s, translate: n });
  }
}), sv = {
  ref: "wrap",
  class: "nut-signature-inner"
}, av = ["height", "width"], rv = {
  key: 0,
  class: "nut-signature-unsopport"
};
function iv(e, t, n, o, l, s) {
  const a = U("nut-button");
  return c(), f("div", {
    class: B(e.classes)
  }, [
    g("div", sv, [
      Ie(g("canvas", {
        ref: "canvas",
        height: e.canvasHeight,
        width: e.canvasWidth
      }, null, 8, av), [
        [Me, e.isCanvasSupported()]
      ]),
      e.isCanvasSupported() ? N("", !0) : (c(), f("p", rv, E(e.unSupportTpl || e.translate("unSupportTpl")), 1))
    ], 512),
    te(a, {
      class: "nut-signature-btn",
      type: "default",
      onClick: t[0] || (t[0] = (r) => e.clear())
    }, {
      default: oe(() => [
        ge(E(e.translate("reSign")), 1)
      ]),
      _: 1
    }),
    te(a, {
      class: "nut-signature-btn",
      type: "primary",
      onClick: t[1] || (t[1] = (r) => e.confirm())
    }, {
      default: oe(() => [
        ge(E(e.translate("confirm")), 1)
      ]),
      _: 1
    })
  ], 2);
}
const uv = /* @__PURE__ */ ne(lv, [["render", iv]]), { create: cv } = x("time-select"), dv = "NutTimeSelect", fv = cv({
  components: {
    NutPopup: Ee
  },
  props: {
    visible: {
      type: Boolean,
      defalut: !1
    },
    height: {
      type: [String],
      default: "20%"
    },
    title: {
      type: String,
      default: ""
    },
    currentKey: {
      type: [Number, String],
      default: 0
    },
    currentTime: {
      type: Array,
      default: () => []
    },
    lockScroll: {
      type: [Boolean],
      default: !0
    },
    teleportDisable: {
      type: Boolean,
      default: !1
    }
  },
  emits: ["update:visible", "select"],
  setup: (e, { emit: t }) => {
    const n = Se(dv), o = T(() => ({
      width: "100%",
      height: e.height
    })), l = T(() => e.currentKey), s = T(() => e.currentTime), a = () => {
      t("update:visible", !1), t("select", s.value);
    };
    return Oe("currentKey", l), Oe("currentTime", s), {
      popStyle: o,
      close: a,
      translate: n
    };
  }
}), pv = { class: "nut-time-select" }, mv = { class: "nut-time-select__title" }, hv = { class: "nut-time-select__title__fixed" }, gv = { key: 0 }, vv = { class: "nut-time-select__content" }, yv = { class: "nut-time-select__content__pannel" }, bv = { class: "nut-time-select__content__detail" };
function $v(e, t, n, o, l, s) {
  const a = U("nut-popup");
  return c(), G(a, {
    position: "bottom",
    closeable: "",
    round: "",
    "teleport-disable": e.teleportDisable,
    visible: e.visible,
    style: A(e.popStyle),
    "lock-scroll": e.lockScroll,
    onClickOverlay: e.close,
    onClickCloseIcon: e.close
  }, {
    default: oe(() => [
      g("view", pv, [
        g("view", mv, [
          g("view", hv, [
            e.$slots.title ? _(e.$slots, "title", { key: 1 }) : (c(), f("span", gv, E(e.title || e.translate("pickupTime")), 1))
          ])
        ]),
        g("view", vv, [
          g("view", yv, [
            _(e.$slots, "pannel")
          ]),
          g("view", bv, [
            _(e.$slots, "detail")
          ])
        ])
      ])
    ]),
    _: 3
  }, 8, ["teleport-disable", "visible", "style", "lock-scroll", "onClickOverlay", "onClickCloseIcon"]);
}
const wv = /* @__PURE__ */ ne(fv, [["render", $v]]), { componentName: kv, create: Cv } = x("time-pannel"), Sv = Cv({
  name: "timepannel",
  props: {
    name: {
      type: String,
      default: ""
    },
    pannelKey: {
      type: [Number, String],
      default: 0
    }
  },
  emits: ["change"],
  setup: (e, { emit: t }) => {
    const n = Ae("currentKey"), o = me({
      currentKey: n
    }), l = T(() => ({
      [kv]: !0,
      "nut-time-pannel--curr": o.currentKey == e.pannelKey
    })), s = (a) => {
      t("change", a);
    };
    return fe(q({}, be(o)), {
      classes: l,
      handlePannel: s
    });
  }
});
function Tv(e, t, n, o, l, s) {
  return c(), f("view", {
    class: B(e.classes),
    onClick: t[0] || (t[0] = (a) => e.handlePannel(e.pannelKey))
  }, E(e.name), 3);
}
const Nv = /* @__PURE__ */ ne(Sv, [["render", Tv]]), { create: _v } = x("time-detail"), Dv = _v({
  name: "timedetail",
  props: {
    times: {
      type: Array,
      default: () => []
    }
  },
  emits: ["select"],
  setup: (e, { emit: t }) => {
    const n = Ae("currentKey"), o = Ae("currentTime"), l = me({
      currentKey: n,
      currentTime: o
    }), s = (i) => {
      let p = l.currentTime.find((d) => d.key == l.currentKey);
      if (p)
        return {
          "nut-time-detail__detail__list__item": !0,
          "nut-time-detail__detail__list__item--curr": p.list.filter((d) => d === i).length > 0
        };
    }, a = T(() => e.times.find((i) => i.key == l.currentKey).list), r = (i) => {
      t("select", i);
    };
    return fe(q({}, be(l)), {
      getClass: s,
      renderData: a,
      handleTime: r
    });
  }
}), Iv = { class: "nut-time-detail" }, Bv = { class: "nut-time-detail__detail nut-time-detail__detail--moring" }, Mv = { class: "nut-time-detail__detail__list" }, Lv = ["onClick"];
function Pv(e, t, n, o, l, s) {
  return c(), f("view", Iv, [
    g("view", Bv, [
      g("view", Mv, [
        (c(!0), f(J, null, ie(e.renderData, (a) => (c(), f("view", {
          key: a,
          class: B(e.getClass(a)),
          onClick: (r) => e.handleTime(a)
        }, E(a), 11, Lv))), 128))
      ])
    ])
  ]);
}
const Ev = /* @__PURE__ */ ne(Dv, [["render", Pv]]), { create: Av } = x("sku-header"), zv = "NutSkuHeader", Vv = Av({
  props: {
    goods: {
      type: Object,
      default: {}
    }
  },
  components: {
    NutPrice: Rt
  },
  setup(e, { slots: t }) {
    const n = Se(zv);
    return {
      getSlots: (l) => t[l],
      translate: n
    };
  }
}), Ov = { class: "nut-sku-header" }, Hv = ["src"], Rv = { class: "nut-sku-header-right" }, Fv = {
  key: 3,
  class: "nut-sku-header-right-extra"
};
function Wv(e, t, n, o, l, s) {
  const a = U("nut-price");
  return c(), f("view", Ov, [
    g("img", {
      class: "nut-sku-header-img",
      src: e.goods.imagePath
    }, null, 8, Hv),
    g("view", Rv, [
      e.getSlots("sku-header-price") ? _(e.$slots, "sku-header-price", { key: 0 }) : (c(), G(a, {
        key: 1,
        price: e.goods.price,
        "need-symbol": !0,
        thousands: !1
      }, null, 8, ["price"])),
      e.getSlots("sku-header-extra") ? _(e.$slots, "sku-header-extra", { key: 2 }) : N("", !0),
      e.goods.skuId && !e.getSlots("sku-header-extra") ? (c(), f("view", Fv, E(e.translate("skuId")) + " : " + E(e.goods.skuId), 1)) : N("", !0)
    ])
  ]);
}
const Yv = /* @__PURE__ */ ne(Vv, [["render", Wv]]), { create: jv } = x("sku-select"), Kv = jv({
  props: {
    sku: {
      type: Array,
      default: () => []
    }
  },
  emits: ["selectSku"],
  setup(e, { emit: t }) {
    const n = z([]);
    return Q(
      () => e.sku,
      (l) => {
        n.value = [].slice.call(l);
      },
      { deep: !0 }
    ), $e(() => {
      e.sku.length > 0 && (n.value = [].slice.call(e.sku));
    }), {
      skuInfo: n,
      changeSaleChild: (l, s, a, r) => {
        l.checkFlag || l.disable || t("selectSku", {
          sku: l,
          skuIndex: s,
          parentSku: a,
          parentIndex: r
        });
      }
    };
  }
}), Uv = { class: "nut-sku-select" }, Xv = { class: "nut-sku-select-item-title" }, qv = { class: "nut-sku-select-item-skus" }, Zv = ["onClick"];
function Gv(e, t, n, o, l, s) {
  return c(), f("view", Uv, [
    (c(!0), f(J, null, ie(e.skuInfo, (a, r) => (c(), f("view", {
      key: a.id,
      class: "nut-sku-select-item"
    }, [
      g("view", Xv, E(a.name), 1),
      g("view", qv, [
        (c(!0), f(J, null, ie(a.list, (i, p) => (c(), f("view", {
          key: i.name,
          class: B(["nut-sku-select-item-skus-sku", [{ active: !i.disable && i.active }, { disable: i.disable }]]),
          onClick: (d) => e.changeSaleChild(i, p, a, r)
        }, E(i.name), 11, Zv))), 128))
      ])
    ]))), 128))
  ]);
}
const Jv = /* @__PURE__ */ ne(Kv, [["render", Gv]]), { create: Qv } = x("sku-stepper"), xv = Qv({
  props: {
    // 购买数量最大值
    stepperMax: {
      type: [Number, String],
      default: 99999
    },
    stepperMin: {
      type: [Number, String],
      default: 1
    },
    // stepper 前文案提示
    stepperExtraText: {
      type: [Function, Boolean],
      default: !1
    },
    // 数量选择左侧文案
    stepperTitle: {
      type: String,
      default: "购买数量"
    }
  },
  emits: ["click", "changeSku", "changeStepper", "clickBtnOptions", "overLimit", "reduce", "add"],
  components: {
    NutInputNumber: Vt
  },
  setup(e, { emit: t }) {
    const n = z(e.stepperMin);
    return $e(() => {
      n.value = e.stepperMin;
    }), {
      goodsCount: n,
      add: (i) => {
        t("add", i);
      },
      reduce: (i) => {
        t("reduce", i);
      },
      overlimit: (i, p) => {
        t("overLimit", {
          action: p,
          value: parseInt(n.value + "")
        });
      },
      getExtraText: () => {
        const { stepperExtraText: i } = e;
        if (i)
          return i === !0 ? "" : i == null ? void 0 : i();
      },
      changeStepper: (i) => {
        n.value = i, t("changeStepper", i);
      }
    };
  }
}), ey = { class: "nut-sku-stepper" }, ty = { class: "nut-sku-stepper-title" }, ny = ["innerHTML"], oy = { class: "nut-sku-stepper-count" };
function ly(e, t, n, o, l, s) {
  const a = U("nut-input-number");
  return c(), f("view", ey, [
    g("view", ty, E(e.stepperTitle), 1),
    g("view", {
      class: "nut-sku-stepper-limit",
      innerHTML: e.getExtraText()
    }, null, 8, ny),
    g("view", oy, [
      te(a, {
        modelValue: e.goodsCount,
        "onUpdate:modelValue": t[0] || (t[0] = (r) => e.goodsCount = r),
        min: e.stepperMin,
        max: e.stepperMax,
        onAdd: e.add,
        onReduce: e.reduce,
        onOverlimit: e.overlimit,
        onChange: e.changeStepper
      }, null, 8, ["modelValue", "min", "max", "onAdd", "onReduce", "onOverlimit", "onChange"])
    ])
  ]);
}
const sy = /* @__PURE__ */ ne(xv, [["render", ly]]), { create: ay } = x("sku-operate"), ry = ay({
  props: {
    // 底部按钮配置  confirm cart  buy
    btnOptions: {
      type: Array,
      default: () => ["confirm"]
    },
    btnExtraText: {
      type: String,
      default: ""
    },
    // 立即购买文案
    buyText: {
      type: String,
      default: "立即购买"
    },
    // 加入购物车文案
    addCartText: {
      type: String,
      default: "加入购物车"
    },
    confirmText: {
      type: String,
      default: "确定"
    }
  },
  emits: ["click", "changeSku", "changeBuyCount", "clickBtnOperate"],
  setup(e, { emit: t, slots: n }) {
    return {
      getBtnDesc: (a) => ({
        confirm: e.confirmText,
        cart: e.addCartText,
        buy: e.buyText
      })[a],
      clickBtnOperate: (a) => {
        t("clickBtnOperate", a);
      },
      getSlots: (a) => n[a]
    };
  }
}), iy = {
  key: 0,
  class: "nut-sku-operate"
}, uy = {
  key: 0,
  class: "nut-sku-operate-desc"
}, cy = {
  key: 1,
  class: "nut-sku-operate-btn"
}, dy = ["onClick"];
function fy(e, t, n, o, l, s) {
  return e.btnOptions.length > 0 ? (c(), f("view", iy, [
    e.btnExtraText ? (c(), f("view", uy, E(e.btnExtraText), 1)) : N("", !0),
    _(e.$slots, "operate-btn"),
    e.getSlots("operate-btn") ? N("", !0) : (c(), f("view", cy, [
      (c(!0), f(J, null, ie(e.btnOptions, (a, r) => (c(), f("view", {
        key: r,
        class: B([`nut-sku-operate-btn-${a}`, "nut-sku-operate-btn-item"]),
        onClick: (i) => e.clickBtnOperate(a)
      }, E(e.getBtnDesc(a)), 11, dy))), 128))
    ]))
  ])) : N("", !0);
}
const py = /* @__PURE__ */ ne(ry, [["render", fy]]), { create: my } = x("sku"), hy = "NutSku", gy = my({
  props: {
    visible: {
      type: Boolean,
      default: !1
    },
    sku: {
      type: Array,
      default: []
    },
    goods: {
      type: Object,
      default: {}
    },
    // stepper 最大值
    stepperMax: {
      type: [Number, String],
      default: 99999
    },
    // stepper 最小值
    stepperMin: {
      type: [Number, String],
      default: 1
    },
    // 底部按钮配置  confirm cart  buy
    btnOptions: {
      type: Array,
      default: () => ["confirm"]
    },
    // 数量选择左侧文案
    stepperTitle: {
      type: String,
      default: ""
    },
    // stepper 前面文案
    stepperExtraText: {
      type: [Function, Boolean],
      default: !1
    },
    btnExtraText: {
      type: String,
      default: ""
    },
    // 立即购买文案
    buyText: {
      type: String,
      default: ""
    },
    // 加入购物车文案
    addCartText: {
      type: String,
      default: ""
    },
    // 确定文案
    confirmText: {
      type: String,
      default: ""
    },
    lockScroll: {
      type: Boolean,
      default: !0
    }
  },
  emits: [
    "update:visible",
    "selectSku",
    "changeStepper",
    "clickBtnOperate",
    "clickCloseIcon",
    "clickOverlay",
    "close",
    "reduce",
    "add",
    "overLimit"
  ],
  components: {
    SkuHeader: Yv,
    SkuSelect: Jv,
    SkuStepper: sy,
    SkuOperate: py,
    NutPopup: Ee
  },
  setup(e, { emit: t, slots: n }) {
    const o = Se(hy), l = z(e.visible), s = z(e.stepperMin);
    Q(
      () => e.visible,
      (S) => {
        l.value = S;
      }
    ), Q(
      () => l.value,
      (S) => {
        S == !1 && w();
      }
    );
    const a = (S) => n[S], r = (S) => {
      t("selectSku", S);
    }, i = (S) => {
      s.value = S, t("changeStepper", S);
    }, p = (S) => {
      t("add", S);
    }, d = (S) => {
      t("reduce", S);
    }, y = (S) => {
      t("overLimit", S);
    }, v = (S) => {
      t("clickBtnOperate", {
        type: S,
        value: s.value
      });
    }, b = (S) => {
      S == "icon" && t("clickCloseIcon"), S == "overlay" && t("clickOverlay"), S == "close" && t("close"), l.value = !1;
    }, w = () => {
      t("update:visible", !1);
    };
    return {
      showPopup: l,
      closePopup: b,
      selectSku: r,
      changeStepper: i,
      stepperOverLimit: y,
      clickBtnOperate: v,
      add: p,
      reduce: d,
      getSlots: a,
      translate: o
    };
  }
}), vy = { class: "nut-sku" }, yy = { class: "nut-sku-content" };
function by(e, t, n, o, l, s) {
  const a = U("sku-header"), r = U("SkuSelect"), i = U("sku-stepper"), p = U("sku-operate"), d = U("nut-popup");
  return c(), G(d, {
    visible: e.showPopup,
    "onUpdate:visible": t[0] || (t[0] = (y) => e.showPopup = y),
    position: "bottom",
    closeable: "",
    round: "",
    style: { height: "75%" },
    "lock-scroll": e.lockScroll,
    "catch-move": e.lockScroll,
    onClickCloseIcon: t[1] || (t[1] = (y) => e.closePopup("icon")),
    onClickOverlay: t[2] || (t[2] = (y) => e.closePopup("overlay")),
    onClose: t[3] || (t[3] = (y) => e.closePopup("close"))
  }, {
    default: oe(() => [
      g("view", vy, [
        _(e.$slots, "sku-header"),
        e.getSlots("sku-header") ? N("", !0) : (c(), G(a, {
          key: 0,
          goods: e.goods
        }, wt({ _: 2 }, [
          e.getSlots("sku-header-price") ? {
            name: "sku-header-price",
            fn: oe(() => [
              _(e.$slots, "sku-header-price")
            ]),
            key: "0"
          } : void 0,
          e.getSlots("sku-header-extra") ? {
            name: "sku-header-extra",
            fn: oe(() => [
              _(e.$slots, "sku-header-extra")
            ]),
            key: "1"
          } : void 0
        ]), 1032, ["goods"])),
        g("view", yy, [
          _(e.$slots, "sku-select-top"),
          _(e.$slots, "sku-select"),
          e.getSlots("sku-select") ? N("", !0) : (c(), G(r, {
            key: 0,
            sku: e.sku,
            onSelectSku: e.selectSku
          }, null, 8, ["sku", "onSelectSku"])),
          _(e.$slots, "sku-stepper"),
          e.getSlots("sku-stepper") ? N("", !0) : (c(), G(i, {
            key: 1,
            goods: e.goods,
            "stepper-title": e.stepperTitle || e.translate("buyNumber"),
            "stepper-max": e.stepperMax,
            "stepper-min": e.stepperMin,
            "stepper-extra-text": e.stepperExtraText,
            onAdd: e.add,
            onReduce: e.reduce,
            onChangeStepper: e.changeStepper,
            onOverLimit: e.stepperOverLimit
          }, null, 8, ["goods", "stepper-title", "stepper-max", "stepper-min", "stepper-extra-text", "onAdd", "onReduce", "onChangeStepper", "onOverLimit"])),
          _(e.$slots, "sku-stepper-bottom")
        ]),
        te(p, {
          "btn-extra-text": e.btnExtraText,
          "btn-options": e.btnOptions,
          "buy-text": e.buyText || e.translate("buyNow"),
          "add-cart-text": e.addCartText || e.translate("addToCart"),
          "confirm-text": e.confirmText || e.translate("confirm"),
          onClickBtnOperate: e.clickBtnOperate
        }, wt({ _: 2 }, [
          e.getSlots("sku-operate") ? {
            name: "operate-btn",
            fn: oe(() => [
              _(e.$slots, "sku-operate")
            ]),
            key: "0"
          } : void 0
        ]), 1032, ["btn-extra-text", "btn-options", "buy-text", "add-cart-text", "confirm-text", "onClickBtnOperate"])
      ])
    ]),
    _: 3
  }, 8, ["visible", "lock-scroll", "catch-move"]);
}
const $y = /* @__PURE__ */ ne(gy, [["render", by]]), { create: wy } = x("card"), ky = wy({
  components: {
    NutPrice: Rt,
    NutTag: kn
  },
  props: {
    imgUrl: {
      type: String,
      default: ""
    },
    title: {
      type: String,
      default: ""
    },
    price: {
      type: String,
      default: ""
    },
    vipPrice: {
      type: String,
      default: ""
    },
    shopDesc: {
      type: String,
      default: ""
    },
    delivery: {
      type: String,
      default: ""
    },
    shopName: {
      type: String,
      default: ""
    },
    isNeedPrice: {
      type: Boolean,
      default: !0
    }
  }
}), Cy = { class: "nut-card" }, Sy = { class: "nut-card__left" }, Ty = ["src"], Ny = { class: "nut-card__right" }, _y = { class: "nut-card__right__title" }, Dy = {
  key: 0,
  class: "nut-card__right__price"
}, Iy = { class: "nut-card__right__other" }, By = { class: "nut-card__right__shop" }, My = { class: "nut-card__right__shop__name" };
function Ly(e, t, n, o, l, s) {
  const a = U("nut-price"), r = U("nut-tag");
  return c(), f("div", Cy, [
    g("div", Sy, [
      g("img", {
        src: e.imgUrl,
        alt: ""
      }, null, 8, Ty)
    ]),
    g("div", Ny, [
      g("div", _y, E(e.title), 1),
      _(e.$slots, "prolist"),
      e.isNeedPrice ? (c(), f("div", Dy, [
        _(e.$slots, "price", {}, () => [
          te(a, { price: e.price }, null, 8, ["price"])
        ]),
        _(e.$slots, "origin", {}, () => [
          te(a, {
            class: "nut-card__right__price__origin",
            price: e.vipPrice
          }, null, 8, ["price"])
        ])
      ])) : N("", !0),
      g("div", Iy, [
        _(e.$slots, "shop-tag", {}, () => [
          te(r, { type: "danger" }, {
            default: oe(() => [
              ge(E(e.shopDesc), 1)
            ]),
            _: 1
          }),
          te(r, { plain: "" }, {
            default: oe(() => [
              ge(E(e.delivery), 1)
            ]),
            _: 1
          })
        ])
      ]),
      g("div", By, [
        g("div", My, E(e.shopName), 1),
        _(e.$slots, "footer")
      ])
    ])
  ]);
}
const Py = /* @__PURE__ */ ne(ky, [["render", Ly]]), { create: Ey } = x("ecard"), Ay = "NutEcard", zy = Ey({
  components: {
    NutInputNumber: Vt
  },
  props: {
    chooseText: {
      type: String,
      default: ""
    },
    otherValueText: {
      type: String,
      default: ""
    },
    dataList: {
      type: Array,
      default: () => []
    },
    cardAmountMin: {
      type: Number,
      default: 1
    },
    cardAmountMax: {
      type: Number,
      default: 9999
    },
    cardBuyMin: {
      type: Number,
      default: 1
    },
    cardBuyMax: {
      type: Number,
      default: 9999
    },
    modelValue: {
      type: [Number, String],
      default: 0
    },
    placeholder: {
      type: String,
      default: ""
    },
    suffix: {
      type: String,
      default: "¥"
    }
  },
  emits: ["inputChange", "changeStep", "inputClick", "change", "update:modelValue"],
  setup(e, { emit: t }) {
    const n = Se(Ay), o = z(null), l = z(null), s = z(""), a = z(e.cardAmountMin), r = z(e.modelValue), i = (v, b) => {
      o.value = b, a.value = e.cardAmountMin, l.value = v.price, t("change", v), t("update:modelValue", v.price);
    }, p = (v) => {
      let w = v.target.value.replace(/[^\d]/g, "");
      s.value = w, l.value = w, Number(w) > e.cardAmountMax && (s.value = e.cardAmountMax, l.value = e.cardAmountMax), Number(w) < e.cardAmountMin && (s.value = e.cardAmountMin, l.value = e.cardAmountMin), t("inputChange", Number(s.value)), t("update:modelValue", Number(s.value));
    }, d = () => {
      o.value = "input", a.value = e.cardAmountMin, l.value = s.value, t("update:modelValue", s.value), t("inputClick");
    }, y = (v) => {
      a.value = v, t("changeStep", a.value, l.value);
    };
    return Q(
      () => e.modelValue,
      (v) => {
        r.value = v;
      }
    ), {
      handleClick: i,
      changeStep: y,
      change: p,
      inputClick: d,
      stepValue: a,
      currentIndex: o,
      inputValue: s,
      money: r,
      translate: n
    };
  }
}), Vy = { class: "nut-ecard" }, Oy = { class: "nut-ecard__title" }, Hy = { class: "nut-ecard__list" }, Ry = ["onClick"], Fy = { class: "nut-ecard__list__input--con" }, Wy = ["placeholder"], Yy = { class: "nut-ecard__list__step" };
function jy(e, t, n, o, l, s) {
  const a = U("nut-input-number");
  return c(), f("view", Vy, [
    g("view", Oy, E(e.chooseText || e.translate("chooseText")), 1),
    g("view", Hy, [
      (c(!0), f(J, null, ie(e.dataList, (r, i) => (c(), f("view", {
        key: i,
        class: B(["nut-ecard__list__item", e.currentIndex == i ? "active" : ""]),
        onClick: (p) => e.handleClick(r, i)
      }, E(r.price), 11, Ry))), 128)),
      g("view", {
        class: B(["nut-ecard__list__input", e.currentIndex == "input" ? "active" : ""]),
        onClick: t[2] || (t[2] = (...r) => e.inputClick && e.inputClick(...r))
      }, [
        g("view", null, E(e.otherValueText || e.translate("otherValueText")), 1),
        g("view", Fy, [
          Ie(g("input", {
            "onUpdate:modelValue": t[0] || (t[0] = (r) => e.inputValue = r),
            class: "nut-ecard__list__input--input",
            type: "text",
            placeholder: e.placeholder || e.translate("placeholder"),
            onInput: t[1] || (t[1] = (...r) => e.change && e.change(...r))
          }, null, 40, Wy), [
            [wl, e.inputValue]
          ]),
          ge(" " + E(e.suffix), 1)
        ])
      ], 2),
      g("view", Yy, [
        g("view", null, E(e.suffix) + E(e.money), 1),
        te(a, {
          modelValue: e.stepValue,
          "onUpdate:modelValue": t[3] || (t[3] = (r) => e.stepValue = r),
          min: e.cardBuyMin,
          max: e.cardBuyMax,
          onChange: e.changeStep
        }, null, 8, ["modelValue", "min", "max", "onChange"])
      ])
    ])
  ]);
}
const Ky = /* @__PURE__ */ ne(zy, [["render", jy]]), { create: Uy } = x("address-list-item"), Xy = "NutAddressList", qy = Uy({
  components: { Del: no, Edit: Hs },
  props: {
    item: {
      type: Object,
      default: {}
    }
  },
  emits: ["delIcon", "editIcon", "clickItem"],
  setup(e, { emit: t }) {
    const n = Se(Xy);
    return {
      delClick: (a) => {
        t("delIcon", a, e.item), a.stopPropagation();
      },
      editClick: (a) => {
        t("editIcon", a, e.item), a.stopPropagation();
      },
      contentsClick: (a) => {
        t("clickItem", a, e.item), a.stopPropagation();
      },
      translate: n
    };
  }
}), Zy = { class: "nut-address-list-item__info" }, Gy = { class: "nut-address-list-item__info-contact" }, Jy = { class: "nut-address-list-item__info-contact-name" }, Qy = { class: "nut-address-list-item__info-contact-tel" }, xy = {
  key: 0,
  class: "nut-address-list-item__info-contact-default"
}, e2 = { class: "nut-address-list-item__info-handle" }, t2 = { class: "nut-address-list-item__addr" };
function n2(e, t, n, o, l, s) {
  const a = U("Del"), r = U("Edit");
  return c(), f("div", {
    class: "nut-address-list-item",
    onClick: t[0] || (t[0] = (...i) => e.contentsClick && e.contentsClick(...i))
  }, [
    g("div", Zy, [
      g("div", Gy, [
        _(e.$slots, "content-top", {}, () => [
          g("div", Jy, E(e.item.addressName), 1),
          g("div", Qy, E(e.item.phone), 1),
          e.item.defaultAddress ? (c(), f("div", xy, E(e.translate("default")), 1)) : N("", !0)
        ])
      ]),
      g("div", e2, [
        _(e.$slots, "content-icon", {}, () => [
          te(a, {
            name: "del",
            class: "nut-address-list-item__info-handle-del",
            onClick: e.delClick
          }, null, 8, ["onClick"]),
          te(r, {
            name: "edit",
            class: "nut-address-list-item__info-handle-edit",
            onClick: e.editClick
          }, null, 8, ["onClick"])
        ])
      ])
    ]),
    g("div", t2, [
      _(e.$slots, "content-addr", {}, () => [
        ge(E(e.item.fullAddress), 1)
      ])
    ])
  ]);
}
const jn = /* @__PURE__ */ ne(qy, [["render", n2]]), { create: o2 } = x("address-list-general"), l2 = o2({
  props: {
    item: {
      type: Object,
      default: {}
    },
    longPress: {
      type: Boolean,
      default: !1
    },
    swipeEdition: {
      type: Boolean,
      default: !1
    }
  },
  emits: ["delIcon", "editIcon", "clickItem", "longDown", "longCopy", "longSet", "longDel", "swipeDel"],
  components: {
    ItemContents: jn,
    NutButton: qe,
    NutSwipe: hn
  },
  setup(e, { emit: t }) {
    const n = () => Te(jn, {
      item: e.item,
      onDelIcon(I) {
        a(I);
      },
      onEditIcon(I) {
        r(I);
      },
      onClickItem(I) {
        i(I);
      }
    });
    let o = null;
    const l = z(!1), s = z(!1), a = (I) => {
      t("delIcon", I, e.item), I.stopPropagation();
    }, r = (I) => {
      t("editIcon", I, e.item), I.stopPropagation();
    }, i = (I) => {
      l.value || (t("clickItem", I, e.item), I.stopPropagation());
    }, p = (I) => {
      t("longDel", I, e.item), I.stopPropagation();
    }, d = (I) => {
      o = 0, s.value = !0, t("longDown", I, e.item);
    };
    return {
      renderCompontent: n,
      showMaskRef: s,
      clickItem: i,
      editClick: r,
      delClick: a,
      delLongClick: p,
      holddownstart: (I) => {
        o = setTimeout(() => {
          d(I);
        }, 300);
      },
      holddownmove: () => {
        clearTimeout(o);
      },
      holddownend: () => {
        clearTimeout(o);
      },
      copyCLick: (I) => {
        t("longCopy", I, e.item), I.stopPropagation();
      },
      hideMaskClick: () => {
        s.value = !1;
      },
      setDefault: (I) => {
        t("longSet", I, e.item), I.stopPropagation();
      },
      maskClick: (I) => {
        o != 0 && (s.value = !1), I.stopPropagation(), I.preventDefault();
      },
      swipeDelClick: (I) => {
        t("swipeDel", I, e.item), I.stopPropagation();
      },
      swipestart: () => {
        l.value = !1;
      },
      swipemove: () => {
        l.value = !0;
      }
    };
  }
}), s2 = {
  key: 0,
  class: "nut-address-list-general"
}, a2 = { class: "nut-address-list-swipe" };
function r2(e, t, n, o, l, s) {
  const a = U("nut-button"), r = U("nut-swipe");
  return e.swipeEdition ? (c(), G(r, { key: 1 }, {
    right: oe(() => [
      _(e.$slots, "swipe-right-btn", {}, () => [
        te(a, {
          shape: "square",
          style: { height: "100%" },
          type: "danger",
          onClick: e.swipeDelClick
        }, {
          default: oe(() => [
            ge("删除")
          ]),
          _: 1
        }, 8, ["onClick"])
      ])
    ]),
    default: oe(() => [
      g("div", a2, [
        (c(), G(Ve(e.renderCompontent()), {
          onTouchmove: e.swipemove,
          onTouchstart: e.swipestart
        }, {
          "content-top": oe(() => [
            _(e.$slots, "content-info")
          ]),
          "content-icon": oe(() => [
            _(e.$slots, "content-icons")
          ]),
          "content-addr": oe(() => [
            _(e.$slots, "content-addrs")
          ]),
          _: 3
        }, 40, ["onTouchmove", "onTouchstart"]))
      ])
    ]),
    _: 3
  })) : (c(), f("div", s2, [
    (c(), G(Ve(e.renderCompontent()), {
      onTouchstart: e.holddownstart,
      onTouchend: e.holddownend,
      onTouchmove: e.holddownmove
    }, {
      "content-top": oe(() => [
        _(e.$slots, "content-info")
      ]),
      "content-icon": oe(() => [
        _(e.$slots, "content-icons")
      ]),
      "content-addr": oe(() => [
        _(e.$slots, "content-addrs")
      ]),
      _: 3
    }, 40, ["onTouchstart", "onTouchend", "onTouchmove"])),
    e.longPress && e.showMaskRef ? (c(), f("div", {
      key: 0,
      class: "nut-address-list-general__mask",
      onClick: t[3] || (t[3] = (...i) => e.maskClick && e.maskClick(...i))
    }, [
      _(e.$slots, "longpress-all", {}, () => [
        g("div", {
          class: "nut-address-list-general__mask-copy",
          onClick: t[0] || (t[0] = (...i) => e.copyCLick && e.copyCLick(...i))
        }, " 复制地址 "),
        g("div", {
          class: "nut-address-list-general__mask-set",
          onClick: t[1] || (t[1] = (...i) => e.setDefault && e.setDefault(...i))
        }, " 设置默认 "),
        g("div", {
          class: "nut-address-list-general__mask-del",
          onClick: t[2] || (t[2] = (...i) => e.delLongClick && e.delLongClick(...i))
        }, " 删除地址 ")
      ])
    ])) : N("", !0),
    e.showMaskRef ? (c(), f("div", {
      key: 1,
      class: "nut-address-list__mask-bottom",
      onClick: t[4] || (t[4] = (...i) => e.hideMaskClick && e.hideMaskClick(...i))
    })) : N("", !0)
  ]));
}
const i2 = /* @__PURE__ */ ne(l2, [["render", r2]]), { create: u2 } = x("address-list"), c2 = "NutAddressList", d2 = u2({
  props: {
    data: {
      type: Array,
      default: []
    },
    longPress: {
      type: Boolean,
      default: !1
    },
    swipeEdition: {
      type: Boolean,
      default: !1
    },
    showBottomButton: {
      type: Boolean,
      default: !0
    },
    dataOptions: {
      type: Object,
      default: {}
    }
  },
  components: {
    GeneralShell: i2,
    NutButton: qe
  },
  emits: ["delIcon", "editIcon", "clickItem", "longCopy", "longSet", "longDel", "swipeDel", "add"],
  setup(e, { emit: t }) {
    const n = Se(c2), o = z([]), l = me({
      id: 2,
      addressName: "姓名",
      phone: "123****4567",
      defaultAddress: !1,
      fullAddress: "北京市通州区测试测试测试测试测试测试测试测试测试"
    }), s = () => {
      Object.keys(e.dataOptions).length > 0 && (o.value = e.data.map((w) => _l(l, w, e.dataOptions)));
    };
    Q(
      () => e.data,
      () => s(),
      { deep: !0 }
    );
    const a = (w, S) => {
      t("delIcon", w, S), w.stopPropagation();
    }, r = (w, S) => {
      t("editIcon", w, S), w.stopPropagation();
    }, i = (w, S) => {
      t("clickItem", w, S), w.stopPropagation();
    }, p = (w, S) => {
      t("longCopy", w, S), w.stopPropagation();
    }, d = (w, S) => {
      t("longSet", w, S), w.stopPropagation();
    }, y = (w, S) => {
      t("longDel", w, S), w.stopPropagation();
    }, v = (w, S) => {
      t("swipeDel", w, S), w.stopPropagation();
    }, b = (w) => {
      t("add", w), w.stopPropagation();
    };
    return $e(() => {
      s();
    }), {
      clickDelIcon: a,
      clickEditIcon: r,
      clickContentItem: i,
      clickLongCopy: p,
      clickLongSet: d,
      clickLongDel: y,
      clickSwipeDel: v,
      addAddress: b,
      dataArray: o,
      translate: n
    };
  }
}), f2 = { class: "nut-address-list" };
function p2(e, t, n, o, l, s) {
  const a = U("general-shell"), r = U("nut-button");
  return c(), f("div", f2, [
    (c(!0), f(J, null, ie(e.dataArray, (i, p) => (c(), G(a, {
      key: p,
      item: i,
      "long-press": e.longPress,
      "swipe-edition": e.swipeEdition,
      onDelIcon: e.clickDelIcon,
      onEditIcon: e.clickEditIcon,
      onClickItem: e.clickContentItem,
      onSwipeDel: e.clickSwipeDel,
      onLongCopy: e.clickLongCopy,
      onLongSet: e.clickLongSet,
      onLongDel: e.clickLongDel
    }, wt({
      "content-info": oe(() => [
        _(e.$slots, "item-infos", { item: i })
      ]),
      "content-icons": oe(() => [
        _(e.$slots, "item-icon", { item: i })
      ]),
      "content-addrs": oe(() => [
        _(e.$slots, "item-addr", { item: i })
      ]),
      _: 2
    }, [
      e.longPress ? {
        name: "longpress-all",
        fn: oe(() => [
          _(e.$slots, "longpress-btns", { item: i })
        ]),
        key: "0"
      } : void 0,
      e.swipeEdition ? {
        name: "swipe-right-btn",
        fn: oe(() => [
          _(e.$slots, "swipe-right", { item: i })
        ]),
        key: "1"
      } : void 0
    ]), 1032, ["item", "long-press", "swipe-edition", "onDelIcon", "onEditIcon", "onClickItem", "onSwipeDel", "onLongCopy", "onLongSet", "onLongDel"]))), 128)),
    e.showBottomButton ? (c(), f("div", {
      key: 0,
      class: "nut-address-list__bottom",
      onClick: t[0] || (t[0] = (...i) => e.addAddress && e.addAddress(...i))
    }, [
      te(r, {
        block: "",
        type: "danger"
      }, {
        default: oe(() => [
          ge(E(e.translate("addAddress")), 1)
        ]),
        _: 1
      })
    ])) : N("", !0)
  ]);
}
const m2 = /* @__PURE__ */ ne(d2, [["render", p2]]), { create: h2 } = x("category"), g2 = h2({
  props: {
    // 分类模式
    type: {
      type: String,
      default: "classify"
    },
    // 左侧导航栏
    category: {
      type: Array,
      default: []
    }
  },
  setup(e, { emit: t }) {
    const n = z(0), o = z(!1);
    return {
      getChildList: (s) => {
        n.value = s, t("change", s);
      },
      checkIndex: n,
      categoryLeft: o
    };
  }
}), v2 = { class: "nut-category" }, y2 = { class: "nut-category__cateList" }, b2 = { key: 0 }, $2 = ["onClick"];
function w2(e, t, n, o, l, s) {
  return c(), f("div", v2, [
    g("div", y2, [
      e.type == "classify" || e.type == "text" ? (c(), f("div", b2, [
        (c(!0), f(J, null, ie(e.category, (a, r) => (c(), f("div", {
          key: r,
          class: "nut-category__cateListLeft"
        }, [
          g("div", {
            class: B([e.checkIndex == r ? "nut-category__cateListItemChecked" : "nut-category__cateListItem"]),
            onClick: (i) => e.getChildList(r)
          }, E(a.catName), 11, $2)
        ]))), 128))
      ])) : N("", !0),
      _(e.$slots, "default")
    ])
  ]);
}
const k2 = /* @__PURE__ */ ne(g2, [["render", w2]]), { create: C2 } = x("category-pane"), S2 = C2({
  props: {
    // 分类模式
    type: {
      type: String,
      default: "classify"
    },
    // 右侧导航数据
    categoryChild: {
      type: Array,
      default: () => []
    },
    // 模式传入自定义数据
    customCategory: {
      type: Array,
      default: () => []
    }
  },
  setup(e, { emit: t }) {
    return {
      onChange: (o) => {
        t("onChange", o);
      }
    };
  }
}), T2 = { class: "nut-category-pane" }, N2 = {
  key: 0,
  class: "nut-category-pane__cateListRight"
}, _2 = { class: "nut-category-pane__childTitle" }, D2 = {
  key: 0,
  class: "nut-category-pane__childItemList"
}, I2 = ["onClick"], B2 = ["src"], M2 = { class: "nut-category-pane__skuImg" }, L2 = {
  key: 1,
  class: "nut-category-pane__cateListRight"
}, P2 = { class: "nut-category-pane__childTitle" }, E2 = {
  key: 0,
  class: "nut-category-pane__childItemList"
}, A2 = ["onClick"], z2 = { class: "nut-category-pane__skuName" }, V2 = {
  key: 2,
  class: "nut-category-pane__selfItemList"
}, O2 = ["onClick"];
function H2(e, t, n, o, l, s) {
  return c(), f("div", T2, [
    e.type == "classify" ? (c(), f("div", N2, [
      (c(!0), f(J, null, ie(e.categoryChild, (a, r) => (c(), f("div", { key: r }, [
        g("div", _2, E(a == null ? void 0 : a.catName), 1),
        (a == null ? void 0 : a.catType) == 1 ? (c(), f("div", D2, [
          (c(!0), f(J, null, ie(a.childCateList, (i, p) => (c(), f("div", {
            key: p,
            class: "nut-category-pane__childItem",
            onClick: (d) => e.onChange(i)
          }, [
            g("img", {
              class: "nut-category-pane__childImg",
              src: i.backImg
            }, null, 8, B2),
            g("div", M2, E(i == null ? void 0 : i.catName), 1)
          ], 8, I2))), 128))
        ])) : N("", !0)
      ]))), 128))
    ])) : N("", !0),
    e.type == "text" ? (c(), f("div", L2, [
      (c(!0), f(J, null, ie(e.categoryChild, (a, r) => (c(), f("div", { key: r }, [
        g("div", P2, E(a == null ? void 0 : a.catName), 1),
        (a == null ? void 0 : a.catType) == 1 ? (c(), f("div", E2, [
          (c(!0), f(J, null, ie(a.childCateList, (i, p) => (c(), f("div", {
            key: p,
            class: "nut-category-pane__childItem",
            onClick: (d) => e.onChange(i)
          }, [
            g("div", z2, E(i == null ? void 0 : i.catName), 1)
          ], 8, A2))), 128))
        ])) : N("", !0)
      ]))), 128))
    ])) : N("", !0),
    e.type == "custom" ? (c(), f("div", V2, [
      (c(!0), f(J, null, ie(e.customCategory, (a, r) => (c(), f("div", {
        key: r,
        class: "nut-category-pane__skuName",
        onClick: (i) => e.onChange(a)
      }, E(a == null ? void 0 : a.catName), 9, O2))), 128))
    ])) : N("", !0)
  ]);
}
const R2 = /* @__PURE__ */ ne(S2, [["render", H2]]), { create: F2 } = x("comment-header"), W2 = F2({
  components: {
    NutRate: dn
  },
  props: {
    type: {
      type: String,
      default: "default"
      // default，complex
    },
    info: {
      type: Object,
      default: () => {
      }
    },
    labels: {
      type: Function,
      default: () => ""
    }
  },
  emits: ["handleClick"],
  setup(e, { emit: t }) {
    return { handleClick: () => {
      t("handleClick");
    } };
  }
}), Y2 = { class: "nut-comment-header__user" }, j2 = { class: "nut-comment-header__user-avter" }, K2 = ["src"], U2 = { class: "nut-comment-header__user-score" }, X2 = {
  key: 0,
  class: "nut-comment-header__time"
};
function q2(e, t, n, o, l, s) {
  const a = U("nut-rate");
  return c(), f("view", null, [
    e.info ? (c(), f("view", {
      key: 0,
      class: "nut-comment-header",
      onClick: t[1] || (t[1] = (...r) => e.handleClick && e.handleClick(...r))
    }, [
      g("view", Y2, [
        g("view", j2, [
          e.info.avatar ? (c(), f("img", {
            key: 0,
            src: e.info.avatar
          }, null, 8, K2)) : N("", !0)
        ]),
        e.type == "default" ? (c(), f("view", {
          key: 0,
          class: B([`nut-comment-header__user-${e.type}`])
        }, [
          g("view", {
            class: B([`nut-comment-header__user-${e.type}-name`])
          }, [
            g("span", null, E(e.info.nickName), 1),
            _(e.$slots, "labels")
          ], 2),
          g("view", U2, [
            te(a, {
              modelValue: e.info.score,
              "onUpdate:modelValue": t[0] || (t[0] = (r) => e.info.score = r),
              size: "12",
              spacing: "5",
              readonly: "",
              onChange: e.handleClick
            }, null, 8, ["modelValue", "onChange"])
          ])
        ], 2)) : (c(), f("view", {
          key: 1,
          class: B([`nut-comment-header__user-${e.type}`])
        }, [
          g("span", {
            class: B([`nut-comment-header__user-${e.type}-name`])
          }, E(e.info.nickName), 3),
          _(e.$slots, "labels")
        ], 2))
      ]),
      e.info.time ? (c(), f("view", X2, E(e.info.time), 1)) : N("", !0)
    ])) : N("", !0),
    e.type == "complex" ? (c(), f("view", {
      key: 1,
      class: B([`nut-comment-header__${e.type}-score`])
    }, [
      te(a, {
        modelValue: e.info.score,
        "onUpdate:modelValue": t[2] || (t[2] = (r) => e.info.score = r),
        size: "12",
        spacing: "3",
        readonly: ""
      }, null, 8, ["modelValue"]),
      g("i", {
        class: B([`nut-comment-header__${e.type}-score-i`])
      }, null, 2),
      g("view", {
        class: B([`nut-comment-header__${e.type}-score-size`])
      }, E(e.info.size), 3)
    ], 2)) : N("", !0)
  ]);
}
const Z2 = /* @__PURE__ */ ne(W2, [["render", q2]]), { create: G2 } = x("comment-images"), J2 = G2({
  props: {
    type: {
      type: String,
      default: "one"
      // one multi
    },
    videos: {
      type: Array,
      default: () => []
    },
    images: {
      type: Array,
      default: () => []
    }
  },
  components: { Right: on },
  emits: ["click", "clickImages"],
  setup(e, { emit: t }) {
    const n = z(!1), o = z(1), l = z([]);
    return Q(
      () => [e.videos, e.images],
      (a) => {
        a[0].length > 0 && a[0].forEach((r) => {
          r.type = "video";
        }), l.value = a[0].concat(a[1]);
      },
      { deep: !0 }
    ), $e(() => {
      e.videos.length > 0 && e.videos.forEach((a) => {
        a.type = "video";
      }), l.value = e.videos.concat(e.images);
    }), { isShowImage: n, initIndex: o, showImages: (a, r) => {
      const { videos: i, images: p } = e, d = a == "img" ? r - i.length : r;
      t("clickImages", {
        type: a,
        index: d,
        value: a == "img" ? p[d] : i[d]
      });
    }, totalImages: l };
  }
}), Q2 = ["onClick"], x2 = ["src"], e3 = /* @__PURE__ */ g("view", { class: "nut-comment-images__play" }, null, -1), t3 = ["onClick"], n3 = ["src"], o3 = {
  key: 0,
  class: "nut-comment-images__mask"
};
function l3(e, t, n, o, l, s) {
  const a = U("Right");
  return c(), f("view", {
    class: B(`nut-comment-images nut-comment-images--${e.type}`)
  }, [
    (c(!0), f(J, null, ie(e.videos, (r, i) => (c(), f("view", {
      key: r.id,
      class: "nut-comment-images__item nut-comment-images__item--video",
      onClick: (p) => e.showImages("video", i)
    }, [
      g("img", {
        src: r.mainUrl
      }, null, 8, x2),
      e3
    ], 8, Q2))), 128)),
    (c(!0), f(J, null, ie(e.images, (r, i) => (c(), f(J, {
      key: r.id
    }, [
      e.type == "multi" && e.videos.length + i < 9 || e.type != "multi" ? (c(), f("view", {
        key: 0,
        class: "nut-comment-images__item nut-comment-images__item--imgbox",
        onClick: (p) => e.showImages("img", i + e.videos.length)
      }, [
        g("img", {
          src: r.smallImgUrl ? r.smallImgUrl : r.imgUrl
        }, null, 8, n3),
        e.type == "multi" && e.totalImages.length > 9 && e.videos.length + i > 7 ? (c(), f("view", o3, [
          g("span", null, "共 " + E(e.totalImages.length) + " 张", 1),
          te(a, { style: { width: "12px" } })
        ])) : N("", !0)
      ], 8, t3)) : N("", !0)
    ], 64))), 128))
  ], 2);
}
const s3 = /* @__PURE__ */ ne(J2, [["render", l3]]), { create: a3 } = x("comment-bottom"), r3 = "NutComment", i3 = a3({
  props: {
    type: {
      type: String,
      default: "base"
      // simple，base，complex
    },
    info: {
      type: Object,
      default: () => ({})
    },
    operation: {
      type: Array,
      default: ["replay", "like", "more"]
    }
  },
  components: { Fabulous: js, Comment: Ns, MoreX: Qa },
  emits: ["clickOperate", "handleClick"],
  setup(e, { emit: t }) {
    const n = Se(r3), o = z(!1), l = z([]);
    return $e(() => {
      const r = ["replay", "like", "more"];
      e.operation && e.operation.forEach((i) => {
        r.includes(i) && l.value.push(i);
      });
    }), { showPopver: o, operate: (r) => {
      r == "more" && (o.value = !o.value), t("clickOperate", r);
    }, mergeOp: l, handleClick: () => {
      t("handleClick");
    }, translate: n };
  }
}), u3 = { class: "nut-comment-bottom" }, c3 = { key: 0 }, d3 = { class: "nut-comment-bottom__cpx" }, f3 = ["onClick"];
function p3(e, t, n, o, l, s) {
  const a = U("Fabulous"), r = U("Comment"), i = U("MoreX");
  return c(), f("view", u3, [
    g("view", {
      class: "nut-comment-bottom__lable",
      onClick: t[0] || (t[0] = (...p) => e.handleClick && e.handleClick(...p))
    }, [
      e.type != "complex" ? (c(), f("span", c3, E(e.info.size), 1)) : N("", !0)
    ]),
    g("view", d3, [
      (c(!0), f(J, null, ie(e.mergeOp, (p, d) => (c(), f("view", {
        key: d,
        class: B(["nut-comment-bottom__cpx-item", `nut-comment-bottom__cpx-item--${p}`]),
        onClick: (y) => e.operate(p)
      }, [
        p != "more" ? (c(), f(J, { key: 0 }, [
          g("span", null, E(e.info[p]), 1),
          p == "like" ? (c(), G(a, { key: 0 })) : (c(), G(r, { key: 1 }))
        ], 64)) : N("", !0),
        p == "more" ? (c(), f(J, { key: 1 }, [
          te(i),
          e.showPopver ? (c(), f("view", {
            key: 0,
            class: "nut-comment-bottom__cpx-item-popover",
            onClick: t[1] || (t[1] = (y) => e.operate("popover"))
          }, E(e.translate("complaintsText")), 1)) : N("", !0)
        ], 64)) : N("", !0)
      ], 10, f3))), 128))
    ])
  ]);
}
const m3 = /* @__PURE__ */ ne(i3, [["render", p3]]), { create: h3 } = x("comment"), g3 = "NutComment", v3 = h3({
  props: {
    headerType: {
      type: String,
      default: "default"
      // 头部展示风格 default，complex
    },
    imagesRows: {
      type: String,
      default: "one"
      // 'one'  'multi'
    },
    ellipsis: {
      type: [String, Number, Boolean],
      default: !1
    },
    videos: {
      type: Array,
      default: () => []
    },
    images: {
      type: Array,
      default: () => []
    },
    info: {
      type: Object,
      default: () => ({})
    },
    follow: {
      type: Object,
      default: () => ({})
    },
    labels: {
      type: Function,
      default: () => ""
    },
    operation: {
      type: Array,
      default: ["replay", "like", "more"]
    }
  },
  components: {
    CommentHeader: Z2,
    CommentImages: s3,
    CommentBottom: m3,
    Right: on
  },
  emits: ["click", "clickImages", "clickOperate"],
  setup(e, { emit: t }) {
    const n = Se(g3);
    return { conEllipsis: T(() => e.ellipsis ? e.ellipsis : e.headerType == "complex" ? 6 : 2), clickOperate: (r) => {
      t("clickOperate", r);
    }, handleClick: () => {
      t("click", e.info);
    }, clickImages: (r) => {
      t("clickImages", r);
    }, translate: n };
  }
}), y3 = {
  key: 0,
  class: "nut-comment"
}, b3 = ["innerHTML"], $3 = { class: "nut-comment__follow-title" }, w3 = { class: "nut-comment__follow-com" };
function k3(e, t, n, o, l, s) {
  const a = U("comment-header"), r = U("comment-images"), i = U("Right"), p = U("comment-bottom");
  return e.info && Object.keys(e.info) ? (c(), f("view", y3, [
    te(a, {
      type: e.headerType,
      info: e.info,
      labels: e.labels,
      onHandleClick: e.handleClick
    }, {
      labels: oe(() => [
        _(e.$slots, "comment-labels")
      ]),
      _: 3
    }, 8, ["type", "info", "labels", "onHandleClick"]),
    _(e.$slots, "feature"),
    g("view", {
      class: "nut-comment__main",
      style: A(`-webkit-line-clamp:${e.conEllipsis}`),
      onClick: t[0] || (t[0] = (...d) => e.handleClick && e.handleClick(...d)),
      innerHTML: e.info.content
    }, null, 12, b3),
    te(r, {
      images: e.images,
      videos: e.videos,
      type: e.imagesRows,
      onClickImages: e.clickImages
    }, null, 8, ["images", "videos", "type", "onClickImages"]),
    e.follow && e.follow.days > 0 ? (c(), f("view", {
      key: 0,
      class: "nut-comment__follow",
      onClick: t[2] || (t[2] = (...d) => e.handleClick && e.handleClick(...d))
    }, [
      g("view", $3, E(e.translate("additionalReview", e.follow.days)), 1),
      g("view", w3, E(e.follow.content), 1),
      e.follow.images && e.follow.images.length > 0 ? (c(), f("view", {
        key: 0,
        class: "nut-comment__follow-img",
        onClick: t[1] || (t[1] = (d) => e.clickImages(e.follow.images))
      }, [
        ge(E(e.translate("additionalImages", e.follow.images.length)) + " ", 1),
        te(i, { width: "12px" })
      ])) : N("", !0)
    ])) : N("", !0),
    te(p, {
      type: e.headerType,
      info: e.info,
      operation: e.operation,
      onClickOperate: e.clickOperate,
      onHandleClick: e.handleClick
    }, null, 8, ["type", "info", "operation", "onClickOperate", "onHandleClick"]),
    _(e.$slots, "comment-shop-reply")
  ])) : N("", !0);
}
const C3 = /* @__PURE__ */ ne(v3, [["render", k3]]), S3 = { class: "nut-invoice" }, T3 = {
  key: 0,
  class: "nut-invoice__submit"
}, ul = /* @__PURE__ */ ye({
  name: "NutInvoice",
  __name: "invoice",
  props: {
    data: { default: () => [] },
    formValue: { default: () => {
    } },
    submit: { type: Boolean, default: !0 }
  },
  emits: ["submit", "scrollBottom"],
  setup(e, { emit: t }) {
    const n = t, o = z(), l = () => {
      o.value.validate().then(({ valid: s, errors: a }) => {
        n("submit", s, a);
      });
    };
    return (s, a) => (c(), f("div", S3, [
      te(pe(pn), {
        ref_key: "formRef",
        ref: o,
        "model-value": s.formValue
      }, {
        default: oe(() => [
          (c(!0), f(J, null, ie(s.data, (r, i) => (c(), G(pe(mn), {
            key: i,
            label: r.label,
            required: r.required,
            rules: r.rules,
            prop: r.formItemProp
          }, {
            default: oe(() => [
              r.type === "radio" ? (c(), G(pe(cn), {
                key: 0,
                modelValue: s.formValue[r.formItemProp],
                "onUpdate:modelValue": (p) => s.formValue[r.formItemProp] = p
              }, {
                default: oe(() => [
                  (c(!0), f(J, null, ie(r.radioLabel, (p, d) => (c(), G(pe(un), {
                    key: d,
                    shape: "button",
                    label: p.label
                  }, {
                    default: oe(() => [
                      ge(E(p.label), 1)
                    ]),
                    _: 2
                  }, 1032, ["label"]))), 128))
                ]),
                _: 2
              }, 1032, ["modelValue", "onUpdate:modelValue"])) : (c(), G(zo, {
                key: 1,
                modelValue: s.formValue[r.formItemProp],
                "onUpdate:modelValue": (p) => s.formValue[r.formItemProp] = p,
                class: "nut-input-text",
                placeholder: r.placeholder,
                type: "text"
              }, null, 8, ["modelValue", "onUpdate:modelValue", "placeholder"]))
            ]),
            _: 2
          }, 1032, ["label", "required", "rules", "prop"]))), 128))
        ]),
        _: 1
      }, 8, ["model-value"]),
      s.submit ? (c(), f("div", T3, [
        te(pe(qe), {
          type: "primary",
          block: "",
          onClick: l
        }, {
          default: oe(() => [
            ge("提交审批")
          ]),
          _: 1
        })
      ])) : N("", !0)
    ]));
  }
});
we(ul);
const { create: N3 } = x("avatar-cropper"), _3 = N3({
  components: {
    NutButton: qe,
    Refresh2: Dr,
    Retweet: Pr
  },
  props: {
    maxZoom: {
      type: Number,
      default: 3
    },
    space: {
      type: Number,
      default: 10
    },
    toolbarPosition: {
      type: String,
      default: "bottom"
    },
    editText: {
      type: String,
      default: "编辑"
    },
    cancelText: {
      type: String,
      default: "取消"
    },
    confirmText: {
      type: String,
      default: "确定"
    },
    shape: {
      type: String,
      default: "square"
    }
  },
  emits: ["confirm", "cancel"],
  setup(e, { emit: t, expose: n }) {
    const o = me({
      visible: !1,
      defScale: 1,
      scale: 1,
      angle: 0,
      moveX: 0,
      moveY: 0,
      moving: !1,
      zooming: !1,
      displayWidth: 0,
      displayHeight: 0
    }), l = {
      img: new Image(),
      // 规定要使用的图像
      sx: 0,
      // 开始剪切的 x 坐标位置
      sy: 0,
      // 开始剪切的 y 坐标位置
      swidth: 0,
      // 被剪切区域的宽度
      sheight: 0,
      // 被剪切区域的高度
      x: 0,
      // 在画布上x的坐标位置
      y: 0,
      // 在画布上y的坐标位置
      width: 0,
      // 要使用的图像的宽度
      height: 0
      // 要使用的图像的高度
    }, s = z(q({}, l)), a = z(), r = z(), i = z(), p = window.devicePixelRatio || 1, d = xe(), y = T(() => o.angle === 90 || o.angle === 270), v = T(() => {
      const { swidth: K } = s.value, se = K / p + "px";
      return {
        width: se,
        height: se
      };
    }), b = T(() => {
      const { displayWidth: K, scale: se } = o, { swidth: ue, height: de } = s.value;
      return y.value ? Math.max(0, (de * se - ue) / 2) : Math.max(0, (K * se - ue) / 2);
    }), w = T(() => {
      const { displayWidth: K, scale: se } = o, { swidth: ue, height: de } = s.value;
      return y.value ? Math.max(0, (K * se - ue) / 2) : Math.max(0, (de * se - ue) / 2);
    }), S = (K) => new Promise((se) => {
      const ue = new FileReader();
      ue.onloadend = (de) => se(de.target.result), ue.readAsDataURL(K);
    }), u = (K) => new Promise((se) => {
      const ue = new Image();
      ue.onload = () => se(ue), ue.src = K;
    }), m = () => {
      const { img: K, width: se, height: ue, x: de, y: Ce, swidth: Le } = s.value, { moveX: H, moveY: Z, scale: ae } = o, re = r.value;
      if (!re)
        return;
      const he = re.getContext("2d");
      re.width = o.displayWidth, re.height = o.displayHeight, he.clearRect(0, 0, re.width, re.height), he.fillStyle = "#666", he.fillRect(0, 0, re.width, re.height), he.fillStyle = "#000", he.fillRect(e.space * p, (re.height - Le) / 2, Le, Le), he.translate(re.width / 2 + H, re.height / 2 + Z), he.rotate(Math.PI / 180 * o.angle), he.scale(ae, ae), he.drawImage(K, de, Ce, se, ue);
    }, h = (K) => {
      const se = Ye(a.value), { width: ue, height: de } = se, Ce = o.displayWidth = ue * p, Le = o.displayHeight = de * p;
      let H = q({}, l);
      const { width: Z, height: ae } = K;
      H.img = K;
      const re = ae > Z, he = re ? Z / ae : ae / Z;
      H.width = Ce, H.height = re ? Ce / he : Ce * he, H.x = -H.width / 2, H.y = -H.height / 2, H.swidth = Ce - e.space * 2 * p, H.sheight = re ? H.swidth / he : H.swidth * he, H.sx = e.space * p, H.sy = (Le - H.swidth) / 2, s.value = H, o.defScale = H.swidth / (re ? H.width : H.height), L();
    }, $ = (K) => Ge(this, null, function* () {
      o.visible = !0;
      const se = K.target;
      let { files: ue } = se;
      if (!(ue != null && ue.length))
        return;
      const de = yield S(ue[0]), Ce = yield u(de);
      h(Ce), m();
    }), L = () => {
      I(o.defScale), o.moveX = 0, o.moveY = 0, o.angle = 0;
    }, I = (K) => {
      K = ze(K, 0.3, +e.maxZoom + 1), K !== o.scale && (o.scale = K);
    }, P = (K) => Math.sqrt(pt(K[0].clientX - K[1].clientX, 2) + pt(K[0].clientY - K[1].clientY, 2));
    let M, C, k, D, V;
    const j = (K) => {
      const { touches: se } = K, { offsetX: ue } = d;
      d.start(K), V = se.length, M = o.moveX, C = o.moveY, o.moving = V === 1, o.zooming = V === 2 && !ue.value, o.zooming && (k = o.scale, D = P(K.touches));
    }, X = (K) => {
      const { touches: se } = K;
      if (d.move(K), (o.moving || o.zooming) && ft(K, !0), o.moving) {
        const { deltaX: ue, deltaY: de } = d, Ce = ue.value * o.scale + M, Le = de.value * o.scale + C;
        o.moveX = ze(Ce, -b.value, b.value), o.moveY = ze(Le, -w.value, w.value);
      }
      if (o.zooming && se.length === 2) {
        const ue = P(se), de = k * ue / D;
        I(de);
      }
    }, le = (K) => {
      let se = !1;
      (o.moving || o.zooming) && (se = !(o.moving && M === o.moveX && C === o.moveY), K.touches.length || (o.zooming && (o.moveX = ze(o.moveX, -b.value, b.value), o.moveY = ze(o.moveY, -w.value, w.value), o.zooming = !1), o.moving = !1, M = 0, C = 0, k = o.defScale, o.scale < o.defScale && L(), o.scale > e.maxZoom && (o.scale = +e.maxZoom))), ft(K, se), d.reset();
    }, W = () => {
      o.angle = 0;
    }, Y = () => {
      if (o.angle === 270) {
        o.angle = 0;
        return;
      }
      o.angle += 90;
    }, R = (K = !0) => {
      o.visible = !1, L(), i.value.value = "", K && t("cancel");
    }, ee = () => {
      const K = r.value, { sx: se, sy: ue, swidth: de } = s.value, Ce = de, Le = de, H = document.createElement("canvas"), Z = H.getContext("2d");
      H.width = Ce, H.height = Le, K && Z.drawImage(K, se, ue, Ce, Le, 0, 0, Ce, Le);
      const ae = H.toDataURL("image/png");
      t("confirm", ae), R(!1);
    };
    return Q(
      () => o.scale,
      () => {
        m();
      }
    ), Q(
      () => o.angle,
      () => {
        Math.abs(o.moveX) > b.value && (o.moveX = b.value), Math.abs(o.moveY) > w.value && (o.moveY = w.value), m();
      }
    ), Q(
      () => o.moveX,
      () => {
        m();
      }
    ), Q(
      () => o.moveY,
      () => {
        m();
      }
    ), n({
      cancel: R,
      reset: W,
      rotate: Y,
      confirm: ee
    }), fe(q({}, be(o)), {
      cropperPopupRef: a,
      canvasRef: r,
      inputImageRef: i,
      highlightStyle: v,
      inputImageChange: $,
      reset: W,
      rotate: Y,
      cancel: R,
      confirm: ee,
      onTouchStart: j,
      onTouchMove: X,
      onTouchEnd: le
    });
  }
}), D3 = ["data-edit-text"], I3 = {
  ref: "cropperPopupRef",
  class: "nut-cropper-popup"
}, B3 = {
  ref: "canvasRef",
  class: "nut-cropper-popup__canvas"
}, M3 = {
  key: 1,
  class: "flex-sb"
};
function L3(e, t, n, o, l, s) {
  const a = U("nut-button"), r = U("Refresh2"), i = U("Retweet");
  return c(), f(J, null, [
    g("div", {
      class: B(["nut-avatar-cropper", { round: e.shape === "round" }]),
      "data-edit-text": e.editText
    }, [
      _(e.$slots, "default"),
      g("input", {
        ref: "inputImageRef",
        type: "file",
        accept: "image/*",
        class: "nut-avatar-cropper__input",
        onChange: t[0] || (t[0] = (...p) => e.inputImageChange && e.inputImageChange(...p))
      }, null, 544)
    ], 10, D3),
    Ie(g("div", I3, [
      g("canvas", B3, null, 512),
      g("div", {
        class: "nut-cropper-popup__highlight",
        onTouchstart: t[1] || (t[1] = (...p) => e.onTouchStart && e.onTouchStart(...p)),
        onTouchmove: t[2] || (t[2] = (...p) => e.onTouchMove && e.onTouchMove(...p)),
        onTouchend: t[3] || (t[3] = (...p) => e.onTouchEnd && e.onTouchEnd(...p)),
        onTouchcancel: t[4] || (t[4] = (...p) => e.onTouchEnd && e.onTouchEnd(...p))
      }, [
        g("div", {
          class: B(["highlight", { highlight__round: e.shape === "round" }]),
          style: A(e.highlightStyle)
        }, null, 6)
      ], 32),
      g("div", {
        class: B(["nut-cropper-popup__toolbar", [e.toolbarPosition]])
      }, [
        e.$slots.toolbar ? _(e.$slots, "toolbar", { key: 0 }) : (c(), f("div", M3, [
          g("div", {
            class: "nut-cropper-popup__toolbar-item",
            onClick: t[5] || (t[5] = (p) => e.cancel())
          }, [
            te(a, { type: "danger" }, {
              default: oe(() => [
                ge(E(e.cancelText), 1)
              ]),
              _: 1
            })
          ]),
          g("div", {
            class: "nut-cropper-popup__toolbar-item",
            onClick: t[6] || (t[6] = (...p) => e.reset && e.reset(...p))
          }, [
            te(r, { color: "#fff" })
          ]),
          g("div", {
            class: "nut-cropper-popup__toolbar-item",
            onClick: t[7] || (t[7] = (...p) => e.rotate && e.rotate(...p))
          }, [
            te(i, { color: "#fff" })
          ]),
          g("div", {
            class: "nut-cropper-popup__toolbar-item",
            onClick: t[8] || (t[8] = (...p) => e.confirm && e.confirm(...p))
          }, [
            te(a, { type: "success" }, {
              default: oe(() => [
                ge(E(e.confirmText), 1)
              ]),
              _: 1
            })
          ])
        ]))
      ], 2)
    ], 512), [
      [Me, e.visible]
    ])
  ], 64);
}
const P3 = /* @__PURE__ */ ne(_3, [["render", L3]]);
function E3(e) {
  [qe, sn, an, Nt, Ee, Hi, Xi, ro, uo, co, mo, ho, uu, hu, vu, vo, Mu, Hu, Ku, $o, ko, Co, wc, To, No, _o, jc, Gc, od, Mo, Sd, Hd, cf, Po, Pf, zf, tp, Vt, zo, un, cn, dn, Ao, Mp, Oo, n1, $1, pn, mn, hn, Ro, P1, Fo, V1, gn, om, um, Ot, Yo, Ht, Lm, Om, vn, Km, Gm, fn, qo, fh, Zo, yn, Jo, Qo, bn, $n, Rt, wn, m0, tl, wo, kn, nl, ol, sl, al, x0, rl, rg, fg, il, Tg, Gg, tv, uv, wv, Nv, Ev, $y, Py, Ky, m2, k2, R2, C3, ul, P3].forEach((n) => {
    n.install ? e.use(n) : n.name && e.component(n.name, n);
  });
}
const A3 = "4.3.5", F3 = { install: E3, version: A3 };
export {
  P1 as ActionSheet,
  Gg as Address,
  m2 as AddressList,
  rl as Animate,
  Lm as Audio,
  Om as AudioOperate,
  vn as Avatar,
  P3 as AvatarCropper,
  Km as AvatarGroup,
  Fo as Backtop,
  wo as Badge,
  tv as Barrage,
  qe as Button,
  cf as Calendar,
  Po as CalendarCard,
  Py as Card,
  Hd as Cascader,
  k2 as Category,
  R2 as CategoryPane,
  sn as Cell,
  an as CellGroup,
  Pf as Checkbox,
  zf as CheckboxGroup,
  qo as CircleProgress,
  uo as Col,
  sl as Collapse,
  al as CollapseItem,
  C3 as Comment,
  Hi as ConfigProvider,
  tl as Countdown,
  m0 as Countup,
  tp as DatePicker,
  gn as Dialog,
  ho as Divider,
  V1 as Drag,
  Ky as Ecard,
  Co as Elevator,
  rg as Ellipsis,
  Zo as Empty,
  Mu as FixedNav,
  pn as Form,
  mn as FormItem,
  uu as Grid,
  hu as GridItem,
  Xi as Image,
  wn as ImagePreview,
  _o as Indicator,
  om as InfiniteLoading,
  zo as Input,
  Vt as InputNumber,
  ul as Invoice,
  ro as Layout,
  Gm as List,
  Qn as Locale,
  Hu as Menu,
  Ku as MenuItem,
  vo as Navbar,
  fh as Noticebar,
  Ot as Notify,
  $1 as NumberKeyboard,
  Nt as Overlay,
  wc as Pagination,
  Ao as Picker,
  nl as Popover,
  Ee as Popup,
  Rt as Price,
  fn as Progress,
  um as PullRefresh,
  un as Radio,
  cn as RadioGroup,
  Mo as Range,
  dn as Rate,
  co as Row,
  Sd as Searchbar,
  Mp as ShortPassword,
  jc as SideNavbar,
  Gc as SideNavbarItem,
  uv as Signature,
  ol as Skeleton,
  $y as Sku,
  vu as Space,
  Qo as Step,
  Jo as Steps,
  mo as Sticky,
  od as SubSideNavbar,
  hn as Swipe,
  Ro as SwipeGroup,
  bn as Swiper,
  $n as SwiperItem,
  Yo as Switch,
  No as TabPane,
  $o as Tabbar,
  ko as TabbarItem,
  x0 as Table,
  To as Tabs,
  kn as Tag,
  Oo as Textarea,
  Ev as TimeDetail,
  Nv as TimePannel,
  wv as TimeSelect,
  Ht as Toast,
  Tg as Tour,
  il as TrendArrow,
  n1 as Uploader,
  yn as Video,
  fg as Watermark,
  F3 as default,
  E3 as install,
  U1 as showDialog,
  r0 as showImagePreview,
  R3 as showNotify,
  Ko as showToast,
  A3 as version
};
