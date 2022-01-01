<%@ page language="java" contentType="text/html; charset=utf-8"
	pageEncoding="utf-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8">
<title>注册</title>
<link rel="stylesheet" href="bootstrap-4.4.1-dist/css/bootstrap.css">
<script src="bootstrap-4.4.1-dist/jquery-3.0.0.min.js"></script>
<script src="bootstrap-4.4.1-dist/popper.min.js"></script>
<script src="bootstrap-4.4.1-dist/js/bootstrap.js"></script>
</head>
<body style="background: url(photo/loginback.jpg) no-repeat;background-size:100% 100%;background-attachment:fixed">
			<!-- 导航条 -->
		<%@ include file = "nav_index.jsp"%>

		<!-- 内容  -->
		<div class="row" style="margin-top: 10px">
		<div class="col-lg-3"></div>
			<div class="col-lg-6">
				<div class="card" style="background-color: #e3f2fd;opacity:0.8;">
					<div class="card-header" style="background-color: #87CEFA;opacity:0.8;">用户注册</div>
					<div class="card-body">

						<p style="color: red">${info}</p>

						<form method="post" action="RegAction"
							enctype="multipart/form-data">

							<div class="form-group row">
								<label for="inputEmail3" class="col-sm-3 col-form-label">姓名</label>
								<div class="col-sm-6">
									<input type="text" name="username" class="form-control"
										id="inputEmail3" placeholder="姓名" required>
								</div>
							</div>


							<div class="form-group row">
								<label for="inputPassword3" class="col-sm-3 col-form-label">Password</label>
								<div class="col-sm-6">
									<input type="password" name="password" class="form-control"
										id="inputPassword3" placeholder="密码">
								</div>
							</div>


							<div class="form-group row">
								<label for="inputPassword3" class="col-sm-3 col-form-label">性别</label>
								<div class="col-sm-3">
									<div class="form-check form-check-inline">
										<input class="form-check-input" type="radio" name="sex"
											id="sex1" value="男"> <label class="form-check-label"
											for="sex1">男</label>
									</div>
									<div class="form-check form-check-inline">
										<input class="form-check-input" type="radio" name="sex"
											id="sex2" value="女"> <label class="form-check-label"
											for="sex2">女</label>
									</div>
								</div>
							</div>

							<div class="form-group row">
								<label for="inputPassword3" class="col-sm-3 col-form-label">出生年月</label>
								<div class="col-sm-5">
									<input type="date" name="birth" class="form-control"
										id="inputPassword3" placeholder="生日" value="2001-08-05">
								</div>
							</div>

							<div class="form-group row">
								<label for="inputEmail3" class="col-sm-3 col-form-label">专业</label>
								<div class="col-sm-3">
									<select class="form-control" name="major">
										<option value="电子商务">电子商务</option>
										<option value="计算机">计算机</option>
										<option value="软件工程">软件工程</option>
										<option value="软件工程">信息管理</option>
									</select>
								</div>
							</div>
							
							<div class="form-group row">
								<label for="inputEmail3" class="col-sm-3 col-form-label">寝室号</label>
								<div class="col-sm-3">
									<select class="form-control" name="roomNo">
										<option value="101">101</option>
										<option value="102">102</option>
										<option value="103">103</option>
										<option value="201">201</option>
										<option value="202">202</option>
										<option value="203">203</option>
										<option value="301">301</option>
										<option value="302">302</option>
										<option value="303">303</option>
									</select>
								</div>
							</div>
							
							<div class="form-group row">
								<label for="inputEmail3" class="col-sm-3 col-form-label">职位身份</label>
								<div class="col-sm-3">
									<select class="form-control" name="position">
										<option value="管理员">管理员</option>
										<option value="寝室长">寝室长</option>
										<option value="普通成员">普通成员</option>
									</select>
								</div>
							</div>
							
							<div class="form-group row">
								<label for="inputEmail3" class="col-sm-3 col-form-label">联系方式</label>
								<div class="col-sm-6">
									<input type="text" name="phone" class="form-control"
										id="inputEmail3" placeholder="联系方式" required>
								</div>
							</div>
							
							<div class="form-group row">
								<label class="col-sm-3 col-form-label">照片上传</label>
								<div class="form-group row">
									<input type="file" class="form-control-file" name="photo"
										id="exampleFormControlFile1">
								</div>
							</div>

							<div class="form-group row">
								<div class="col-sm-10">
									<button type="submit" class="btn btn-primary">注册</button>
								</div>

							</div>

						</form>
					</div>
				</div>
			</div>


		</div>

	</div>


</body>
</html>