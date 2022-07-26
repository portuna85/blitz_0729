package com.blitz.repository;

import com.blitz.domain.posts.Posts;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface PostsRepository extends JpaRepository<Posts, Long> {

    @Modifying
    @Query("UPDATE Posts p SET p.view = p.view + 1 WHERE p.id = :id")
    int updateView(Long id);

    @Query("SELECT p FROM Posts p ORDER BY p.id DESC ")
    List<Posts> findAllDesc();
}
