// 회원가입할때 사용하려고 만듬
package me.shinsunyoung.springbootdeveloper.dto;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class AddUserRequest {
    private String email;
    private String password;
}
