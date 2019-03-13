window.onload = function(){
	/* Video */
	var video = document.getElementById("video");

	/* Buttons */
	var muteButton = document.getElementById("mute");

	/* Event listener for the mute button */
	muteButton.addEventListener("click", function(){
		if (video.muted == false) {
			/* Mute the video */
			video.muted = true;

			/* Update the button text */
			muteButton.innerHTML = "<i class='fas fa-volume-mute'></i>";
		} else {
			/* Unmute the video */
			video.muted = false;

			/* Update the button text */
			muteButton.innerHTML = "<i class='fas fa-volume-up'></i>";
		}
	});

	video.onended = function(e) {
		var video2 = document.getElementById("video2");
		swapVideos(video, video2);
		videoSetup(video2);
	};
}

function videoSetup(video){
	var playButton = document.getElementById("play-pause");
	var muteButton = document.getElementById("mute");

	/* Event listener for the play/pause button */
	playButton.addEventListener("click", function(){
		if (video.paused == true) {
			/* Play the video */
			video.play();

			/* Update the button text to 'Pause' */
			playButton.innerHTML = "Pause";
		} else {
			/* Pause the video */
			video.pause();

			/* Update the button text to 'Play' */
			playButton.innerHTML = "Play";
		}
	});

	playButton.click();

	if (video.muted == true) {
		/* Unmute the video */
		video.muted = false;

		/* Update the button text */
		muteButton.innerHTML = "<i class='fas fa-volume-up'></i>";
	}

	/* Event listener for the mute button */
	muteButton.addEventListener("click", function(){
		if (video.muted == false) {
			/* Mute the video */
			video.muted = true;

			/* Update the button text */
			muteButton.innerHTML = "<i class='fas fa-volume-mute'></i>";
		} else {
			/* Unmute the video */
			video.muted = false;

			/* Update the button text */
			muteButton.innerHTML = "<i class='fas fa-volume-up'></i>";
		}
	});

	video.onended = function(e) {
		var video2 = document.getElementById("video3");
		swapVideos(video, video2);
		videoSetup2(video2);
	};
}

function videoSetup2(video){
	var muteButton = document.getElementById("mute");

	video.play();

	if (video.paused == true) {
		/* Play the video */
		video.play();
	}
	if (video.muted == true) {
		/* Unmute the video */
		video.muted = false;

		/* Update the button text */
		muteButton.innerHTML = "<i class='fas fa-volume-up'></i>";
	}

	/* Event listener for the mute button */
	muteButton.addEventListener("click", function(){
		if (video.muted == false) {
			/* Mute the video */
			video.muted = true;

			/* Update the button text */
			muteButton.innerHTML = "<i class='fas fa-volume-mute'></i>";
		} else {
			/* Unmute the video */
			video.muted = false;

			/* Update the button text */
			muteButton.innerHTML = "<i class='fas fa-volume-up'></i>";
		}
	});

	/*video.onended = function(e) {
		var video2 = document.getElementById("video3");
		swapVideos(video, video2);
		videoSetup2(video2);
	};*/
}

function swapVideos(video1, video2){
	video1.style.display = "none";
	video2.style.display = "block";
}