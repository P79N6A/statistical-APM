package indiv.dev.grad.hit.pro.mapper;

import indiv.dev.grad.hit.pro.pojo.Users;
import indiv.dev.grad.hit.pro.example.UsersExample;
import java.util.List;
import org.apache.ibatis.annotations.Param;

public interface UsersMapper {
    int countByExample(UsersExample example);

    int deleteByExample(UsersExample example);

    int deleteByPrimaryKey(Integer id);

    int insert(Users record);

    int insertSelective(Users record);

    List<Users> selectByExampleWithBLOBs(UsersExample example);

    List<Users> selectByExample(UsersExample example);

    Users selectByPrimaryKey(Integer id);

    int updateByExampleSelective(@Param("record") Users record, @Param("example") UsersExample example);

    int updateByExampleWithBLOBs(@Param("record") Users record, @Param("example") UsersExample example);

    int updateByExample(@Param("record") Users record, @Param("example") UsersExample example);

    int updateByPrimaryKeySelective(Users record);

    int updateByPrimaryKeyWithBLOBs(Users record);

    int updateByPrimaryKey(Users record);

    String selectTokenByEmail(@Param("email")String email);

    String selectPassMd5ByEmail(@Param("email")String email);

    Integer updateTokenByEmail(@Param("token")String token, @Param("email")String email);

    Users selectUsersByEmail(@Param("email")String email);

    Users selectUsersByFullName(@Param("full_name") String fullName);
}