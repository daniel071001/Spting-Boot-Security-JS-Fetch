
package com.peaksoft.springbootsecurity.service.impl;

import com.peaksoft.springbootsecurity.model.User;
import com.peaksoft.springbootsecurity.Repository.UserRepository;
import com.peaksoft.springbootsecurity.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class UserServiceImpl implements UserService {
    private final UserRepository userRepository;

    @Autowired
    public UserServiceImpl(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    @Override
    public List<User> getAllUsers() {
        return userRepository.findAll();
    }

    @Override
    public User getById(Long id) {
        return userRepository.findById(id).get();
    }

    @Override
    public User addUser(User user) {
        return userRepository.save(user);
    }

    @Override
    public User updateUser(User user) {
        return userRepository.save(user);
    }

    @Override
    public void deleteById(Long id) {
        userRepository.deleteById(id);
    }

    @Override
    public User findByUsername(String s) {
        List<User> users = getAllUsers();
        return users.stream().filter(x -> x.getName().equals(s)).findAny().orElse(null);
    }

    @Override
    public User findByEmail(String s) {
        List<User> users = getAllUsers();
        return users.stream().filter(x -> x.getEmail().equals(s)).findAny().orElse(null);
    }

}