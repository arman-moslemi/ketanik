import React, { useState } from "react";
import PropTypes from "prop-types";
import TrackPlayer, {
//   useTrackPlayerProgress,
  useProgress,
  usePlaybackState,
  useTrackPlayerEvents,
  Event
} from "react-native-track-player";
import {
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  ViewPropTypes
} from "react-native";
import { Colors } from "@assets/Colors";
import Icon from 'react-native-vector-icons/MaterialIcons';
import Slider from '@react-native-community/slider';
import { responsiveFontSize, responsiveHeight, responsiveScreenWidth, responsiveWidth } from 'react-native-responsive-dimensions';
import { myFontStyle } from "@assets/Constance";

function ProgressBar() {
    const progress = useProgress();

  return (
    <>
    <Slider
    style={styles.container}
    value={progress.position}
    minimumValue={0}
    maximumValue={progress.duration}
    thumbTintColor={Colors.darkGreen}
    
    minimumTrackTintColor={Colors.darkGreen}
    maximumTrackTintColor="#D3D3D3"
    onSlidingComplete={value => {
      TrackPlayer.seekTo(value);
    }}
  />
   <View style={styles.labelContainer}>
        <Text style={styles.labelText}>
          {new Date(progress.position * 1000).toISOString().slice(14, 19)}
        </Text>
        <Text style={styles.labelText}>
          {new Date((progress.duration - progress.position) * 1000)
            .toISOString()
            .slice(14, 19)}
        </Text>
      </View>
    {/* <View style={styles.progress}>
      <View style={{ flex: progress.position, backgroundColor: Colors.darkGreen,height:3, }} />
      <View
        style={{
            height:3,
          flex: progress.duration - progress.position,
          backgroundColor:"#D3D3D3"
        }}
      />
    </View> */}
    </>
  );
}

function ControlButton({ title, onPress }) {
  return (
    <TouchableOpacity style={styles.controlButtonContainer} onPress={onPress}>
      <Text style={styles.controlButtonText}>{title}</Text>
    </TouchableOpacity>
  );
}

ControlButton.propTypes = {
  title: PropTypes.string.isRequired,
  onPress: PropTypes.func.isRequired
};
async function seeks(type) {
  const currentTrack = await TrackPlayer.getPosition();
  const currentTrack2 = await TrackPlayer.getDuration();

console.log(currentTrack-10)
  if(type=="prev"){
    TrackPlayer.seekTo(currentTrack-10)
  }
  else{
    if(currentTrack+30<currentTrack2)
    {

      TrackPlayer.seekTo(await TrackPlayer.getPosition()+30)
    }
  }
}
export default function Player(props) {
  const playbackState = usePlaybackState();
  const [trackTitle, setTrackTitle] = useState("");
  const [trackArtwork, setTrackArtwork] = useState();
  const [trackArtist, setTrackArtist] = useState("");
  const { style, onNext, onPrevious, onTogglePlayback,stop,isplay,setPlay,setIndex,index,type } = props;
  useTrackPlayerEvents(["playback-track-changed"], async event => {
    console.log(8956)
    console.log(index)
    setPlay(false)
  //   if(type=="main")
  //  { setIndex(index+1)
  //   onTogglePlayback()
  // }
    // if (event.type === TrackPlayer.TrackPlayerEvents.PLAYBACK_TRACK_CHANGED) {
    //   const track = await TrackPlayer.getTrack(event.nextTrack);
    //   const { title, artist, artwork } = track || {};
    //   setTrackTitle(title);
    //   setTrackArtist(artist);
    //   setTrackArtwork(artwork);
    // }
  });

  var middleButtonText = "Play";

  if (
    playbackState === TrackPlayer.STATE_PLAYING ||
    playbackState === TrackPlayer.STATE_BUFFERING
  ) {
    middleButtonText = "Pause";
  }
  return (
    <View style={[styles.card, style]}>
      {/* <Image style={styles.cover} source={{ uri: trackArtwork }} /> */}
      <ProgressBar />
      {/* <Text style={styles.title}>{trackTitle}</Text>
      <Text style={styles.artist}>{trackArtist}</Text> */}
      <View style={styles.controls}>
        {/* <ControlButton title={"<<"} onPress={onPrevious} /> */}
        {/* <ControlButton title={middleButtonText} onPress={onTogglePlayback} /> */}
        <TouchableOpacity onPress={()=> seeks("prev")}  style={{flexDirection:'row'}}>

        <Icon name={"refresh"} size={40} color={Colors.darkGreen} style={{transform: [{rotateY: '180deg'}],marginHorizontal:responsiveWidth(5)}}/>
        <Text style={styles.prevSec}>10</Text>

</TouchableOpacity>
        {
            isplay?
            // <TouchableOpacity onPress={stop} style={{borderRadius:50,backgroundColor:Colors.white}}>
            <TouchableOpacity onPress={onTogglePlayback} >

<Icon name={"pause-circle-filled"} size={50} color={Colors.darkGreen}/>
</TouchableOpacity>
:
<TouchableOpacity onPress={onTogglePlayback}>

<Icon name={"play-circle-filled"} size={50} color={Colors.darkGreen}/>
</TouchableOpacity>
        }
<TouchableOpacity onPress={()=> seeks("next")} style={{flexDirection:'row'}}>

<Icon name={"refresh"} size={45} color={Colors.darkGreen}style={{marginHorizontal:responsiveWidth(5)}} />
<Text style={styles.nextSec}>30</Text>
</TouchableOpacity>

        {/* <ControlButton title={">>"} onPress={onNext} /> */}
      </View>
    </View>
  );
}

// Player.propTypes = {
//   style: ViewPropTypes.style,
//   onNext: PropTypes.func.isRequired,
//   onPrevious: PropTypes.func.isRequired,
//   onTogglePlayback: PropTypes.func.isRequired
// };

// Player.defaultProps = {
//   style: {}
// };

const styles = StyleSheet.create({
  container: {
    height: responsiveHeight(5),
    width: responsiveWidth(100),
    marginTop: 25,
    flexDirection: 'row',
  },
  nextSec: {
    color:Colors.darkGreen,
    position:"absolute",
  right:responsiveWidth(9.5),
  top:responsiveHeight(2),
   ...myFontStyle.smallRegular},
  prevSec: {
    color:Colors.darkGreen,
    position:"absolute",
  left:responsiveWidth(8.5),
  top:responsiveHeight(1.9),
   ...myFontStyle.smallRegular},
  labelContainer: {
    width: responsiveWidth(90),
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  labelText: {
    color: '#000',
    fontVariant: ['tabular-nums'],
  },
  card: {
    // width: "80%",
    // elevation: 1,
    borderRadius: 4
    // shadowRadius: 2,
    // shadowOpacity: 0.1,
    // alignItems: "center",
    // shadowColor: "black",
    // backgroundColor: "white"
    ,alignItems:'center',
    shadowOffset: { width: 0, height: 1 }
  },
  cover: {
    width: 140,
    height: 140,
    marginTop: 20,
    backgroundColor: "grey"
  },
  progress: {
    height: 1,
    // width: "100%",
    marginTop: 10,
    flexDirection: "row"
  },
  title: {
    marginTop: 10
  },
  artist: {
    fontWeight: "bold"
  },
  controls: {
    marginVertical: 20,
    flexDirection: "row"
    ,alignItems:'center',
  },
  controlButtonContainer: {
    flex: 1
  },
  controlButtonText: {
    fontSize: 18,
    textAlign: "center",

  }
});