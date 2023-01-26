package com.login.information.system.loginInformationSystem.dto;
import java.util.List;
public class LoginDTO {

    private String _id;
    private String userName;
    private String password;
    private String email;

    public LoginDTO(){

    }
    public LoginDTO(String _id ,String userName, String password, String email){
        this._id=_id;
        this.userName=userName;
        this.password=password;
        this.email=email;
    }

    public String getId(){
        return _id;
    }

    public void setId(String _id){
        this._id=_id;
    }

    public String getUserName(){
        return userName;
    }

    public void setUserName(String userName){
        this.userName=userName;
    }
    public String getPassword(){
        return password;
    }

    public void setPassword(String password){
        this.password=password;
    }
    public String getEmail(){
        return email;
    }

    public void setEmail(String email){
        this.email=email;
    }
}

