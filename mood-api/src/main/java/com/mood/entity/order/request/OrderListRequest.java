package com.mood.entity.order.request;

import lombok.Data;
import org.hibernate.validator.constraints.NotBlank;

import javax.validation.constraints.NotNull;
import java.io.Serializable;

/**
 * 应用模块
 * @author chaiwei
 * @time 2018-06-04 下午16:00
 */
@Data
public class OrderListRequest implements Serializable {

    private Integer orderStatus;

    private String buyerId;


}