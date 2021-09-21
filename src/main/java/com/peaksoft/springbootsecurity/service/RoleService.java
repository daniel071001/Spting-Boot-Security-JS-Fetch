package com.peaksoft.springbootsecurity.service;

import com.peaksoft.springbootsecurity.model.Role;

import java.util.List;

public interface RoleService {


    List<String> getRoleNamesToList();

    Role getRoleByName(String name);

    Role getRoleByName(Long id);

    List<Role> getAllRoles();
}
//    List<Role> getAllRoles();
//
//    List<String> getRoleNamesToList();
//
//    Role getRoleByName(String name);
//
//    Role getRoleByName(Long id);
//}