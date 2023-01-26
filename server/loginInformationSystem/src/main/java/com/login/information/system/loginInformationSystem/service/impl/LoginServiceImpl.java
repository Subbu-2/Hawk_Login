package com.login.information.system.loginInformationSystem.service.impl;

import com.login.information.system.loginInformationSystem.model.Login;
import com.login.information.system.loginInformationSystem.repository.LoginRepository;
import com.login.information.system.loginInformationSystem.service.LoginService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class LoginServiceImpl implements LoginService{

    @Autowired
    private LoginRepository loginRepository;

    @Override
    public Login findByUserName(String userName){
        return loginRepository.findByUserName(userName);
    }
}
