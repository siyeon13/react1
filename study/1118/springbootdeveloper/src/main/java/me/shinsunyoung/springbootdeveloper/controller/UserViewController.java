package me.shinsunyoung.springbootdeveloper.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class UserViewController {
    @GetMapping("/login")
    public String login() {
        return "login";   // login.html 로 가라는 의미!
    }

    @GetMapping("/signup")
    public String signup() {
        return "signup";
    }
}
