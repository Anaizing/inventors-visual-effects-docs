import React from "react";
import {Unity, useUnityContext} from "react-unity-webgl";

export const WebGLRenderer = () => {
  const {unityProvider} = useUnityContext({
    loaderUrl: "",
    dataUrl: "",
    frameworkUrl: "",
    codeUrl: ""
  });

  return (
    <Unity
      id="react-unity-webgl-canvas-1"
      unityProvider={unityProvider}
    >
    </Unity>
  )
}
