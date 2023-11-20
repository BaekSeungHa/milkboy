package spring.project.milkboy.global.error.exception;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;
import spring.project.milkboy.global.error.CustomException;
import spring.project.milkboy.global.error.ExceptionCode;

@ResponseStatus(value = HttpStatus.BAD_REQUEST)
public class InvalidPermissionException extends CustomException {

    public static final CustomException EXCEPTION =
            new InvalidPermissionException();

    private InvalidPermissionException() {
        super(ExceptionCode.INVALID_PERMISSION);
    }
}
