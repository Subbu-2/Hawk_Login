package com.login.information.system.loginInformationSystem.controller;

import com.login.information.system.loginInformationSystem.model.Login;
import com.login.information.system.loginInformationSystem.service.LoginService;
import com.login.information.system.loginInformationSystem.dto.LoginDTO;
import com.login.information.system.loginInformationSystem.util.objectMapperUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/loginService")
public class LoginRestController {

    @Autowired
    private LoginService loginService;

    @CrossOrigin(origins  ="http://localhost:3000")
    @GetMapping(value = "/{userName}")
    public LoginDTO getUserByUserDetails(@PathVariable("userName") String userName){
        return objectMapperUtils.map(loginService.findByUserName(userName),LoginDTO.class);
    }
}
