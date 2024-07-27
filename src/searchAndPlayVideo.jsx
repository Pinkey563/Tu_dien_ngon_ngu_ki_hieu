function searchAndPlayVideo(word) {
  const inputWord = word.toLowerCase();
  const csvUrl = "1_1000_data.csv"; // Relative path to the CSV file
  //const skeFolder = "/vidSke/";
  const aniFolder = "/animeQIPEDCVid/animeQIPEDCVid/full/";
  const realVideo = document.querySelector(".real");
  const animationVideo = document.querySelector(".animation");
  //const skeletonVideo = document.querySelector(".skeleton");

  fetch(csvUrl)
    .then((response) => response.text())
    .then((text) => {
      const lines = text.split("\n");
      let videoUrl = "";
      let animationVideoPath = "";
      //let skeletonVideoPath = "";
      /*
      const realChecked = videoTypes.Real;
      const animationChecked = videoTypes.Animation;
      const skeletonChecked = videoTypes.Skeleton;
      */
      for (const line of lines) {
        const row = line.split(",");
        const word = row[0].toLowerCase();
        const videoId = row[2];

        if (word === inputWord) {
          videoUrl = row[1];
          animationVideoPath = (Number(videoId) > 200) ? aniFolder + "stylized_" + (Number(videoId) + 1) + ".mp4" : aniFolder + "stylized_" + videoId + ".mp4";
          //skeletonVideoPath = skeFolder + videoId + ".webm";
          break;
      }
    }
      if (videoUrl && animationVideoPath) {
        realVideo.src = videoUrl;
        animationVideo.src = animationVideoPath;
      //skeletonVideo.src = skeletonVideoPath : "";
        realVideo.style.visibility = "visible";
        animationVideo.style.visibility = "visible";
      //skeletonVideo.style.visibility = skeletonChecked ? "visible" : "hidden";
      }
      else {
        alert("Không tìm thấy từ này trong từ điển.");
      }
    })
    .catch((error) => {
      console.error("Error fetching CSV file:", error);
    });
};

export default searchAndPlayVideo;

