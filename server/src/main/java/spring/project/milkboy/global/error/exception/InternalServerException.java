package spring.project.milkboy.global.error.exception;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;
import spring.project.milkboy.global.error.CustomException;
import spring.project.milkboy.global.error.ExceptionCode;

@ResponseStatus(value = HttpStatus.INTERNAL_SERVER_ERROR)
public class InternalServerException extends CustomException {

    public static final CustomException EXCEPTION =
            new InternalServerException();

    private InternalServerException() {
        super(ExceptionCode.INTERNAL_SERVER);
    }
}
