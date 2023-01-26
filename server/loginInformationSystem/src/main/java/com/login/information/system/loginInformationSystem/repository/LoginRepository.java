package com.login.information.system.loginInformationSystem.repository;

import com.login.information.system.loginInformationSystem.model.Login;
import org.springframework.data.mongodb.repository.MongoRepository;
import java.util.List;
public interface LoginRepository extends MongoRepository<Login, String> {
    Login findByUserName(String userName);
}
