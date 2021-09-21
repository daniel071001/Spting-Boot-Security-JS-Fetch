package com.peaksoft.springbootsecurity.controller;

import com.peaksoft.springbootsecurity.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

@CrossOrigin
@Controller
@RequestMapping("/api")
public class ControllerUser {


    private final UserService userService;
    @Autowired
    public ControllerUser(UserService userService) {
        this.userService = userService;
    }

    @GetMapping("/admin")
    public String admin(){
        return "index1";
    }

    @GetMapping("/user")
    public String User(){
        return "user";
    }
}