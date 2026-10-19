/* Website SEO Pilot — v1 shared JS */
(function(){
  "use strict";

  /* ---------- storage helpers ---------- */
  window.SP = {
    get: function(key, fallback){
      try{
        var raw = localStorage.getItem("sp_" + key);
        return raw === null ? fallback : JSON.parse(raw);
      }catch(e){ return fallback; }
    },
    set: function(key, val){
      try{ localStorage.setItem("sp_" + key, JSON.stringify(val)); }catch(e){}
    },
    settings: function(){
      return SP.get("settings", { site:"", country:"United States", language:"English" });
    }
  };

  /* ---------- toast ---------- */
  var toastEl = null;
  window.toast = function(msg){
    if(!toastEl){
      toastEl = document.createElement("div");
      toastEl.className = "toast";
      document.body.appendChild(toastEl);
    }
    toastEl.textContent = msg;
    toastEl.classList.add("show");
    clearTimeout(toastEl._t);
    toastEl._t = setTimeout(function(){ toastEl.classList.remove("show"); }, 2600);
  };

  /* ---------- nav ---------- */
  document.addEventListener("DOMContentLoaded", function(){
    var path = location.pathname.split("/").pop() || "index.html";
    document.querySelectorAll(".nav-links a").forEach(function(a){
      var href = a.getAttribute("href");
      if(href === path || (path === "" && href === "index.html")) a.classList.add("active");
    });
    var btn = document.getElementById("menuBtn");
    var links = document.getElementById("navLinks");
    if(btn && links) btn.addEventListener("click", function(){ links.classList.toggle("open"); });
  });

  /* ---------- shared: copy text ---------- */
  window.copyText = function(text, label){
    var done = function(){ toast((label || "Copied") + " to clipboard"); };
    if(navigator.clipboard && navigator.clipboard.writeText){
      navigator.clipboard.writeText(text).then(done, function(){ fallbackCopy(text); done(); });
    }else{ fallbackCopy(text); done(); }
  };
  function fallbackCopy(text){
    var ta = document.createElement("textarea");
    ta.value = text; document.body.appendChild(ta); ta.select();
    try{ document.execCommand("copy"); }catch(e){}
    document.body.removeChild(ta);
  }

  /* ---------- shared: escape HTML ---------- */
  window.esc = function(s){
    return String(s == null ? "" : s)
      .replace(/&/g,"&amp;").replace(/</g,"&lt;")
      .replace(/>/g,"&gt;").replace(/"/g,"&quot;");
  };
})();
