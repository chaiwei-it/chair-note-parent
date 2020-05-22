package com.mood.entity.spec;

import com.mood.entity.base.BaseEntity;
import lombok.Data;

import javax.persistence.Id;
import javax.persistence.Table;

/**
 * 应用模块
 * @author chaiwei
 * @time 2018-06-04 下午16:00
 */
@Data
@Table(name="rebate_spec")
public class Spec extends BaseEntity {

    @Id
    private String id;

    /**
     * 名称
     */
    private String name;

    private Integer showStatus;

    private Integer sortNum;



}