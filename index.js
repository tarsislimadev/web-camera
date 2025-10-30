import { HTML } from './libs/afrontend/index.js'

class StartCamButtonComponent extends HTML { }

class ConnectButtonComponent extends HTML { }

class StreamVideoComponent extends HTML { }

class MessagesComponent extends HTML { }

class SuperPage extends HTML {
  start_cam_button = new StartCamButtonComponent()
  connect_button = new ConnectButtonComponent()
  stream_video = new StreamVideoComponent()
  messages = new MessagesComponent()

  onCreate() {
    this.append(this.getStartCamButton())
    this.append(this.getConnectButton())
    this.append(this.getStreamVideo())
    this.append(this.getMessagesComponent())
  }

  getStartCamButton() {
    return this.start_cam_button
  }

  getConnectButton() {
    return this.connect_button
  }

  getStreamVideo() {
    return this.stream_video
  }

  getMessagesComponent() {
    return this.messages
  }
}

export class Page extends SuperPage { }
