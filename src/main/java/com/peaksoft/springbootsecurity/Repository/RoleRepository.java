package com.peaksoft.springbootsecurity.Repository;

import com.peaksoft.springbootsecurity.model.Role;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;
import org.springframework.web.bind.annotation.RequestBody;

import java.util.List;
@Repository
public interface RoleRepository  extends JpaRepository<Role, Long> {


    @Query("select role from Role")
    List<String> getRoleNamesToList();

}
