const className = (...classes) => {
    return classes.filter(Boolean).join(" ");
}

const getCurrentLanguage = (lang) => {
    let language = lang === "pt-br" ? "lang.portuguese" : lang === "en" ? "lang.english" : "lang.spanish";
    return language;
}

export { className, getCurrentLanguage }