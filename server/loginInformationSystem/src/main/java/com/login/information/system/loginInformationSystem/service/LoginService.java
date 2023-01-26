package com.login.information.system.loginInformationSystem.service;

import com.login.information.system.loginInformationSystem.model.Login;

import java.util.List;
public interface LoginService {
    Login findByUserName(String userName);
}
