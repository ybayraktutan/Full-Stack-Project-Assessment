import React, { useState } from 'react';

const AddVideo = ({videoData, setVideoData}) => {
    const [showAddVideo, setShowAddVideo] = useState(false);

    const [titleValue, setTitleValue] = useState();
    const [urlValue, setUrlValue] = useState();

    // const handleAddVideo = () => {
    //     const videoId = Math.floor(Math.random()*1000000);
    //     const newVideoData = {
    //       id: videoId,
    //       title: titleValue,
    //       url: urlValue,
    //       rating: 0,
    //     };
    //     setVideoData(videoData.concat(newVideoData));
    //     console.log(newVideoData);
    //     console.log(videoData);
    // };

    const handleAddVideo = () => {
        const videoId = Math.floor(Math.random()*1000000);
        const newVideoData = {
          id: videoId,
          title: titleValue,
          url: urlValue,
          rating: 0,
          timeSent: new Date()
        };

        const matchYoutubeUrl = ((url) => {
            const p = /^(?:https?:\/\/)?(?:m\.|www\.)?(?:youtu\.be\/|youtube\.com\/(?:embed\/|v\/|watch\?v=|watch\?.+&v=))((\w|-){11})(?:\S+)?$/;
            if (url.match(p)) {
                return url.match(p)[1];
                }
                 return false;
        })
        if(newVideoData.title && matchYoutubeUrl(newVideoData.url)) {
            setVideoData(videoData.concat(newVideoData));
            console.log(newVideoData);
            console.log(videoData);
        } else if(!newVideoData.title) {
            alert("Please add a title")
        } else if(!matchYoutubeUrl(newVideoData.url)) {
            alert("Please add a valid url")
        }        
    };

 
    return (
        <div className="Add-video m-4 col-6 col-md-2">
            <h5 onClick={() => setShowAddVideo(!showAddVideo)}>Add Video</h5>
            {showAddVideo && (
                <form className="mx-4 ">
                    <div className="d-flex my-2">
                        <label htmlFor="title" className="form-label mx-2">Title</label>
                        <input 
                            type="text" 
                            className="form-control" 
                            onChange={(e) => setTitleValue(e.target.value)} 
                            id="title" 
                        />
                    </div>
                    <div className="d-flex my-2">
                        <label htmlFor="url" className="form-label mx-2">URL</label>
                        <input 
                            type="text" 
                            className="form-control"
                            onChange={(e) => setUrlValue(e.target.value)} 
                            id="url" />
                    </div>
                    <div className="d-flex justify-content-center">
                        <button type="button" onClick={() => setShowAddVideo(!showAddVideo)} className="btn btn-warning mx-1">CANCEL</button>
                        <button type="button" onClick={handleAddVideo} className="btn btn-danger mx-1" >ADD</button>
                    </div>
                </form>
            )}
        </div>
    )
}

export default AddVideo;