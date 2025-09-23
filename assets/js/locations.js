mapboxgl.accessToken = 'pk.eyJ1Ijoic2FtdWVsYm9sZGVyIiwiYSI6ImNreTNmcWRtaDAxbnUybnE5OTh6b255NnAifQ.NhEpNPvluXHbhAUGcDVs5w';
const map = new mapboxgl.Map({
	container: 'maps',
	style: 'mapbox://styles/mapbox/streets-v11',
	center: [78.4867, 17.3850], // center on Hyderabad
	zoom: 2.5
});
const locations = [{
	coordinates: [78.4779203, 17.2465116], // longitude, latitude
	title: 'Aga Khan Academy Hyderabad',
	description: 'Set on 100 acres gifted by the state government near the Rajiv Gandhi International Airport, the Academy in Hyderabad is home to 167 residential students and 551 day students.',
	link: 'hyderabad.html',
	media: '<img src="assets/images/our-network/hyderabad.jpg" class="img-fluid">'
}, {
	coordinates: [39.2530657, -3.6508242], // Mombasa
	title: 'The Aga Khan Academy, Mombasa',
	description: 'With students from four continents, the 18-acre Academy is as diverse as its host city. It opened in 2003 and has been recognised by Microsoft as the only Showcase School in East Africa. ',
	link: '',
	media: '<iframe width="300" height="315" src="https://www.youtube.com/embed/_eZomy-Lqbg?si=W-e_C4zNZp112ozU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>'
}, {
	coordinates: [90.4238858, 23.8253946], // Dhaka
	title: 'Aga Khan Academy Dhaka',
	description: 'Opened in 2022, the Academy in Dhaka is based on a 17-acre site near Bashundara for students aged three to 18. The design for the Academy received the award for best ‘Future Education’ project at the World Architecture Festival 2017.',
	link: '',
	media: '<img src="assets/images/our-network/dhaka.jpg" class="img-fluid">'
}, {
	coordinates: [32.4603789, -25.9577244], // Maputo, Mozambique
	title: 'The Aga Khan Academy',
	description: 'Situated on 54 acres donated by the Mozambican government, the Academy in Maputo is 20 kilometres away from the city centre. It offers students aged three to 18 with high-quality education. ',
	link: '',
	media: '<img src="assets/images/our-network/maputo.jpg" class="img-fluid">'
}];
locations.forEach(loc => {
	const popupHTML = `
		<div class="popup-content">
			<div class="popup-title">${loc.title}</div>
			<div class="popup-desc">${loc.description}</div>
			<a href="${loc.link}" target="_blank" class="popup-link">Learn more quick facts →</a>
			<div class="popup-media">${loc.media}</div>
		</div>`;
	const popup = new mapboxgl.Popup({
		offset: 25
	}).setHTML(popupHTML);
	new mapboxgl.Marker().setLngLat(loc.coordinates).setPopup(popup) // attach popup directly to marker
		.addTo(map);
});