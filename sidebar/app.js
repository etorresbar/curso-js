const toggleSidebar = document.querySelector('.sidebar-toggle');
const closeSidebar = document.querySelector('.close-btn');
const sidebar = document.querySelector('.sidebar');

toggleSidebar.addEventListener('click', () =>{
    sidebar.classList.toggle('show-sidebar');
});

closeSidebar.addEventListener('click', () => {
    sidebar.classList.remove('show-sidebar');
});