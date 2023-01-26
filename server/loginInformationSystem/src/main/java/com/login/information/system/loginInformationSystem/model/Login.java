package com.login.information.system.loginInformationSystem.model;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.util.List;

@Document(collection = "users")
public class Login{
    @Id
    private String _id;
    private String userName;
    private String password;
    private String email;

    public Login(){

    }
    public Login(String userName, String password, String email){
        this.userName = userName;
        this.password = password;
        this.email = email;
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

    @Override
    public String toString(){
        return "userLogin{" +
                "Id='"+_id+'\''+
                ", userName='" +userName+'\''+
                ", password='" +password+'\''+
                ", email='" +email+'\''+
                '}';
    }
}
