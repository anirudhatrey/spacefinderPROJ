import React from 'react';
import { User } from "./model/model";
import { AuthService  } from "../services/AuthService";

interface Appstate{
  user: User | undefined

}

export class App extends React.Component<{},Appstate>{
  private authService:AuthService=new AuthService();
  render(){
    return(
      <div>App</div>
    )
  }
}