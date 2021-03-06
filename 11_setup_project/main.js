var myApp = angular.module('myApp', []);

myApp.controller('MyController', function MyController($scope) {
	$scope.artists = [
		{
			"name"      : "Maziar Shirazi",
			"shortname" : "Maziar_Shirazi",
			"reknown"   : "Royal Academy of Painting and Sculpture",
			"bio"       : "Maziar has just finished his final year at The Royal Academy of Painting and Sculpture, where he excelled in glass etching paintings and portraiture. Hailed as one of the most diverse artists of his generation, Maziar is equally as skilled with watercolors as he is with oils, and is just as well-balanced in different subject areas. Maziar's collection entitled \"The Un-Collection\" will adorn the walls of Gilbert Hall, depicting his range of skills and sensibilities - all of them, uniquely Maziar, yet undeniably different"
		},
		{
			"name"      : "Babak Azari",
			"shortname" : "Babak_Azari",
			"reknown"   : "Artist to Watch in 2012",
			"bio"       : "The Artist to Watch in 2012 by the London Review, Johnathan has already sold one of the highest priced-commissions paid to an art student, ever on record. The piece, entitled Gratitude Resort, a work in oil and mixed media, was sold for $750,000 and Babak donated all the proceeds to Art for Peace, an organization that provides college art scholarships for creative children in developing nations"
		},
		{
			"name"      : "Mina Abdi",
			"shortname" : "Mina_Abdi",
			"reknown"   : "New York University",
			"bio"       : "Mina is a sophomore art sculpture student at New York University, and has already won all the major international prizes for new sculptors, including the Divinity Circle, the International Sculptor's Medal, and the Academy of Paris Award. Mina's CAC exhibit features 25 abstract watercolor paintings that contain only water images including waves, deep sea, and river."
		},
		{
			"name"      : "Sirus Dehghan",
			"shortname" : "Sirus_Dehghan",
			"reknown"   : "Art College in New Dehli",
			"bio"       : "The Art College in New Dehli has sponsored Sirus on scholarship for his entire undergraduate career at the university, seeing great promise in his contemporary paintings of landscapes - that use equal parts muted and vibrant tones, and are almost a contradiction in art. Sirus will be speaking on \"The use and absence of color in modern art\" during Thursday's agenda."
		},
		{
			"name"      : "Diana Tehrani",
			"shortname" : "Diana_Tehrani",
			"reknown"   : "New Orleans, LA",
			"bio"       : "A native of New Orleans, much of Diana's work has centered around abstract images that depict flooding and rebuilding, having grown up as a teenager in the post-flood years. Despite the sadness of devastation and lives lost, Diana's work also depicts the hope and togetherness of a community that has persevered. Diana's exhibit will be discussed during Tuesday's Water in Art theme."
		},
		{
			"name"      : "Sara Azad",
			"shortname" : "Sara_Azad",
			"reknown"   : "Chicago, IL",
			"bio"       : "Sara's giant-sized paintings all around Chicago tell the story of love, nature, and conservation - themes that are central to her heart. Sara will share her love and skill of graffiti art on Monday's schedule, as she starts the painting of a 20-foot high wall in the Rousseau Room of Hotel Contempo in front of a standing-room only audience in Art in Unexpected Places."
		},
		{
			"name"      : "Anahita Javidan",
			"shortname" : "Anahita_Javidan",
			"reknown"   : "Fullerton-Brighton-Norwell Award",
			"bio"       : "Anahita received the Fullerton-Brighton-Norwell Award for Modern Art for her mixed-media image of a tree of life, with jewel-adorned branches depicting the arms of humanity, and precious gemstone-decorated leaves representing the spouting buds of togetherness. The daughter of a New York jeweler, Anahita has been salvaging the discarded remnants of her father's jewelry-making since she was five years old, and won the New York State Fair grand prize at the age of 8 years old for a gem-adorned painting of the Manhattan Bridge."
		},
		{
			"name"      : "Faranak Azizi",
			"shortname" : "Faranak_Azizi",
			"reknown"   : "Roux Academy of Art, Media, and Design",
			"bio"       : "A first-year student at the Roux Academy of Art, Media, and Design, Faranak is already changing the face of modern art at the university. Faranak's exquisite abstract pieces have no intention of ever being understood, but instead beg the viewer to dream, create, pretend, and envision with their mind's eye. Faranak will be speaking on the \"Art of Abstract\" during Thursday's schedule"
		},
		{
			"name"      : "Zarnosh Zibandeh",
			"shortname" : "Zarnosh_Zibandeh",
			"reknown"   : "China International Art University",
			"bio"       : "A senior at the China International Art University, Zarnosh has become well-known for his miniature sculptures, often the size of a rice granule, that are displayed by rear projection of microscope images on canvas. Zarnosh will discuss the art and science behind his incredibly detailed works of art."
		}
	]
});

