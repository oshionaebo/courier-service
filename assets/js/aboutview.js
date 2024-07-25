document.addEventListener("DOMContentLoaded", () => {
    const target = document.getElementById("target-element")
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting){
                target.classList.add("opacity-100", "translate-y-0")
                target.classList.remove("opacity-0", "translate-y-10")
            }
        })
    }, {
        threshold: 0.1
    })
    observer.observe(target)
})