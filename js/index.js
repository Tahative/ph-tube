const handleCategory = async () => {
    const response = await fetch(
        "https://openapi.programming-hero.com/api/videos/categories"
        )
        const data = await response.json();
        const tabContainer = document.getElementById("tab-container");
        data.data.forEach((category) => {
            const div = document.createElement ("div");
            div.innerHTML = `
            <button class ="bg-zinc-300	text-black rounded p-2 m-2"><a class="tab" onclick="handleLoadVideos()">${category.category}</a></button> `
            tabContainer.appendChild(div);
        })
    };
        const handleLoadVideos = (categoryId) => {
            console.log(categoryId);
        }

handleCategory();