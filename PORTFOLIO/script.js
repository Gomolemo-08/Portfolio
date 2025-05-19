document.addEventListener("DOMContentLoaded", function() {
        let items = document.querySelectorAll(".timeline-item");
        let bars = document.querySelectorAll(".progress");

        // Fade-in for Timeline
        items.forEach((item, index) => {
            item.style.opacity = "0";
            setTimeout(() => {
                item.style.opacity = "1";
                item.style.transform = "translateX(0)";
            }, 500 * (index + 1));
        });

        // Animate Progress Bars
        bars.forEach(bar => {
            let width = bar.style.width;
            bar.style.width = "0%";
            setTimeout(() => {
                bar.style.width = width;
            }, 500);
        });
    });
