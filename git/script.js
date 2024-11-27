async function getUserInfo() {
    const username = document.getElementById("username").value.trim();
    if (!username) {
        alert("Please enter a username.");
        return;
    }

    try {
        const response = await fetch(`https://api.github.com/users/${username}`);
        if (!response.ok) {
            throw new Error("User not found.");
        }

        const data = await response.json();
        document.getElementById("profile-photo").src = data.avatar_url;
        document.getElementById("name").textContent = data.name || "N/A";
        document.getElementById("login").textContent = data.login || "N/A";
        document.getElementById("github-url").href = data.html_url;
        document.getElementById("github-url").textContent = data.html_url || "N/A";
        document.getElementById("blog-url").href = data.blog || "#";
        document.getElementById("blog-url").textContent = data.blog || "N/A";
        document.getElementById("location").textContent = data.location || "N/A";
        document.getElementById("email").textContent = data.email || "N/A";
        document.getElementById("followers").textContent = data.followers || "0";
        document.getElementById("following").textContent = data.following || "0";

        document.getElementById("user-info").classList.remove("hidden");
    } catch (error) {
        alert(error.message);
        document.getElementById("user-info").classList.add("hidden");
    }
}
