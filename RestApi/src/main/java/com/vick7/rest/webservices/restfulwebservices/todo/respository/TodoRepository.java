package com.vick7.rest.webservices.restfulwebservices.todo.respository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.vick7.rest.webservices.restfulwebservices.todo.Todo;

public interface TodoRepository extends JpaRepository<Todo, Integer> {
	List<Todo> findByUsername(String username);

}
