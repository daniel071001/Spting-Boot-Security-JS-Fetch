package com.peaksoft.springbootsecurity.service;


import com.peaksoft.springbootsecurity.model.User;

import java.util.List;

public interface UserService {
//
//    User getUserByName(String name);
//
//    List<User> getAllUser();
//    User getById(Long id);
//    User addUser(User user);
//    User updateUser(User user);
//    void deleteById(Long id);
//
//    User findByUsername(String s);


        List<User> getAllUsers();

        User  getById(Long id);

        User addUser(User user);

        User updateUser(User user);

        void deleteById(Long id);


        User findByUsername(String s);

        User findByEmail(String s);

    }


