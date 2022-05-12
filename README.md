# YouTube Video Player Clone

A clone of the YouTube video player in HTML, CSS and vanilla JavaScript with all the cool features such as volume controls, fullscreen, theater mode, captions, picture in picture, etc. 😱

You can play any video that you want, just follow the instructions below 👇

🙈 No data is collected!

# How to use

1. Start by forking the repository and clone it to your machine, clone instructions [here](#clone-repository)
1. Create a folder called `assets` in the root of the directory
1. Add a `.mp4` file in the root of that new folder
   -  If you have subtitles, add them to in the same folder
1. Download [ffmpeg](https://ffmpeg.org/download.html) so you be able to run the next command
1. Open terminal and execute the following command
   ```bash
   ffmpeg -i assets/{change_with_your_video_name}.mp4 -vf fps=1/10,scale=120:-1 assets/previewImgs/preview%d.jpg
   ```
1. Open the app in the browser following this steps:
   - Expand `src` directory
   - Right click on `index.html` file
   - Chose `Open with Live Server` (If you don't have the extension Live Server installed, you can find it [here](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer))

## Command explanation

### `ffmpeg`
Framework that decode, encode, transcode, mux, demux, stream, filter and play pretty much anything that humans and machines have created. Read the official documentation [here](https://ffmpeg.org/about.html).

### `-i assets/{change_with_your_video_name}.mp4`
Set the input as our video.

### `-vf`
Declare that we want to use video filters.

### ` fps=1/10`
Set the video filter with a rate of 1 frame every ten seconds.

### `scale=120:-1`
Set the preview image width to 120px and the height to be automatically scaled.

### `assets/previewImgs/preview%d.jpg`
Set the output as the folder named `assets/previewImgs/`. The `%d` will increment the number by one every time there is created a new file.

# Checklist

- [x] Play
- [x] Pause
- [ ] Change volume
- [ ] Move forward
- [ ] Move backwards
- [ ] Change play velocity
- [ ] Captions
- [x] Full screen
- [x] Theater mode
- [x] Picture in picture

# Technologies

- [HTML](https://developer.mozilla.org/en-US/docs/Web/HTML)
- [CSS](https://developer.mozilla.org/en-US/docs/Web/CSS)
- [JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript)

# Setup

## Clone repository

Create and go to the directory where you want to place the repository

```bash
  cd my-directory
```

Clone the project

```bash
  git clone https://github.com/pncsoares/youtube-video-player-clone.git
```

Go to the project directory

```bash
  cd youtube-video-player-clone
```

Open in Visual Studio Code

```bash
  code .
```

# License

MIT